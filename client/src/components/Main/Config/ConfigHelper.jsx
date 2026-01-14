import "../../../css/ConfigHelper.css";
// import { setColor } from "../Exam/utils/helpers";
import { setColor } from "../Exam/utils/helpers";
import { useState, useRef, useEffect } from "react";
import { useImmer } from "use-immer";

import { v4 as uuidv4 } from "uuid";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockIcon from "@mui/icons-material/Lock";
import RepeatIcon from "@mui/icons-material/Repeat";
import AssistantIcon from "@mui/icons-material/Assistant";
import DoneIcon from "@mui/icons-material/Done";

import { motion } from "motion/react";

import "../../../css/Config.css";

import Recommend from "./Recommend";

import generateRecommendationsByPreference from "./utils/recommendation";
import { getData } from "../../../utils/indexedDB";

function Topics({
  t,
  i,
  setTopics,
  topicName,
  setColor,
  setChoosen,
  chooseColor,
  choosen,
  currSbj
}) {
  let lockStatus = localStorage.getItem("_sync");
  let [initialRender, setInitialRender] = useState(false);

  useEffect(() => {
    setInitialRender(true); // nice and easy..
  }, [])
  // ISSUE SOLVED. The way I've been using this stuff lasan. Olofar...
  // And I like it to be honest.
  return (
    <>
      {t.selected ? (
        <motion.li
          className="topic"
          style={{
            display: "grid",
            gap: ".5em",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: i || 1 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // gap: "1em"
            }}
          >
            <p
              // omo olo far ooo... no be small thing sha...
              onClick={(e) => {
                setTopics((draft) => {
                  let topic = draft.find((e) => e.name == t.name); // that's
                  topic.selected = false;
                });
              }}
            >
              {t.name}
            </p>
            <p
              style={{
                display: "flex",
                alignContent: "center",
                gap: "10px",
              }}
            >
              <RepeatIcon /> {t.attempts}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1em",
            }}
          >
            <input
              id={topicName} // this is the best solution... nice one...
              type="number"
              className="input topic-input is-rounded"
              autoFocus
            />
            <button
              type="button"
              className="button is-rounded is-primary"
              onClick={(e) => {
                // now I understand... hmmm... how should we go about it oooo.....
                // this val variable doesn't have any problem nitie, all it needs is valid input val...
                let val = document.querySelector(`#${topicName}`).value; // something like this should work

                if (val && val != "0") {
                  if (
                    choosen.find(
                      (c) => c.subject == currSbj && c.topic == t.name
                    )
                  ) {
                    setChoosen((draft) => {
                      let choice = draft.find(
                        (d) => d.subject == currSbj && d.topic == t.name
                      );
                      if (choice.qty != Number(val)) {
                        choice.qty = Number(val) <= 60 ? Number(val) : 60; // nice one...
                      }
                    });
                  } else {
                    // let me experiment with all the behaviors I want...
                    setChoosen(
                      choosen.concat({
                        name: currSbj,
                        subject: currSbj,
                        topic: t.name,
                        qty: Number(val) <= 60 ? Number(val) : 60, // max is 60....
                        type: "single",
                        id: uuidv4(),
                        selected: false,
                        oldScore: t.oldScore
                      })
                    );
                  }
                }

                setTopics((draft) => {
                  // which one is e.name, sha be whining ursef...
                  let topic = draft.find((e) => e.name == t.name); // that's
                  // it should have been selected at this point normally...
                  topic.selected = false;
                });
              }}
            >
              Add
            </button>
          </div>
        </motion.li>
      ) : (
        <motion.li
          key={t.name}
          className="subject"
          onClick={(e) => {
            // this one is easy actually... we will fix it normally...
            setTopics((draft) => {
              // which one is e.name, sha be whining ursef...
              if (!lockStatus && i >= 5) {
                // do nothing
              } else {
                let topic = draft.find((e) => e.name == t.name); // that's
                topic.selected = true;
              }
            });
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: !initialRender ? i / 10 + 0.1 : 0}}
        >
          <div>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>{t.name}</span>{" "}
              {!lockStatus && /*t.name == "Exam"*/ i >= 5 && <LockIcon />}
            </p>
            <p className={setColor(t.progress)}>{t.progress}%</p>
          </div>

          <progress
            className={`progress ${chooseColor(t.progress)}`}
            value={t.progress}
            max="100"
          >
            {t.progress}
          </progress>
        </motion.li>
      )}
    </>
  );
}

