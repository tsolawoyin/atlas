import RateReviewIcon from "@mui/icons-material/RateReview";
import BoltIcon from "@mui/icons-material/Bolt";
import ChatIcon from "@mui/icons-material/Chat";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "../../css/Sidebar.css";

import Logo from "../../assets/boots-5-logo-zip-file/png/logo-no-background.png";
// easy....
// easy....
// still easy to set up without react. think of doing all this without react, it's a death wish actually.
import { motion } from "motion/react";

function Sidebar({ login, lightMode }) {
  let navigate = useNavigate(); //
  let user = JSON.parse(localStorage.getItem("user"));

  async function handleLogout() {
    await signOut(getAuth()); //

    localStorage.removeItem("uid"); // that's off. byebye bro...
    localStorage.removeItem("user");
    // console.log("User signed out")
    navigate("/"); // byebye thank you so much
  }
  return (
    <motion.nav
      className="sidebar"
      style={{
        backgroundColor: `${lightMode ? "white" : "hsl(216, 100%, 4%)"}`,
      }}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <ul>
        <li className="menu">
          <p className="menu-label">Training</p>
          <ul className="menu-list">
            <li>
              <Link
                to={
                  user.email == "samuelolawoyin3@gmail.com"
                    ? "/practice/configure/mbbs"
                    : "/practice/configure"
                }
              >
                <div className="nav-child">
                  <BoltIcon />
                  <div>
                    <p className="nav-child-main">Practice</p>
                    <p>Complete challenging Tests to earn points and rank</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu">
          <p className="menu-label">Community</p>
          <ul className="menu-list">
            <li>
              <Link to={"/users/leaderboard"}>
                <div className="nav-child">
                  <LeaderboardOutlinedIcon />
                  <div>
                    <p className="nav-child-main">Leaderboard</p>
                    <p>Achieve points and move up the nationwide leaderboard</p>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"https://chat.whatsapp.com/BS32w7ppmynHwVT6wRIQ9h"}>
                <div className="nav-child">
                  <ChatIcon />
                  <div>
                    <p className="nav-child-main">Chat</p>
                    <p>Join Boots Whatsapp Brainstorming Group</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu">
          <p className="menu-label">About</p>
          <ul className="menu-list">
            <li>
              <Link to={"#"}>
                <div className="nav-child">
                  <MenuBookIcon />
                  <div>
                    <p className="nav-child-main">Docs</p>
                    <p>Learn about all of the different aspects of Boots 5</p>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"https://boots5.substack.com/"}>
                <div className="nav-child">
                  <RateReviewIcon />
                  <div>
                    <p className="nav-child-main">Blog</p>
                    <p>Read the latest news from Boots 5 and the community</p>
                  </div>
                </div>
              </Link>
            </li>
            <li style={{ visibility: "hidden" }}>
              <Link href="#">
                <div className="nav-child">
                  <RateReviewIcon />
                  <div>
                    <p className="nav-child-main">Blog</p>
                    <p>Read the latest news from Boots 5 and the community</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </motion.nav>
  );
}

// makes sense let's use it like for us...
export default Sidebar;
