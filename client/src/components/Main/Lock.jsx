import { useState, useEffect } from "react";
import { useRef } from "react";
import { fetchSingleDoc, updateDocument } from "../../utils/firebase";
import { Link } from "react-router-dom";
import { calculateMargin, generateFingerprint } from "../../utils/helpers";

import { useNavigate } from "react-router-dom";

import LockIcon from "@mui/icons-material/Lock";

import Header from "./Header";
import Sidebar from "./Sidebar";

import "../../css/Lock.css";
import { serverTimestamp } from "firebase/firestore";

// it means this lock thing is an app on it's own.
// it will be the lock page for the stuff...
// how to we do it then...
function Lock() {
  let user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();
  let [spinner, setSpinner] = useState(false);
  let [err, setErr] = useState("");
  let [nav, setNav] = useState(false);
  let [marginTop, setMarginTop] = useState(0);
  let [darkmode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  );
  let input = useRef(null);
  // anyone could get all the codes in my database. imagine. this is ridiculous...
  async function handleUnlock() {
    setErr(""); // for each retry clear error message...
    setSpinner(true);
    // fetching codes.
    // I will make a few code available for a start...
    if (input.current.value.length != 12) {
      // no need to query database... just a waste of time
      setErr("Invalid code!");
      setSpinner(false);
      return;
    }
    // makes sense. cool. thank you so much.
    try {
      // fetching single document is most appropriate...
      // now we have to update code uploading algorithm...
      let code = await fetchSingleDoc("codes", input.current.value); // user enter pin

      if (code) {
        // if code exists in db....
        if (!code.used) {
          // if code hasn't been used before...
          // if code is not used yet, update code and store useful properties...
          let update = await updateDocument("codes", code.id, {
            ...code,
            used: true,
            usedAt: serverTimestamp(),
            usedBy: {
              username: user.username,
              email: user.email,
              device: await generateFingerprint(),
            },
          });
          // understood...
          if (update) {
            localStorage.setItem("_sync", code.id);
            navigate("/practice/configure");
            setSpinner(false);
          } else {
            // keep retrying
            let interval = setInterval(async () => {
              let update = await updateDocument("codes", code.id, {
                ...code,
                used: true,
                usedAt: serverTimestamp(),
                usedBy: {
                  username: user.username,
                  email: user.email,
                  device: await generateFingerprint(),
                },
              });
              if (update) {
                navigate("/practice/configure"); // ok...
                localStorage.setItem("_sync", code.key);
                setSpinner(false);
                clearInterval(interval); // stop. thanks... just makes sure to update...
              }
            }, 1000);
          }
        } else if (code.used) {
          // if code has been used...
          // now we will have to assume that user is trying to reactivate device
          if (localStorage.getItem("_sync")) {
            setSpinner(false);
            setErr("Device already activated!");
          } else {
            let device = await generateFingerprint();
            if (device == code.usedBy.device) {
              localStorage.setItem("_sync", code.id);
              // nice and easy....
              navigate("/practice/configure");
              setSpinner(false);
            } else {
              setSpinner(false);
              setErr("Sorry, this pin is not yours!");
            }
          }
        }
      } else {
        setSpinner(false);
        setErr("Invalid code!");
      }
    } catch (e) {
      setErr("An error occured. Please try again");
      setSpinner(false);
      console.log(e);
    }
  }

  useEffect(() => {
    document.title = "Unlock";
    calculateMargin(setMarginTop);
  }, []);

  return (
    <div className={`app-container ${darkmode ? "app-light" : "app-dark"}`}>
      <Header setDarkMode={setDarkMode} user={user} nav={nav} setNav={setNav} />
      <main
        className="main-structure"
        style={{
          marginTop: `${marginTop}px`,
          height: `calc(100% - ${marginTop}px)`,
        }}
      >
        {nav ? <Sidebar login={true} lightMode={darkmode} /> : null}
        <div
          style={{
            height: "100%",
            display: "grid",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <div>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1em",
                justifyContent: "center",
                fontSize: "1.5em",
              }}
            >
              Enter code to unlock
            </p>

            <div className="locked-field">
              <input
                type="text"
                className="input"
                placeholder="Enter 12 digit code"
                ref={input}
              />
              <button
                type="button"
                className={
                  spinner
                    ? "button is-primary mt-3 is-loading"
                    : "button is-primary mt-3"
                }
                onClick={handleUnlock}
              >
                Unlock
              </button>
              {err ? <p className="has-text-danger mt-3">{err}</p> : null}
              <p className="mt-3 contact-us">
                Don't have a code or code not working?
                <a href="https://wa.me/+2348162200772" target="_blank">
                  {" "}
                  Contact us
                </a>{" "}
                on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Lock;

// that vendor stuff stuff will make sense
