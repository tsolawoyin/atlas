import Header from "./Main/Header";
import Sidebar from "./Main/Sidebar";

import "../css/Login.css";
import { useState, useRef, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signIn } from "../utils/firebase";
import { getSingleDoc } from "../utils/firebase";
import { calculateMargin } from "../utils/helpers";

import CryptoJS from "crypto-js";

function Login() {
  let user = useLoaderData();
  const navigate = useNavigate();
  const [keyId, setId] = useState("og2GAEh85iSpAuI6qDTQ");
  const [lightMode, setLightMode] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  );
  const [nav, setNav] = useState(false);
  const [marginTop, setMarginTop] = useState(0);

  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState("");
  const email = useRef(null);
  const password = useRef(null);

  async function handleLogin() {
    let emailValue = email.current.value;
    let passwordValue = password.current.value;
    setError("");
    setSpinner(true);
    // Nice and cool. Makes sense. I want to 
    // So that samuelolawoyin alone can access the mbbs part. just something personal shey u get.
    try {
      let user = await signIn(emailValue, passwordValue);

      let userDetails = await getSingleDoc("users", user.uid);

      let key = await getSingleDoc("key", keyId); // fetch key

      if (userDetails && key) {
        // store key in session storage
        // stored in session storage...
        let userAgent = navigator.userAgent; // this will be our encryption

        key = CryptoJS.AES.encrypt(key.value, userAgent).toString();

        localStorage.setItem("uid", key); // let's store it there. for now... for persistence sake. thank you.
        // makes sense right? yupyup... thank you so much.
        localStorage.setItem("user", JSON.stringify(userDetails));
        navigate("/practice/configure"); // makes sense...
        // if (userDetails.admin) {
        //   // let's manage it like this... makes sense
        //   // navigate("/admin");
        //   // localStorage.setItem("user", JSON.stringify(userDetails));
        // } else {
        //   if (user.email == "samuelolawoyin3@gmail.com") {
        //     navigate("/practice/configure/mbbs");
        //   } else {
        //   }
        // }
        // just login normally....
      }
    } catch (error) {
      if (error.message.includes("auth/invalid-credential")) {
        setError("Invalid email or password");
      } else if (error.message.includes("auth/network-request-failed")) {
        setError("Error. Please check your internet connection");
      }
      // then don't log in... // still working on errors...
    } finally {
      setSpinner(false);
    }
  }

  useEffect(() => {
    document.title = "Login";
    calculateMargin(setMarginTop);
  }, []);
  // now the whole app can share the same css
  // which makes it seriously easy to reason about unlike before...
  return (
    <div className={`app-container ${lightMode ? "app-light" : "app-dark"}`}>
      <Header
        setDarkMode={setLightMode}
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
        {nav ? <Sidebar login={user} lightMode={lightMode} /> : null}
        {/* the rest is easy. */}
        <div id="login-div">
          <form id="login-form" className="main">
            <h3 className="has-text-centered is-size-4">Log in</h3>
            <ul className="mt-5">
              <li>
                <label htmlFor="email" className="">
                  Email{" "}
                </label>
                <input
                  ref={email}
                  className="input my-3"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@xyz.com"
                />
              </li>
              <li>
                <label htmlFor="password">Password</label>
                <input
                  ref={password}
                  className="input mt-3"
                  type="password"
                  name="password"
                  id="password"
                />
              </li>
              {error ? (
                <li className="has-text-danger" style={{ paddingTop: "6px" }}>
                  {error}
                </li>
              ) : null}
            </ul>

            <button
              className={`button is-info mt-3 ${spinner ? "is-loading" : ""}`}
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1em",
              }}
            >
              <p>
                New here?<Link to="/signup"> Sign up</Link>
              </p>
              <p>
                <Link to="/reset_password">Reset password</Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
