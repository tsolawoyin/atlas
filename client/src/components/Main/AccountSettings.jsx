import { useEffect, useState } from "react";
import { calculateMargin } from "../../utils/helpers";
import Header from "./Header";
import Sidebar from "./Sidebar";

import { calculateUTMEPoints } from "./Exam/utils/calculatePoints";

import "../../css/AccountSettings.css";
import {
  updateDocument,
  updateLeaderboard,
  updateUserPassword,
} from "../../utils/firebase";

function AccountSettings() {
  let [lightMode, setLightMode] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  );
  let user = JSON.parse(localStorage.getItem("user"))
  let [nav, setNav] = useState(false);
  let [spinner, setSpinner] = useState(false);
  let [msg, setMsg] = useState("");
  const [marginTop, setMarginTop] = useState(0);
  let {
    username,
    fullname,
    age,
    phone,
    squad,
    aspInstitute,
    aspCourse,
    address,
    uid,
    email,
    createdAt,
    prep,
    currentStreak
  } = JSON.parse(localStorage.getItem("user"));
  // userDetails must be present before user can choose to edit...
  let [streak, setStreak] = useState(currentStreak || 0)
  let [prediction, setPrediction] = useState(localStorage.getItem("overallscore") || 0);

  useEffect(() => {
    document.title = "Edit Account | Boots";
    calculateMargin(setMarginTop);
  }, []);

  // now let's try to get those info....
  // details...
  async function updateInfo(form) {
    setSpinner(true);
    setMsg("");
    // we update it here...
    // and also try to update it if present in the leaderboard somehow...
    // that's dobule addition...
    let informationDetails = {
      username: form.username.value || username,
      fullname: form.fullname.value || fullname,
      age: form.age.value || age || "",
      squad: form.squad.value || squad || "",
      aspInstitute: form.aspiring.value || aspInstitute || "",
      aspCourse: form.aspcourse.value || aspCourse || "",
      address: form.address.value || address || "",
      phone: form.phone.value || phone || "",
      prep: form.prep.value || prep || "",
      createdAt,
      email,
      uid,
    };

    // this one is just to update that's all...
    // updating the leaderboard info as well...
    // this is how it looks like to be doing core programming...
    // writing billions of line of code... mehn, that's crazy...
    // this will not be necessary for now...
    // if (informationDetails.username != username) {
    //   // also update the leaderboard
    //   console.log("updating leaderboard")
    //   await updateLeaderboard("leaderboard", "username", username, 0, {
    //     username: informationDetails.username,
    //   });
    // }

    // console.log("updating information")
    await updateDocument("users", uid, informationDetails);

    let passwordDetails = {
      mainPassword: form.newpassword.value,
      confirmPassword: form["confirm-password"].value,
      currentPassword: form["current-password"].value,
    };
    // console.log(informationDetails, passwordDetails)
    // we don't even need to check this infodetail of a thing... we just attempt update like dat
    // let update = await upd // update here
    if (
      passwordDetails.mainPassword &&
      passwordDetails.confirmPassword == passwordDetails.mainPassword
    ) {
      console.log("updating password");
      let upd = await updateUserPassword(
        passwordDetails.mainPassword,
        passwordDetails.currentPassword
      );

      if (!upd) {
        setMsg("Unable to update password");
        localStorage.setItem("user", JSON.stringify(informationDetails));
        setSpinner(false);
        return;
      }
    }
    localStorage.setItem("user", JSON.stringify(informationDetails)); // simple as abc... // instead of uncessary fetching shey u get..
    setMsg("Update successful");
    setSpinner(false);
  }
  return (
    <div className={`app-container ${lightMode ? "app-light" : "app-dark"}`}>
      <Header
        setDarkMode={setLightMode}
        nav={nav}
        setNav={setNav}
        streak={streak}
        prediction={prediction}
      />

      <main
        className="main-structure"
        style={{
          marginTop: `${marginTop}px`,
          height: `calc(100% - ${marginTop}px)`,
        }}
      >
        {nav ? <Sidebar login={false} lightMode={lightMode} /> : null}
        <div className="edit-form">
          <form>
            <div className="form-div">
              <p>INFORMATION</p>
              <ul>
                <li>
                  <label htmlFor="username">Username</label>
                  <input
                    className="input"
                    type="text"
                    name="username"
                    id="username"
                    placeholder={username}
                    disabled={true}
                  />
                </li>
                <li>
                  <label htmlFor="fullnane">Full name</label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="input"
                    placeholder={fullname}
                  />
                </li>
                <li>
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    placeholder={age ? age : 16}
                    className="input"
                  />
                </li>
                <li>
                  <label htmlFor="squad">
                    Preparing for? (JAMB, WAEC, NECO, POST-UTME, e.t.c.)
                  </label>
                  <input
                    type="text"
                    name=""
                    className="input"
                    id="prep"
                    placeholder={prep ? prep : "JAMB"}
                  />
                </li>
                <li>
                  <label htmlFor="squad">
                    Squad(School, Tutorial, or Study group)
                  </label>
                  <input
                    type="text"
                    name=""
                    className="input"
                    id="squad"
                    placeholder={squad ? squad : "BruteForce"}
                  />
                </li>
                <li>
                  <label htmlFor="aspiring">
                    Aspiring institution(University, Polytechnic, C.O.E, or
                    other)
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder={
                      aspInstitute ? aspInstitute : "University of Ibadan"
                    }
                    id="aspiring"
                    name="aspiring"
                  />
                </li>
                <li>
                  <label htmlFor="aspcourse">Aspiring Course</label>
                  <input
                    type="text"
                    name="aspcourse"
                    id="aspcourse"
                    placeholder={aspCourse ? aspCourse : "Computer Science"}
                    className="input"
                  />
                </li>
                <li>
                  <label htmlFor="address">Residence Address</label>
                  <input
                    type="text"
                    placeholder={address ? address : "Lekki, Lagos"}
                    className="input"
                    id="address"
                    name="address"
                  />
                </li>
                <li>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    className="input"
                    placeholder={phone ? phone : "08000000000"}
                    id="phone"
                    name="phone"
                  />
                </li>
              </ul>
            </div>
            <div className="form-div">
              <p>PASSWORD</p>
              <ul>
                <li>
                  <label htmlFor="newpassword">
                    New Password(Leave blank if you don't wish to change it)
                  </label>
                  <input
                    type="password"
                    name="newpassword"
                    id="newpassword"
                    className="input"
                  />
                </li>
                <li>
                  <label htmlFor="confirm-password">Confirn New Password</label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    className="input"
                  />
                </li>
                <li>
                  <label htmlFor="current-password">
                    Current Password (Needed if you change your password)
                  </label>
                  <input
                    className="input"
                    type="password"
                    name="current-password"
                    id="current-password"
                  />
                </li>
              </ul>
            </div>
            <div className="form-div">
              <p>DELETE ACCOUNT</p>
              <div>
                <p>
                  If you wish you can delete your account. You will lose all
                  your exams, config, and position in the leaderboard! After
                  deleting your account you are free to sign up again using the
                  same email address
                </p>
                <br />
                <button
                  className="button is-outlined is-danger"
                  style={{ fontSize: "12px" }}
                >
                  DELETE MY ACCOUNT
                </button>
              </div>
            </div>
            <div>{msg}</div>
            <button
              type="button"
              className={`button is-info ${spinner ? "is-loading" : ""}`}
              onClick={(e) => updateInfo(document.querySelector("form"))}
            >
              Update
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
// Nice and easy.
// I will need a whole large algorithm to calculate user's score. and unfortunately the point will be calculated on user's device. for now...
// o ga oo...
// I built it, so I should come up with a reward system that's cool...
export default AccountSettings;
