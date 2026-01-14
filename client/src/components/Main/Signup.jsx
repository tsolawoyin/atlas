import Header from "./Header";
import Sidebar from "./Sidebar";

import "../../css/Signup.css";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useImmer } from "use-immer";
import { signUp } from "../../utils/firebase";
import { Link } from "react-router-dom";

import { calculateMargin } from "../../utils/helpers";
// I will need to validate clientSide before proceeding
// maybe validation will be written later
// thank you.
import { getSingleDoc } from "../../utils/firebase";
import CryptoJS from "crypto-js";
// let's just have everything in place.
// we work on the rest later...
function Signup() {
  let [lightMode, setLightMode] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  );
  const [keyId, setId] = useState("og2GAEh85iSpAuI6qDTQ");
  let navigate = useNavigate();
  let [nav, setNav] = useState(false);
  let [spinner, setSpinner] = useState(false);
  const [marginTop, setMarginTop] = useState(0);
  let [valid, setValid] = useImmer({
    fullname: false,
    email: false,
    username: false,
    phone: false,
    password: false,
  }); // it is false initially
  let [err, setErr] = useState("");
  let form = useRef(null);

  async function handleSignUp() {
    setErr(""); // this is to clear any error message if its exists. shey u get. makes sense?????
    // cool
    setSpinner(true);
    // before making network requests let's sanctify the form
    const formEl = form.current;
    // let's validate it one by one abi???
    // let's assume all field is valid
    try {
      for (let v of Object.keys(valid)) {
        if (!valid[v]) {
          // if all these pass then we can proceed with making network request
          // display err message
          if (v == "fullname") {
            setErr("Full name must be more than four character long");
          } else if (v == "email") {
            setErr("Invalid email format");
          } else if (v == "username") {
            setErr(
              "Username must have more than three characters, all lowercase, with optional numbers at the back"
            );
          } else if (v == "phone") {
            setErr("Number must be a valid Nigeria phone number");
          } else if (v == "password") {
            setErr("Password must have 6 or more characters");
          }

          throw new Error("Invalid form fields");
        }
      }
      // let's signup
      // this thing get real issue o... hmmmmm
      let job = await signUp(
        formEl.email.value,
        formEl.password.value,
        formEl.fullname.value,
        formEl.username.value.toLowerCase(),
        formEl.phone.value
      );

      if (job == "duplicate username") {
        setErr("Username already taken");
      } else if (job.includes("email-already-in-use")) {
        setErr("Email already in use");
      } else {
        let userDetails = await getSingleDoc("users", job);

        let key = await getSingleDoc("key", keyId); // fetch key

        if (userDetails && key) {
          // store key in session storage
          // stored in session storage...
          let userAgent = navigator.userAgent; // this will be our encryption

          key = CryptoJS.AES.encrypt(key.value, userAgent).toString();

          localStorage.setItem("uid", key); // let's store it there. for now... for persistence sake. thank you.
          // makes sense right? yupyup... thank you so much.
          // it still goes actually shey u get...
          if (userDetails.admin) {
            // not going to be called forever and ever more...
            // no signup user is assigned admin role from start... not possible...
          } else {
            localStorage.setItem("user", JSON.stringify(userDetails));
            navigate("/practice/configure"); // makes sense...
          }
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSpinner(false);
    }
    // the errors that can occur here is more than 1 billion
    // but let's provide some information to users anyways...
  }

  useEffect(() => {
    document.title = "Sign Up";
    calculateMargin(setMarginTop);
  }, []);

  return (
    <div className={`app-container ${lightMode ? "app-light" : "app-dark"}`}>
      <Header
        setDarkMode={setLightMode}
        user={false} // the way I redirect stuff... will make sure this is false
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
        {nav ? <Sidebar login={false} lightMode={lightMode} /> : null}
        <div id="signup">
          <form ref={form} id="signup-form">
            <h3 className="is-size-4 has-text-centered">Register for Free</h3>
            <ul>
              <li>
                <label htmlFor="fullname"></label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Full name"
                  className="input"
                  onInput={(ev) => {
                    // onInput function here
                    const pattern = /[a-zA-Z]{4,}/;

                    if (pattern.test(ev.currentTarget.value)) {
                      setValid((draft) => {
                        draft.fullname = true;
                      });
                      setErr("");
                      ev.currentTarget.classList.remove("is-danger");
                      ev.currentTarget.classList.add("is-success");
                    } else {
                      setValid((draft) => {
                        draft.fullname = false;
                      });
                      setErr("Full name must be more than four character long");
                      ev.currentTarget.classList.remove("is-success");
                      ev.currentTarget.classList.add("is-danger");
                    }
                  }}
                />
              </li>
              <li>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="input"
                  onInput={(ev) => {
                    // onInput function here
                    const pattern = /[a-z0-9]+@[a-z]+\.[a-z]+/;

                    if (pattern.test(ev.currentTarget.value)) {
                      setValid((draft) => {
                        draft.email = true; // thank you.
                      });
                      setErr("");
                      ev.currentTarget.classList.remove("is-danger");
                      ev.currentTarget.classList.add("is-success");
                    } else {
                      setValid((draft) => {
                        draft.email = false;
                      });
                      setErr("Invalid email format");
                      ev.currentTarget.classList.remove("is-success");
                      ev.currentTarget.classList.add("is-danger");
                    }
                  }}
                />
              </li>
              <li>
                <label htmlFor="username"></label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  className="input"
                  onInput={(ev) => {
                    // onInput function here
                    const pattern = /^[a-zA-Z]{3,}\d*$/;

                    if (pattern.test(ev.currentTarget.value)) {
                      setValid((draft) => {
                        draft.username = true; // thank you.
                      });
                      setErr("");
                      ev.currentTarget.classList.remove("is-danger");
                      ev.currentTarget.classList.add("is-success");
                    } else {
                      setValid((draft) => {
                        draft.username = false;
                      });
                      setErr(
                        "Username must have more than three characters, all lowercase, with optional numbers at the back"
                      );
                      ev.currentTarget.classList.remove("is-success");
                      ev.currentTarget.classList.add("is-danger");
                    }
                  }}
                />
              </li>
              <li>
                <label htmlFor="phone"></label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="input"
                  onInput={(ev) => {
                    // onInput function here
                    const pattern = /^(\+234|0)[789][01]\d{8}$/;

                    if (pattern.test(ev.currentTarget.value)) {
                      setValid((draft) => {
                        draft.phone = true; // thank you.
                      });
                      setErr("");
                      ev.currentTarget.classList.remove("is-danger");
                      ev.currentTarget.classList.add("is-success");
                    } else {
                      setValid((draft) => {
                        draft.phone = false;
                      });
                      setErr("Number must be a valid Nigeria phone number");
                      ev.currentTarget.classList.remove("is-success");
                      ev.currentTarget.classList.add("is-danger");
                    }
                  }}
                />
              </li>
              <li>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input"
                  placeholder="Password"
                  onInput={(ev) => {
                    // onInput function here
                    if (ev.currentTarget.value.length >= 6) {
                      setValid((draft) => {
                        draft.password = true; // thank you.
                      });
                      setErr("");
                      ev.currentTarget.classList.remove("is-danger");
                      ev.currentTarget.classList.add("is-success");
                    } else {
                      setValid((draft) => {
                        draft.password = false;
                      });
                      setErr("Password must have 6 or more characters");
                      ev.currentTarget.classList.remove("is-success");
                      ev.currentTarget.classList.add("is-danger");
                    }
                  }}
                />
              </li>
              {err.length ? <li className="has-text-danger">{err}</li> : null}
              <li>
                <button
                  type="button"
                  onClick={handleSignUp}
                  className={`button ${spinner ? "is-loading" : ""}`}
                >
                  Register
                </button>
              </li>
            </ul>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1em",
              }}
            >
              <p>
                Already have an account?<Link to="/login"> Login</Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signup;
