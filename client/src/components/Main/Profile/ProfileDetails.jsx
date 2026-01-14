import { fetchDoc } from "../../../utils/firebase";

import BarChartIcon from "@mui/icons-material/BarChart";
import BoltIcon from "@mui/icons-material/Bolt";
import MovingIcon from '@mui/icons-material/Moving';
import Bar from "../BatteryIcon";

import { useState, useEffect } from "react";

import { addEmoji } from "../LeaderBoard/Leaderboard";

import './ProfileDet.css'

function ProfileDetails({ username }) {
    let [user, setUser] = useState({}); // empty object...
    // Nice and easy...
    // All those unncessary code don japa
    // it will only run again if username changes...
    useEffect(() => {
        // fetch user, and everything involved...
        fetchDoc("users", "username", username).then(data => {
            // console.log(data)
            if (data.length) {
                setUser(data[0]); // something like this shey you get.
            } else {
                setUser({})
            }
        }).catch((err) => {
            console.log(err)
            setUser({});
        })
    }, [username])

    return (
        <div className="profile-details">
            <p className="username-para">@{user.username}</p>
            <div className="profile-details-div">
                <p className="user-icon-stats">
                    <BoltIcon className="has-text-warning" />{" "}
                    {user.currentStreak || 0}
                </p>
                <p className="user-icon-stats"><MovingIcon />{" "}{user.tp || 0}</p>
                <p className="user-icon-stats">
                    <Bar
                        score={user.ep}
                        streak={user.currentStreak || 0}
                    />
                    {user.ep} / 400
                </p>
            </div>
            <div className="profile-info">
                <div className="profile-info-div">
                    <p>
                        Name: <strong>{user.fullname}</strong>
                    </p>
                    <p className="honours"><span>Honours:</span> {addEmoji(user.tp || 0)}</p>
                </div>
                <div className="profile-info-div">
                    <p>
                        Squad: <strong>{user.squad || "none"}</strong>
                    </p>
                    <p>Practice: <strong>{user.pc || 0}</strong></p>
                </div>
            </div>
            <div className="profile-info-div">
                <p>
                    Aspiring course: <strong>{user.aspCourse || ""}</strong>
                </p>
                <p>
                    Aspiring University: <strong>{user.aspInstitute || ""}</strong>
                </p>
            </div>
        </div>
    )
}

export default ProfileDetails;