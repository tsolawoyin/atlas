import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useImmer } from "use-immer";
import CryptoJS from "crypto-js";
import { differenceInHours, isToday } from "date-fns";
import { motion } from "motion/react";

import fetchQuestions, { calculateMargin } from "../../../utils/helpers";

import { v4 as uuidv4 } from "uuid";

import { decrypt } from "../../../utils/firebase";

import { addData, getData } from "../../../utils/indexedDB";
import { computeNewProgress } from "../Exam/utils/forgetModel";
// that's unless I have a global state...
// and through that global state
// should we try it out...
// oya now

// MAJOR Component
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../../Footer";
// HELPER COMPONENT
import Table from "./Table";
import ConfigHelper from "./ConfigHelper";
import AssistantHelper from "./AssistantHelper";

// Helpers
import { reduce, fetchStatAndExams } from "./utils/helper";

// CSS
import "../../../css/Config.css";

function Config({ type }) {
  // if user doesn't exist in local storage sef the thing should log out
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user")); // I will come back to this error later
  let [openTab, setOpenTab] = useState(
    isToday(localStorage.getItem("lastPracticeRecommend"))
  );
  // yes we should have a recovery mode for the stuff...

  // so this is how the app will become seriously unresponsive if the user stuff disappears. wow...
  // I will just have to get the last one from the list that's all shey you get...
  // sharpnavigation sutff
  let [stats, setStats] = useState([]); // but this things needs update... hmmm...
  let username = user.username; // Username
  let [neg, setNeg] = useState(0);
  let [choosen, setChoosen] = useImmer([]);
  let [others, setOthers] = useImmer({ time: 10, type: "A" });
  let [configHelper, setConfigHelper] = useState(false); // so let me just find a small way to turn it on... a small but beautiful way
  let [selected, setSelected] = useImmer(0); // valid state
  let [loading, setLoading] = useState(false);
  let [err, setErr] = useState("");
  let [nav, setNav] = useState(false);
  let [setup, setSetup] = useState(true);
  let [marginTop, setMarginTop] = useState(0);
  let element = useRef(null);
  let [lightmode, setLightmode] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  );
  let activate = localStorage.getItem("_sync");
  // this one shouldn't have much problem too.
  // but in case it has, no problem...
  // we'll just be porting all our code to indexDB, no problem.
  // yupyup the other time I didn't use cryptojs... makes sense...
  // working fine. thank you....
  // the key is still in the code but more difficult.

  let [statusMsg, setStatusMsg] = useImmer([]);
  let [info, setInfo] = useState(null);

  let key = null;

  try {
    if (localStorage.getItem("uid")) {
      key = CryptoJS.AES.decrypt(
        localStorage.getItem("uid"),
        navigator.userAgent
      ).toString(CryptoJS.enc.Utf8);
    }
  } catch (err) {
    console.log(err);
  }

  async function handleStart(e) {
    // this is where it all starts; // set loading to true
    setLoading(true);
    setErr("");
    // don't be in haste to be pushing things anyhow. I understand that it's just normal for now... for an amateur like me.

    // first test of faith :)
    if (neg < 0 || neg > 1) {
      setErr("Negative marks can only range between 0 and 1");
      setLoading(false);
      return;
      // works properly up to this point...
    }

    // if activated, the user specifies obviously...
    let userTime = activate
      ? Number(others.time) || 10 // if user is activated... ok
      : others.time > 5
      ? others.time
      : others.time;

    if (choosen.length) {
      let questions = await getData("QuestionBank", type);

      try {
        if (questions && questions.length && key) {
          // for extra security...
          if (info) {
            setInfo(null); // makes sense? yupyup....
          }

          let exams = fetchQuestions(decrypt(questions, key), choosen);

          let examConfig = {
            createdAt: new Date(), // nice and easy..
            name: username,
            duration: userTime, // this is the time the user wants...
            questions: exams, // yupyup we attach oldScore to each exam normally...
            examType: others.type,
            userScore: 0,
            negativeMark: neg,
            finished: false,
            uid: uuidv4(),
            config: { choosen, createdAt: new Date(), others, neg }, // configuration file...
            // the config file will help with marking stuff.
          };

          console.log(examConfig.config); // just to see how things looks like...

          examConfig.questions = CryptoJS.AES.encrypt(
            JSON.stringify(examConfig.questions),
            key
          ).toString();
          // once this resolves, it will move on...

          let job = await addData("Exams", type, [examConfig], {
            keyPath: "uid",
          }); // keypath is important...

          // let's safeguard this thing so that we won't run into issue...
          // now let's try to store the config objects....
          if (!job) {
            throw new Error("Q");
          } else {
            setLoading(false);
            // this is where it moves on...
            navigate(`/practice/exam/${examConfig.uid}`); // this is everything I need. Just 4get. // no navigation for now. Please.
            // it would have navigated before setting loading to false isn't it?
          }
        } else if (!key) {
          console.log("error");
          throw new Error("K");
        } else {
          console.log("error");
          throw new Error("Q");
        }
      } catch (error) {
        console.log("This is a fatal error...");
        if (error.message == "K") {
          setInfo({
            status: "has-text-danger mt-3",
            message:
              "Key not available. Please log out and login again to fix this issue.",
          });
        } else if (error.message == "Q") {
          setInfo({
            status: "has-text-danger",
            message: "Questions not available. Please refresh this page",
          });
        } else {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    } else {
      setConfigHelper(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    // the only thing we do here is update user's stats and nothing else. thanks...
    document.title = `Configure ${type}`;

    // Nice and easy bruv.
    fetchStatAndExams(username, type, setStats)
      .then(() => {
        reduce(type, setStats, setStatusMsg, "normal");
      })
      .catch((err) => {
        // console.log(err);
        if (err.message == "Offline") {
          reduce(type, setStats, setStatusMsg, "offline");
        } else if (err.message == "File not found") {
          reduce(type, setStats, setStatusMsg, "file not found");
        }
      })
      .finally(() => {
        setSetup(false);
      });
    // so the result is predicable over time and it makes sense...
    // console.log(computeNewProgress(1, 86.36))
    // console.log(computeNewProgress(2, 85.93))
    // console.log(computeNewProgress(3, 85.09))
    // console.log(computeNewProgress(4, 83.92));
    // console.log(computeNewProgress(5, 82.26), "l")

    // // console.log(computeNewProgress(, 86.36), "j");
    // // console.log(computeNewProgress(6, 82.26), "j");

    calculateMargin(setMarginTop);
  }, []);

  // olofar mehn...

  window.onload = () => element.current.focus();

  return (
    <div className={`app-container ${lightmode ? "app-light" : "app-dark"}`}>
      <Header
        setDarkMode={setLightmode}
        user={user}
        nav={nav}
        setNav={setNav}
      />

      <main
        className="main-structure"
        style={{
          marginTop: `${marginTop}px`,
          height: `calc(100% - ${marginTop}px)`,
        }}
      >
        {nav ? <Sidebar login={user} lightMode={lightmode} /> : null}
        <div id="config">
          {setup && (
            // nice and easy... let's modify it here....
            <div className="custom-loader">
              <div className="custom-loader-child">
                <p style={{ textAlign: "center" }}>Boots 6 | Paverr</p>
                {/* we only show loader if we want to download things... shey you get??? */}
                {/* we  */}
                {/* nice and easy... */}
                {/* nice and easy bruv... moving on... */}
                <div className="helper-loader">
                  {/* now let's move on... */}
                  <p
                    style={{
                      display: `${statusMsg.length ? "block" : "none"}`,
                      textAlign: "center",
                    }}
                  >
                    {statusMsg.length && (
                      <span style={{ textAlign: "center" }}>
                        {statusMsg[statusMsg.length - 1].message}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
          {configHelper ? (
            <motion.div
              id="config-helper"
              initial={{ opacity: 0, transform: "translateX(-100px)" }}
              animate={{ opacity: 1, transform: "translateX(0px)" }}
              transition={{ type: "spring", duration: 1 }}
            >
              <ConfigHelper
                setConfigHelper={setConfigHelper}
                choosen={choosen}
                setChoosen={setChoosen}
                subjects={stats}
              />
            </motion.div>
          ) : null}
          <p className="has-text-centered is-size-4 mb-5">
            Configure {type == "UTME" ? "Practice" : type}
          </p>
          <form className="m-3">
            {/* <input
              ref={element}
              type="text"
              className="input" // makes sense. thank you.
              value={
                username // to get here you must have logged in so no need editing anything
              }
              disabled
            /> */}

            {/* Commenting out Assistant helper for now... */}
            {/* I need to redesign some aspects of boots for now */}
            {/* <AssistantHelper setChoosen={setChoosen} /> */}

            <fieldset className="my-4">
              {/* <legend>Select subject and topic</legend> */}
              <div className="subject-control">{/* nice and easy... */}</div>

              {err ? <p className="has-text-danger">{err}</p> : null}

              <Table
                choosen={choosen} // from here it's clear that this stuff needs choosen stuff... and I'm sure choosen will have a clear structure... nice and easy. cool and nice. thanks...
                selected={selected} // i think this one is just easy normally...
                setChoosen={setChoosen}
                setSelected={setSelected}
                setConfigHelper={setConfigHelper}
              />
              {/* add... */}
              {/* and the design just came as if it has been there in my mind all these while... makes sense... imagine... nice one... */}

              {/* thinking of a sleek design... */}
            </fieldset>
            <fieldset>
              <div className="control">
                <input
                  min={1}
                  type="number"
                  placeholder="enter time in minutes..."
                  className="input"
                  onInput={(e) =>
                    setOthers((draft) => {
                      draft.time = e.target.value;
                    })
                  }
                />

                <div className="select">
                  <select
                    name="type"
                    id="type"
                    onChange={(e) =>
                      setOthers((draft) => {
                        draft.type = e.target.value;
                      })
                    }
                    defaultValue={"A"}
                  >
                    <option
                      value="A"
                      key={"a"}
                      defaultValue={others.type == "A"}
                    >
                      Practice Mode
                    </option>
                    <option
                      value="B"
                      key={"b"}
                      defaultValue={others.type == "B"}
                    >
                      Test Mode
                    </option>
                  </select>
                </div>
              </div>
              <div className="control-2">
                <button
                  type="button"
                  className={loading ? "button is-loading" : "button"}
                  onClick={handleStart}
                  // it's not even possible sef...
                  // disabled={!openTab && !choosen.length}
                >
                  {choosen.length ? "Start" : "Open tab"}
                </button>
              </div>
            </fieldset>
            <div className="utme-info">
              {info && <p className={info.status}>{info.message}</p>}
              <p>
                New here?{" "}
                <a href="https://www.youtube.com/watch?v=xyQt3Xaz7co">
                  Watch this video
                </a>
              </p>
              {!activate && (
                <p>
                  <Link className="has-text-warning" to={"unlock"}>
                    Activate
                  </Link>
                </p>
              )}
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Config;
