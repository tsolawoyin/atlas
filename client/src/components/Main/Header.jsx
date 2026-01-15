import { useState, useEffect, useContext } from "react";
import "../../css/Header.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import BoltIcon from "@mui/icons-material/Bolt";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CircleIcon from "@mui/icons-material/Circle";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import BarChartIcon from '@mui/icons-material/BarChart';
import Bar from "./BatteryIcon";
// MDI icons
import Icon from "@mdi/react";
import { mdiSync } from "@mdi/js";
import { mdiSyncAlert } from "@mdi/js";

import { Link } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getSingleDoc } from "../../utils/firebase";
import { checkStreak } from "../../utils/helpers";
import { f, updateQuestions } from "./Config/utils/helper";

// since it is the header that displays the information, it should be the one to calculate it sha...

import "../../css/Header.css";

import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";

import { AppContext } from "../AppProvider";

function Header({ setDarkMode, nav, setNav, from }) {
  let navigate = useNavigate();
  // Stored User Data
  let user = JSON.parse(localStorage.getItem("user")) || null; // User might not exist alaye
  // User Streak
  let [streak, setStreak] = useState(user?.currentStreak || 0);
  let [prediction, setPrediction] = useState(user?.ep || 0);
  let [lightMode, setLightMode] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  );
  let [viewAcct, setViewAcct] = useState(false);
  let [spin, setSpin] = useState(false); // nice and easy...

  let { downloading, setDownloading, setDownloadError, setCheckStatus } =
    useContext(AppContext);

  if (lightMode) {
    document.documentElement.className = "theme-light";
  } else {
    document.documentElement.className = "theme-dark";
  }

  async function handleLogout() {
    await signOut(getAuth()); //

    localStorage.removeItem("uid"); //
    localStorage.removeItem("user");
    // console.log("User signed out")
    navigate("/"); // byebye thank you so much
  }

  function handleView() {
    if (viewAcct) setViewAcct(false);
    else setViewAcct(true); // makes sense.
  }

  function handleNav() {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
    // console.log("hello world");
  }

  // makes sense
  function handleClick() {
    if (lightMode) {
      setLightMode(false);
      localStorage.setItem("lightmode", JSON.stringify(false));
      if (setDarkMode)
        setDarkMode(JSON.parse(localStorage.getItem("lightmode")));
    } else {
      setLightMode(true);
      localStorage.setItem("lightmode", JSON.stringify(true));
      if (setDarkMode)
        setDarkMode(JSON.parse(localStorage.getItem("lightmode")));
    }
  }

  useEffect(() => {
    f("utme")
      .then((updates) => {
        if (updates.length) {
          setCheckStatus("downloading");
          setSpin(true);
          setDownloading(true);
        }
        updateQuestions(updates, "UTME")
          .then((res) => {
            setSpin(false);
            setDownloading(false);
          })
          .catch((err) => {
            setSpin(false);
            setDownloadError(err);
          });
      })
      .catch((err) => {
        setSpin(false);
        // setChecking(false);
        console.log("hi");
        setCheckStatus("up-to-date");
        // console.log(setCheckStatus, setDownloadError);
      });

    const validateStreak = async () => {
      // fetch fresh user details...
      // the solution is even very simple...
      let userDetails = await getSingleDoc("users", user.uid);
      // fetch as many times as possible... olofar sha...
      // console.log(userDetails);
      if (userDetails) {
        localStorage.setItem("user", JSON.stringify(userDetails));
        let checkS = await checkStreak(setStreak);
      }
    };

    // that is we check streak only if user is logged in or available...
    if (user) validateStreak();
  }, []);
  // Nice and Cool. Let's move on.
  return (
    <div
      id="header"
      style={{
        backgroundColor: `${from == "header" && "unset"}`,
      }}
    >
      <div>
        {!user ? (
          <div id="bootlogo">
            <Link to={"/"}>Atlas</Link>
          </div>
        ) : nav ? (
          // if nav is open, show closeIcon
          <CloseIcon onClick={handleNav} />
        ) : (
          // otherwise show dehazeIcon
          <DehazeIcon onClick={handleNav} />
        )}
      </div>
      <div className="icons-nav">
        {user && (
          <div style={{ display: "flex", gap: "5px" }}>
            {/* let's leave it like this for now then. shey you get... */}
            {/* the question recommendation algorithm can still wait for now, but this one is here to stay... let me sleep and wake up */}
            <Bar score={prediction || 0} streak={streak || 0} />
            <p className={setColor(prediction || 0)}>{prediction || 0}</p>
          </div>
        )}
        {user && (
          <div style={{ display: "flex" }}>
            <BoltIcon className="has-text-warning" />
            <p>{streak}</p>
          </div>
        )}
        {user && <Icon path={mdiSync} size={1} spin={spin} />}
        {/* <Icon path={mdiSyncAlert} size={1} color={"crimson"} /> */}
        {!user ? null : lightMode ? (
          <LightModeIcon onClick={handleClick} />
        ) : (
          <DarkModeIcon onClick={handleClick} />
        )}
        {user ? (
          <div>
            <figure className="image is-32x32" onClick={handleView}>
              <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
            </figure>
            {viewAcct ? (
              <ul
                id="account-info"
                style={
                  {
                    // I can write this stuffs here...
                    // The code is not dah easy to write o, omo...
                  }
                }
              >
                <li>
                  <Link to={`/users/${user.username}`}>
                    <span className="icon-text">
                      <span className="icon">
                        <PersonIcon />
                      </span>
                      <span>View Profile</span>
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to={"/users/edit"}>
                    <span class="icon-text">
                      <span class="icon">
                        <ManageAccountsIcon />
                      </span>
                      <span>Account Settings</span>
                    </span>
                  </Link>
                </li>
                {user.admin ? (
                  <li>
                    <Link to={"/admin"}>
                      <span className="icon-text">
                        <span className="icon">
                          <AdminPanelSettingsIcon />
                        </span>
                        <span>Go to admin</span>
                      </span>
                    </Link>
                  </li>
                ) : null}

                <li onClick={handleLogout}>
                  <span class="icon-text">
                    <span class="icon">
                      <PowerSettingsNewIcon />
                    </span>
                    <span>Sign out</span>
                  </span>
                </li>
              </ul>
            ) : null}
          </div>
        ) : (
          <div className="icons-nav">
            <span id="login-span">
              <Link
                to={"/login"}
                style={{ color: `${from == "header" && "white"}` }}
              >
                Log In
              </Link>
            </span>{" "}
            <span>
              <Link to={"/signup"}>
                <button
                  type="button"
                  className="button is-small "
                  id="header-signup"
                >
                  SIGN UP
                </button>
              </Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function setColor(score) {
  if (score < 200) {
    return "has-text-danger";
  } else if (score < 300) {
    return "has-text-warning";
  } else {
    return "has-text-success";
  }
}

export default Header;
