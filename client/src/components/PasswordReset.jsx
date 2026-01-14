import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const auth = getAuth();

import Header from "./Main/Header";
import Sidebar from "./Main/Sidebar";

import { useState, useEffect, useRef } from "react";

import { calculateMargin } from "../utils/helpers";
// just to reset password that's all. no big deal jare...
// a lot of things to set up to get a component up and running.
// like...
function PasswordReset() {
  let [nav, setNav] = useState(false);
  let [lightMode, setLightMode] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  );
  let [sent, setSent] = useState(false);
  let [spinner, setSpinner] = useState(false);
  let [marginTop, setMarginTop] = useState(0);
  let email = useRef(null);

  useEffect(() => {
    document.title = "Reset Password";
    calculateMargin(setMarginTop);
  }, []);

  async function handleClick() {
    setSpinner(true);
    try {
      await sendPasswordResetEmail(auth, email.current.value)
        .then(() => setSent(true))
        .catch(() => {}); // cool
    } catch (err) {
      console.log(err);
    } finally {
      setSpinner(false); // makes sense right...
    }
  }

  return (
    <div className={`app-container ${lightMode ? "app-light" : "app-dark"}`}>
      <Header
        setDarkMode={setLightMode}
        user={false} // it depends...
        nav={nav}
        setNav={setNav}
      />
      <main
        className="main-structure"
        style={{
          marginTop: `${marginTop}px`,
          minHeight: `calc(100% - ${marginTop}px)`,
          padding: "1em"
        }}
      >
        {nav ? <Sidebar login={false} lightMode={lightMode} /> : null}

        <div>
          <h3 className="is-size-3">Reset password</h3>
          <p>
            If you have an account with us, a reset link will be sent to your
            email
          </p>
          <form>
            <input
              type="text"
              name=""
              id=""
              ref={email}
              className="input"
              placeholder="Please enter your email"
            />
            <button
              className={`button is-info mt-3 ${spinner ? "is-loading" : ""}`}
              onClick={handleClick}
              type="button"
            >
              Send reset link
            </button>
            {sent ? (
              <p className="has-text-success">
                Reset link sent successfully. Check your email now.
              </p>
            ) : null}
          </form>
        </div>
      </main>
    </div>
  );
}

export default PasswordReset;
