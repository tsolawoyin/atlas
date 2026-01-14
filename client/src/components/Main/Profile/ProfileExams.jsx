import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { deleteItemFromIndexedDB } from "../../../utils/indexedDB";
import { getData } from "../../../utils/indexedDB";
import { convertMillisecondsToMinutesAndSeconds } from "../../../utils/helpers";
import { differenceInMilliseconds, format } from "date-fns";
import { Link } from "react-router-dom";
import { Timer } from "@mui/icons-material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function computeStatus(created, duration, finished) {
    // console.log(finished);
    let currTime = convertMillisecondsToMinutesAndSeconds(
        differenceInMilliseconds(new Date(), created)
    );
    if (duration - currTime.minutes <= 0 || finished)
        return false; // nice and easy... makes sense...
    else return true;
}

function showDate(created) {
    if (created) {
        return format(created, "dd/MM/yyyy");
    }
}

async function deleteExam(key, setExams) {
    let delopr = await deleteItemFromIndexedDB("Exams", "UTME", key);

    if (delopr) {
        let newData = await getData("Exams", "UTME");
        setExams(newData.sort((a, b) => b.createdAt - a.createdAt));
    }
}

function Exams() {
    let [exams, setExams] = useState([]);
    let { username } = useParams(); // shey you get?
    let localUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        // this is for fetching local user data...
        if (username == localUser.username) {
            getData("Exams", "UTME").then((data) => {
                setExams(data.sort((a, b) => b.createdAt - a.createdAt));
            });
        }
    }, [])

    // exams = exams.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className="exams">
            <ul>
                {exams.map((exam) => {
                    // console.log(exam.userScore, exam.createdAt)
                    return (
                        <li>
                            <div className="exam-card">
                                <div className="exam-header">
                                    <div className="exam-info">
                                        {/* this one will contain more information */}
                                        Exam
                                    </div>
                                    <div className="exam-score">{exam?.userScore}%</div>
                                </div>
                                <div className="exam-card-footer">
                                    <p>
                                        {!computeStatus(
                                            exam?.createdAt,
                                            exam?.duration,
                                            exam?.finished
                                        ) ? (
                                            <span className="has-text-danger">finished</span>
                                        ) : (
                                            <span className="has-text-primary">in progress</span>
                                        )}
                                    </p>
                                    <Link to={`/practice/exam/${exam?.uid}`}>view</Link>
                                    <p
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                        }}
                                    >
                                        <Timer style={{ fontSize: "16px" }} />
                                        <span>{exam?.duration} min.</span>
                                    </p>
                                    <p>{showDate(exam?.createdAt)}</p>
                                    <p
                                        className="has-text-danger"
                                        onClick={(e) => deleteExam(exam?.uid, setExams)}
                                    >
                                        <DeleteOutlineIcon />
                                    </p>
                                </div>
                            </div>
                            <hr />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Exams;