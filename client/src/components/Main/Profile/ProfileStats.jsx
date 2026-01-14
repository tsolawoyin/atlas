import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getData } from "../../../utils/indexedDB";
import { readJsonFile } from "../../../utils/firebase";

import ConfigHelper from "./ConfigHelper";

function ProfileStats() {
    let { username } = useParams();
    let [stats, setStats] = useState([]);

    let localUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (username == localUser.username) {
            // get stat from local db
            getData("Stats", "UTME").then((e) => {
                setStats(e);
            });
        } else {
            // Fetch from online **only if stats is empty**
            if (stats.length === 0) {
                readJsonFile(`stats/${username}`).then((data) => {
                    if (data) {
                        setStats(data); // nice and easy
                    }
                });
            }
        }
    }, [username, stats]);

    return (
        <div>
            <ConfigHelper subjects={stats} from="profile" />
        </div>
    )
}

export default ProfileStats;