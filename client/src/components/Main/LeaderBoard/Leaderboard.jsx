import { useEffect, useState } from "react";
import { calculateMargin } from "../../../utils/helpers";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Outlet, useLoaderData, useNavigate, useLocation } from "react-router-dom";
// import "../../../css/Leaderboard.css";
import "../../../css/Leaderboard.css";

import { calculateUTMEPoints } from "../Exam/utils/calculatePoints";
// let's set up leaderboard...
import Footer from "../../Footer";
import { uploadStatAndExams } from "../../../utils/dailyTask";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Discord from "../../../assets/images/discord.png"

import StarIcon from '@mui/icons-material/Star';

import { differenceInCalendarDays } from "date-fns";

// This outlet allows for very powerful programming.

function LeaderBoardBtns() {
  const loc = useLocation();
  const parts = loc.pathname.split("/");
  const lastPart = parts[parts.length - 1];

  let navigate = useNavigate(); // nice and easy...

  return (
    <div className="leaderboard-btns">
      <button
        // so that all this ones aren't necessary any longer...
        className={`button is-small ${lastPart == "score-prediction" ? "is-primary" : ""}`}
        type="button"
        onClick={async (e) => {
          navigate("score-prediction"); // it's ok like this shey you get....
        }}
      >
        Exam Points
      </button>
      <button
        className={`button is-small ${lastPart == "streak" ? "is-primary" : ""}`}
        type="button"
        onClick={async (e) => {
          navigate("streak");
        }}
      >
        Streak
      </button>
      <button
        className={`button is-small ${lastPart == "this-week" || lastPart == "" || lastPart == "leaderboard" ? "is-primary" : ""}`}
        type="button"
        onClick={async (e) => {
          navigate("this-week");
        }}
      >
        This week
      </button>
      <button
        className={`button is-small ${lastPart == "all-time" ? "is-primary" : ""}`}
        type="button"
        onClick={async (e) => {
          navigate("all-time");
        }}
      >
        All time
      </button>
    </div>
  )
}

function StatTable() {
  return (
    <table className="table is-narrow is-bordered">
      <thead>
        <tr>
          <th className="small">Achievements</th>
          <th className="small">User</th>
          <th className="small">#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="small">Recent winner</th>
          <td className="small">veronica7</td>
          <td className="small">8880</td>
        </tr>
        <tr>
          <th className="small">Top winner</th>
          <td className="small">veronica7</td>
          <td className="small">🏆 &times;20</td>
        </tr>
        <tr>
          <th className="small">High score</th>
          <td className="small">veronica7</td>
          <td className="small">13778</td>
        </tr>
      </tbody>
    </table>
  );
}

function Leaderboard() {
  let [lightMode, setLightMode] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  );
  let [nav, setNav] = useState(false);
  let [marginTop, setMarginTop] = useState(0);

  // calculating days left to jamb shey you get? yupyup
  const today = new Date();
  const targetDate = new Date("2025-04-25"); // days to jamb normally

  const daysLeft = differenceInCalendarDays(targetDate, today);

  useEffect(() => {
    document.title = "Leaderboard";
    calculateMargin(setMarginTop);
  }, []);

  return (
    <div className={`app-container ${lightMode ? "app-light" : "app-dark"}`}>
      <Header
        setDarkMode={setLightMode}
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

        <div className="leaderboard">
          <div style={{
          }}>
          </div>
          <StatTable />
          {/* <section class="hero is-small is-danger mb-3">
            <div class="hero-body">
              <p class="title has-text-centered">{daysLeft} days to JAMB 2025</p>
            </div>
          </section> */}
          {/* <p
            style={{
              fontSize: ".8em",
              marginBottom: "1em",
            }}
            className="leaderboard-info"
          >
            Leaderboard ends: 6PM, 30/03/2025;
          </p> */}

          <LeaderBoardBtns />

          <Outlet />

          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "1em",
          }}>
            <a href="https://discord.gg/N6h3vs62es"><img src={Discord} width={"25px"} /> </a>
            <a href="https://chat.whatsapp.com/BS32w7ppmynHwVT6wRIQ9h"><WhatsAppIcon /></a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


export function addEmoji(score) {
  const generalStyle = {
    color: "goldenrod",
    fontSize: "16px"
  }
  if (score > 150000) {
    return (
      <span className="icon is-small">
        <StarIcon style={generalStyle} />
        <StarIcon style={generalStyle} />
        <StarIcon style={generalStyle} />
      </span>
    )
  } else if (score > 75000) {
    return (
      <span className="icon is-small">
        <StarIcon style={generalStyle} />
        <StarIcon style={generalStyle} />
      </span>
    )
  } else if (score > 25000) {
    return (
      <span className="icon is-small"><StarIcon style={generalStyle} /></span>
    )
  } else {
    return ""
  }
}

export default Leaderboard;

// Later on if need be, I will sort according to squad...

// this is all that is needed actually for this leaderboard...
// make sense... nice and easy
// much of the work I need to set up this leaderboard has been covered sef...
// why stressing my destiny...

// BruteForce...
// Something that is more gamified and neat... shey you get... unlike the boring type...
