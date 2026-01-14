import { useState, useEffect } from "react";
import { calculateMargin } from "../../../utils/helpers";
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { convertMillisecondsToMinutesAndSeconds } from "../../../utils/helpers";
import { differenceInMilliseconds, format } from "date-fns";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../../Footer";
import ProfileDetails from "./ProfileDetails";


function ProfileBtns({username, localUsername}) {
  let navigate = useNavigate(); // nice and easy.
  let loc = useLocation();
  let parts = loc.pathname.split("/");
  const lastPart = parts[parts.length - 1];

  return (
    <div id="profile-btns">
      <button
        className={`button is-small ${lastPart == "stats" || lastPart == username ? "is-primary" : ""}`}
        type="button"
        onClick={(e) => {
          navigate("stats")
        }}
      >
        Stats
      </button>
      {username == localUsername ? (
        <button
          className={`button is-small ${lastPart == "exams" ? "is-primary" : ""}`}
          type="button"
          onClick={(e) => {
            navigate("exams");
          }}
        >
          Exam
        </button>
      ) : null}
    </div>
  )
}

function Profile() {
  let { username } = useParams()
  let localUser = JSON.parse(localStorage.getItem("user"));
  let [lightMode, setLightMode] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  );

  // this is why the streak use to misbehave, oti ye mi beyen
  let [streak, setStreak] = useState(localUser.currentStreak || 0);
  let [prediction, setPrediction] = useState(
    localStorage.getItem("overallscore") || 0
  );

  let [nav, setNav] = useState(false);
  const [marginTop, setMarginTop] = useState(0);

  let [currView, setCurrView] = useState(0);

  useEffect(() => {
    document.title = `Boots | ${username}`;
    calculateMargin(setMarginTop);
  }, []);

  return (
    <div className={`app-container ${lightMode ? "app-light" : "app-dark"}`}>
      <Header
        setDarkMode={setLightMode}
        nav={nav}
        setNav={setNav}
        streak={streak}
        prediction={Number(prediction)}
      />

      <main
        className="main-structures"
        style={{
          marginTop: `${marginTop}px`,
          height: `calc(100% - ${marginTop}px)`,
        }}
      >
        {nav ? <Sidebar login={false} lightMode={lightMode} /> : null}

        <div id="profiler">
          <ProfileDetails username={username} />
          <ProfileBtns username={username} localUsername={localUser.username}/>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;

// this one should be our outlet shey you get.
// {/* <div className="curr-view">
// {/* {currView ? (
//   <Exams exams={exams} deleteExam={deleteExam} />
// ) : (
//   // now what about the stats?
//   // then the config helper should be the one to get the stats normally...
//   // we can use authLoader to get what we want in this case sha
//   // shey you get...
//   // fetch user stats before time buh it's not gbera...
//   <ConfigHelper subjects={stats} from={"profile"} />
//   // it's like we need a shell around this, 
//   // we can't use the stats itself gangang
// )} */}

// <Outlet />
// {/* read stats then calculate normally... that's just it... thank you... */}
// {/* it's just the normal stat thing... */}
// </div> */}

// now we need to fetch all the data that will make this thing tick altogether... nice and easy...

// all I want to do is store the stuff on firestore... that's all... the rest is simple...
// store and retrieve appropriately. che you get...
