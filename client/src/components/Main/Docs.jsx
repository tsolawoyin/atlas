import { useState } from "react";
import { calculateMargin } from "../../utils/helpers";
import Header from "./Header";

function Docs() {
  // return doc.. normally....
  let user = JSON.parse(localStorage.getItem("user"));
  let [lightmode, setLightMode] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  );
  let [nav, setNav] = useState(false);
  let [marginTop, setMarginTop] = useState(0);

  let [streak, setStreak] = useState(user.currentStreak || 0 );
  let [prediction, setPrediction] = useState(localStorage.getItem("overscore") || 0)

  useEffect(() => {
    //
    document.title = "Boots | Docs"
    calculateMargin(setMarginTop);
  }, []);

  return (
    <div className={`app-container ${lightmode ? "app-light" : "app-dark"}`}>
        <Header setDarkMode={setLightMode} nav={nav} setNav={setNav} streak={streak} prediction={prediction}/>
    </div>
  )
}
