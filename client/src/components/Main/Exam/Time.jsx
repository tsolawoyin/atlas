import { useState, useEffect } from "react";
import { getSingleData, addData } from "../../../utils/indexedDB";
import { setColor } from "./utils/helpers";
import postExamEvents from "./utils/endExam";
import CryptoJS from "crypto-js";
import { convertMillisecondsToMinutesAndSeconds } from "../../../utils/helpers";
import { differenceInMilliseconds } from "date-fns";

import { markAll } from "./utils/helpers";

function Time({
  score,
  submit,
  setSubmit,
  darkmode,
  code,
  examType,
  exams,
  setScore,
  setScoreColor,
  setExams,
  negativeMark,
  type,
  id, // in fact this is the id...
  duration,
  createdAt,
  finished,
  setTimer,
  mutTimer,
  setPrediction,
  setStreak,
  setLoading,
  config
}) {
  let currentTime = computeNewTime(createdAt, duration, finished); // compute time but don't start counting down yet...

  let [min, setMin] = useState(currentTime.minutes);
  let [sec, setSec] = useState(currentTime.seconds);
  // I will have to solve it myself.
  // so it needs deciphering....
  // God help us...
  useEffect(() => {
    // this are the things that happens on each second...
    let timer = setInterval(async () => {
      let currTime = computeNewTime(createdAt, duration, finished);
      // oh, ok, we are computing new time every now and then...
      // hmmmm....
      // it will hang looto...
      // :::this symbolizes end of exam:::
      if (currTime.minutes == 0 && currTime.seconds == 0) {
        // all this should be done only if exam is not already finished before shey you get...
        let draftExam = await getSingleData("Exams", type, id); // shey u get
        let tempScore;

        let examBState = [];

        if (!draftExam.finished) {
          // clear timer immediately...
          clearInterval(timer);
          alert("Timeout!");

          setLoading(true);

          let msg = "";
          if (examType == "A") {
            // msg = "Timeout. Exam ended!";
          } else {
            // this is the second case...
            // it doesn't even mark at all...
            let total = 0; // local
            let totalQuestions = 0; // local

            exams.current.forEach((e, i) => {
              let score = markAll(
                e.questions,
                e,
                submit,
                setExams,
                negativeMark
              );

              total += score;
              totalQuestions += e.questions.length;

              setExams((draft) => {
                let draftExam = draft.find((q) => q.id == e.id);
                draftExam.score = score;
              });

              examBState.push({
                ...e,
                score: score,
              });
            });
            // console.log("total score is => ",total);

            let percent = Math.floor((total / totalQuestions) * 100);

            tempScore = percent;

            // !!! This code needs modification omo...
            setScoreColor(setColor(percent));

            msg = "Your average score is " + percent + "%";
          }
          // I didn't even think about this before...
          let postEvents = await postExamEvents(
            id,
            type,
            examType == "A" ? exams.current : examBState,
            setStreak,
            setPrediction,
            config,
            tempScore
          );

          if (postEvents) {
            if (examType == "B") setScore(tempScore);
            setTimer(null);
            setSubmit(true);
            setLoading(false);
            alert("Exam ended");
          }
        } else {
        //   console.log(draftExam.userScore);
          console.log(":( oops, you've submitted before brozz....");
          setSubmit(true);
        }
      } else {
        // exam is not finished yet...
        setSec(currTime.seconds);
        setMin(currTime.minutes);
        // hmmm... this stuff is serious to control joh...
        if (submit) {
          clearInterval(timer); //
        }
        // since the time is independent of the whole stuff now...
        // I am not going to update seconds wise any more...
      }
    }, 1000);
    // this should work properly now...
    // the thing now is about saving the final score too...
    // it's a fairly simple process in my opinion....
    mutTimer.current = timer;
    setTimer(mutTimer.current); // this should work as needed...
    // if finished is false or submit is false
    // once either of them is true, just forget it...
    let save = setInterval(async () => {
      // console.log("hello")
      // Alright let me read the data itself to get the latest information
      let finishedExam = await getSingleData("Exams", type, id);
      if (!finishedExam.finished && !submit) {
        // if finishedExam is false plus submit is false...too
        // it is only this and case that can work properly...
        // IF A OR B => FIRE
        // THEN IT WILL ALWAYS FIRE
        await updateExamProperty(id, type, {
          // now you see... and the truth is that this only works for type A...
          userScore: score.current,
          questions: CryptoJS.AES.encrypt(
            JSON.stringify(exams.current),
            code
          ).toString(),
        });
      } else if (finishedExam.finished || submit) {
        clearInterval(save);
      }
    }, 5000);
    // saving things.... what's up...

    // let's use this technique for now... will be modified later...
    return () => {
      clearInterval(timer);
      clearInterval(save);
    };
    // it has the behavior I want
  }, []);

  return (
    <div
      id="clock"
      className={
        min < 10 && !darkmode
          ? "dark-time"
          : min < 10 && darkmode
          ? "light-time"
          : ""
      }
    >
      <span className="min">{String(min).length == 2 ? min : `0${min}`} :</span>
      <span className="sec"> {String(sec).length == 2 ? sec : `0${sec}`}</span>
    </div>
  );
}

function computeNewTime(old, duration, finished, start) {
  let currTime = convertMillisecondsToMinutesAndSeconds(
    differenceInMilliseconds(new Date(), old)
  );

  if (!finished && duration - currTime.minutes >= 0) {
    // yupyup the stuff works but how to retain time...
    // I don't want to unnecessarily subtract from this thing... hmm..
    return {
      minutes: duration - currTime.minutes - 1, // it works perfectly. thank God.
      seconds: 59 - currTime.seconds,
    }; //
  } else if (finished || duration - currTime.minutes < 0) {
    return { minutes: 0, seconds: 0 };
  }
}

async function updateExamProperty(id, type, prop) {
  let old = await getSingleData("Exams", type, id);
  if (old) {
    let newVer = {
      ...old,
      ...prop,
    };
    await addData("Exams", type, [newVer]);
  }
}

export default Time;