function ConfigHelper({
  setConfigHelper,
  choosen,
  setChoosen,
  subjects,
  from,
}) {
  let [curr, setCurr] = useState(0);
  // O reps view subject
  // 1 reps view topic
  // unless I use state to track the current subject... tooo... u know now... it
  let [currSbj, setCurrSbj] = useState(""); // it's just like this for now... // you know...
  let [topics, setTopics] = useImmer([]); // ok, I will just have to know

  let [showRecommend, setShowRecommend] = useState(false);

  let [choosenConfig, setChoosenConfigs] = useImmer([]);

  async function handleRecommendation() {
    let stats = await getData("Stats", "UTME");
    if (stats) {
      // moving on...
      let recommendations = generateRecommendationsByPreference(
        stats,
        choosenConfig
      );
      // balanced...

      let choices = [];

      recommendations.forEach((recommendation) => {
        // the config is present in the exam shey you detail. So we can check that to see what's happening.
        let config = {
          name: recommendation.subject,
          subject: recommendation.subject,
          topic: recommendation.topic,
          qty: recommendation.questions, // max is 60....
          type: "single",
          id: uuidv4(),
          selected: false,
          oldScore: recommendation.oldScore,
          recommend: true,
        };

        choices.push(config); // nice and easy...
      });

      setChoosen(choices); // done and dusted....
      setConfigHelper(false);
    }
  }

  return (
    <motion.div id="select-handler" className="p-2">
      {/* normal, we will handle this case normally... */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        {/* the back arrow will simply help set the arrow icon back to 0... shikena */}
        {curr ? (
          <ArrowBackIcon
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              setCurr(0); // simple as ABC...
            }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              gap: "1em",
              alignItems: "end",
              // background: "red",
            }}
          >
            <AssistantIcon
              className={`${showRecommend ? "has-text-warning" : ""}`}
              onClick={() => {
                setShowRecommend(!showRecommend);
              }}
              style={{
                display: "block",
              }}
            />
            <DoneIcon
              style={{
                visibility: `${choosenConfig.length ? "visible" : "hidden"}`,
              }}
              onClick={handleRecommendation}
            />
          </div>
        )}

        {from == "profile" ? null : (
          <button
            className="delete is-large"
            onClick={() => {
              setConfigHelper(false); // set it to false again... shey you get...
            }}
          ></button>
        )}
      </div>
      {/* don't worry too much about design for now... let's worry about functionality... */}
      {/* this is what we will just swap... shey you get... */}
      <div id="subject-container">
        {/* wait na... na just normal thing now, wetin do this thing... abeg don't be doing like omoale joh... */}
        {showRecommend ? (
          <Recommend
            subjects={subjects}
            setChoosen={setChoosen}
            setConfigHelper={setConfigHelper}
            setChoosenConfigs={setChoosenConfigs}
          />
        ) : (
          <ul
            style={{
              paddingTop: `${curr ? "1em" : "0"}`,
            }}
          >
            {curr
              ? topics.map((t, i) => {
                  // console.log(i);
                  // I can just do the parsing here...
                  let topicName = t.name.split(/[^a-zA-Z]/g).join(""); // nice one...
                  return (
                    // this is just a rough patch..
                    <Topics
                      t={t}
                      i={i}
                      setTopics={setTopics}
                      topicName={topicName}
                      setChoosen={setChoosen}
                      chooseColor={chooseColor}
                      setColor={setColor}
                      choosen={choosen}
                      currSbj={currSbj}
                    />
                  );
                })
              : subjects.map((s, i) => {
                  return (
                    <motion.li
                      key={s.name}
                      className="subject"
                      onClick={(e) => {
                        setCurrSbj(s.name); // shey you get....
                        setTopics(s.topics); // simple as ABC
                        setCurr(1);
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: i || 1 }}
                      transition={{ delay: i / 10 + 0.1 }}
                    >
                      <div>
                        <p>{s.name}</p>
                        <p className={setColor(s.progress)}>{s.progress}%</p>
                      </div>

                      {/* <p
                      //   nice one... This will add some tone of seriousness. You will just be like your life is wasting away as it is like this...
                      className={setColor(s.progress)}
                      style={{
                        width: `${s.progress}%`,
                        border: `1px solid`,
                      }}
                    ></p> */}

                      <progress
                        className={`progress ${chooseColor(s.progress)}`}
                        value={s.progress}
                        max="100"
                      >
                        {s.progress}
                      </progress>
                    </motion.li>
                  );
                })}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
{
  /* <Recommend />; */
}

// this one is more like opaparada.... shey you get... no be shereshere at all...
// lolzzz...

function chooseColor(num) {
  if (num < 50) {
    return "is-danger";
  } else if (num < 70) {
    return "is-warning";
  } else {
    return "is-success";
  }
}

export default ConfigHelper;
