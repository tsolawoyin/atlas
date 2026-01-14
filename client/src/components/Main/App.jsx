import Header from "./Header";
import Footer from "../Footer";
import Sidebar from "./Sidebar";

import { Link } from "react-router-dom";

import { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { calculateMargin } from "../../utils/helpers";
// import toggle from "../toggle";

// my profile photo
import myImage from "../../assets/images/mine.jpg";
// I'll fix it... for sure... we fix everything
export function App() {
  // this is highly problematic... lolz
  let user = useLoaderData();
  let [lightMode, setDark] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  );
  let [nav, setNav] = useState(false);

  let [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    document.title = "Welcome to Boots";
    calculateMargin(setMarginTop);
  }, []);
  // makes sense.
  return (
    <div className={`app-container landing-page ${lightMode ? "app-light" : "app-dark"}`} id={"landing"}>
      <Header setDarkMode={setDark} nav={nav} setNav={setNav} from={"header"} />
      <main
        className="main-structure"
        style={{
          marginTop: `${marginTop}px`,
          minHeight: `calc(100% - ${marginTop}px)`,
          color: "white"
        }}
      >
        {nav ? <Sidebar lightMode={lightMode} /> : null}
        {/* if nav is on, it comes up, otherwise, we move */}
        <div
          style={{ maxWidth: `1000px`, margin: "auto", padding: "7em 1em 1em" }}
        >
          <div id="boost">
            <div id="boost-div">
              <h1 className={`title is-size-3 is-size-1-desktop`} id="boost-header">
              Your Path to Sucess One Step at a Time.
              </h1>
              <p className="subtitle is-size-5-desktop has-text-white" style={{
                lineHeight: "28px"
              }}>Since 2024, Atlas (Boots 7) has been helping students gain admission into top courses in top universities in Nigeria. </p>
              <Link to={"/signup"}>
                <button
                  className={`button`}
                  style={{
                    background: "#FF6F61",
                    color: `white`,
                  }}
                >
                  Signup now
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* so this will be how it goes shey you understand */}
        {/* this will be the design */}
      </main>
    </div>
  );
}
