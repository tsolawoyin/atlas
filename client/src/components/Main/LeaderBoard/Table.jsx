import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
    fetchDoc,
    getUsersWithEp,
    getUsersWithPoints,
    getUsersWithStreak
} from "../../../utils/firebase"

import StarIcon from '@mui/icons-material/Star';

// CSS
import "../../../css/Leaderboard.css";


async function getLeaderBoardStuff(route) {
    if (route == "score-prediction") {
        return await getUsersWithEp();
    } else if (route == "all-time") {
        return await getUsersWithPoints();
    } else if (route == "streak") {
        return await getUsersWithStreak()
    } else if (route == "this-week") {
        return await fetchDoc("leaderboard")
    }
}

// This function helps return what we need exactly in a user data.
function showStuff(route, obj) {
    if (route == "score-prediction") {
        return obj.ep; // sth like this...
    } else if (route == "streak") {
        return obj.currentStreak;
    } else if (route == "this-week") {
        return obj.points;
    } else if (route == "all-time") {
        return obj.tp;
    }
}

function display(route) {
    if (route == "score-prediction") {
        return "UTME Score";
    } else if (route == "streak") {
        return "Streak";
    } else if (route == "this-week") {
        return "Points";
    } else if (route == "all-time") {
        return "Overall";
    }
}

export function addEmoji(score) {
    const generalStyle = {
        color: "goldenrod",
        fontSize: "16px"
    }

    if (score >= 150000) {
        return (
            <span className="icon is-small">
                <StarIcon style={generalStyle} />
                <StarIcon style={generalStyle} />
                <StarIcon style={generalStyle} />
            </span>
        )
    } else if (score >= 75000) {
        return (
            <span className="icon is-small">
                <StarIcon style={generalStyle} />
                <StarIcon style={generalStyle} />
            </span>
        )
    } else if (score >= 25000) {
        return (
            <span className="icon is-small"><StarIcon style={generalStyle} /></span>
        )
    } else {
        return ""
    }
}

function Table({ route }) {
    let [leaderboard, setLeaderboard] = useState([]); // assumes it's an array
    // already as simple as possible shey you get...

    useEffect(() => {
        if (!route) return;

        let isMounted = true;
        setLeaderboard([]); // Reset leaderboard when route changes
        // setLoading(true); // Start loading
        const fetchData = async () => {
            try {
                const data = await getLeaderBoardStuff(route);
                if (isMounted) {
                    setLeaderboard(data);
                }
            } catch (error) {
                console.error("Error fetching leaderboard:", error);
            }
        };
        fetchData();

        return () => {
            isMounted = false;
        };
    }, [route]);


    // then we use effect shey you effect to set it up
    return (
        <div className="table-div">
            <table className="table leaderboard-table">
                <thead>
                    <tr>
                        <th className="small">Position</th>
                        <th></th> {/*honours (experimental, setting things up actually)*/}
                        <th className="small">User</th>
                        {(route == "this-week" || route == "all-time") && (
                            <th className="small">Squad</th>
                        )}
                        <th className="small">{display(route)}</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((l, i) => {
                        let userDetails = JSON.parse(localStorage.getItem("user"));
                        return (
                            <tr
                                className={
                                    l.username == userDetails?.username ? "is-success" : ""
                                }
                                style={{
                                    display: `${l.points == 0 ? "none" : ""}`,
                                }}
                            >
                                <th className="small">#{i + 1}</th>
                                <td>{(addEmoji(Number(l.tp)))}</td>
                                <td className="small">
                                    <Link to={`/users/${l.username}`}>
                                        <span className="user-link">{l.username}</span>
                                    </Link>
                                    {i == 0 ? "🏆" : i == 1 ? "🥈" : i == 2 ? "🥉" : ""}
                                </td>
                                {(route == "this-week" || route == "all-time") && (
                                    <td className="small">{l.squad ? l.squad : ""}</td>
                                )}

                                <td className="small">{showStuff(route, l)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* <p style={{ textAlign: "center", fontSize: ".8em" }}>
        This leaderboard is proudly sponsored by{" "}
        <strong>
          <a href="https://whatsapp.com/channel/0029VavHilrHVvTeWV0WMA1u">
            Wayne
          </a>
        </strong>
      </p> */}
        </div>
    );
}

export default Table;