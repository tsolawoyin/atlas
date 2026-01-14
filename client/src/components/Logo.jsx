// these educational niche is a great stuff...
import { useEffect, useState } from "react";
import { calculateMargin } from "../utils/helpers";

import Header from "./Main/Header";
import Footer from "./Footer";

import "../css/Logo.css";

// trust me...
function Logo() {
  let [lightmode, setLightMode] = localStorage.getItem("lightmode");
  let [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    calculateMargin(setMarginTop);
  }, []);
  return (
    <div className={`app-container ${lightmode ? "app-light" : "app-dark"}`}>
      <Header setDarkMode={setLightMode} />
      <main
        className="main-structure"
        style={{
          marginTop: `${marginTop}px`,
          height: `calc(100% - ${marginTop}px)`,
        }}
      >
        <div id="logo-div">
          <div id="logo-container">
            {/* <p>Paverr</p> */}
            <p>Boots</p>
            <p>Campus</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Logo;
