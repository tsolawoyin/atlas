import { updateDocument, updateLeaderboard } from "../../../../utils/firebase";
import { forgetModel } from "./forgetModel";

import { calculateUTMEPoints, calculatePoints } from "./calculatePoints";

import { getSingleData, addData, getData } from "../../../../utils/indexedDB";
import { uploadStatAndExams } from "../../../../utils/dailyTask";

import { isSameDay, format } from "date-fns";

// This file contains the activities that happen when an exam ends...
export default async function postExamEvents(
  id,
  whichType,
  exams,
  setStreak,
  setPrediction,
  config,
  score = 0 // this is to prevent calamity...
) {
  // this is where router context comes in handle...
  let userdet = JSON.parse(localStorage.getItem("user"));
  // so here it will be easy to handle all forms of errors...
  // the param needed will be available too...
  try {

    await updateStreak(exams, setStreak);

    await calculatePoints(exams, whichType);

    let newStat = await forgetModel();
    await addData("Stats", whichType, newStat);

    calculateUTMEPoints().then((e) => {
      setPrediction(e);
    });

    // update stats and exams....
    await uploadStatAndExams(userdet.username, whichType, ["stats"], 3);

    await updateLeaderBoard(exams).catch((err) => "");

    await updateExamProperty(id, whichType, {
      finished: true,
      userScore: score,
    }); // for this one
    // checkIfUserPracticeWithRecommendation(config.choosen); // this is not a problem tho

    return true;
    // if all is fine and well, we should get something reasonable at the end...
  } catch (error) {
    console.log(error); // error seems like an inevitable part of our work... it's just noraml shey you get. it's part of life....
    // throw new Error("")
    // return false; // let's just return false in case of any unnecessary errors...
    throw new Error(error);
  }
}
// This one looks balanced...
async function updateExamProperty(id, type, prop) {
  let old = await getSingleData("Exams", type, id);
  if (old) {
    let newVer = {
      ...old,
      ...prop,
    };
    await addData("Exams", type, [newVer]);
    // console.log("Update Exam Property: Cleared :)")
  } else {
    // console.log("Can't find old");
  }
}

// this thing go go far ooo...
// It will actually simplify the config interface too sha...
async function updateLeaderBoard(exam) {
  // score will be calculated by a new algorithm....
  let score = calculatePointVersion1(exam);
  // let me just get the number of exams available on user device
  // tentatively...
  let totalExamsCompleted = (await getData("Exams", "UTME")).length;
  let addedBefore = localStorage.getItem("addedBefore");
  // console.log(totalExamsCompleted.length);
  let validExamsDone = checkValidExams(exam);
  // console.log(validExamsDone);
  // updating code
  // yeah, the leaderboard does not update based on scores... now I get...
  // console.log(score, "testing exam type b error");
  let overallScore = await calculateUTMEPoints(); // this will help get the current score...
  // console.log(overallScore);

  let userDetail = JSON.parse(localStorage.getItem("user"));

  if (userDetail) {
    // this one is more important...
    // this is it...
    // so this is where we will update the jamb prediction stuff from....
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...userDetail,
        tp: (userDetail.tp || 0) + score,
        ep: Number(overallScore), // exam point is utme point...
        // if addedBefore and userDetail.pc is both false, buh once it has been added before, just move on...
        // don't concern ursef with the device again...
        pc:
          !addedBefore && !userDetail.pc
            ? totalExamsCompleted
            : userDetail.pc + validExamsDone, // yes somehing like this...
      })
    );

    // oh true... makes sense... nice and easy...

    let job1 =
      (await updateLeaderboard(
        "leaderboard", // collection
        "username", // field               // field and value for comparison
        userDetail.uid, // value, we can even use id as well here...
        score, // user score...
        {
          squad: userDetail.squad || "",
          username: userDetail.username, // this will not really change...
          tp: (userDetail.tp || 0) + score, // shey you get... update total score...
        }
      )) &&
      (await updateDocument("users", userDetail.uid, {
        tp: (userDetail.tp || 0) + score,
        ep: Number(overallScore),
        pc:
          !addedBefore && !userDetail.pc
            ? totalExamsCompleted
            : userDetail.pc + validExamsDone, // yes somehing like this...
      }));

    localStorage.setItem("addedBefore", "shabalala"); // just do it...
    // let's update the localStorage version
    // so even if it fails initially, it will correct itself at some later time...
  }
}

function checkValidExams(exams) {
  return exams.reduce(
    (a, c) =>
      a +
      ((c.score / c.questions.length) * 100 > 10 && c.questions.length > 10),
    0
  );
}
// you get??? this should get the job done...

function calculatePointVersion1(exams) {
  // console.log(exams);
  // maybe it needs remarking?

  let totalPoints = 0;
  let benchmark = 50;

  exams.forEach((e) => {
    let multiplier = e.questions.length / benchmark;
    let percent = (e.score / e.questions.length) * 100;
    totalPoints += Number((multiplier * percent).toFixed(0));
  });

  return totalPoints;
}

async function updateStreak(exams, setStreak) {
  if (!exams || exams.length === 0) return false;

  let user = JSON.parse(localStorage.getItem("user"));
  let totalQuestions = 0;
  let totalScore = 0;

  exams.forEach((exam) => {
    totalQuestions += exam.questions.length;
    totalScore += (exam.score / exam.questions.length) * 100;
  });

  let passQty = totalQuestions >= 30;
  let passScore = totalScore / exams.length >= 50; // Normalize score

  if (isNewDay(user.lastUpdated) && passQty && passScore) {
    let currentDate = format(new Date(), "yyyy-MM-dd");
    let newStreak = user.currentStreak ? user.currentStreak + 1 : 1;
    let updates = {
      lastUpdated: currentDate,
      currentStreak: newStreak,
      longestStreak: Math.max(user.longestStreak || 0, newStreak),
    };

    try {
      let success = await updateDocument("users", user.uid, updates);
      if (success) {
        let updatedUser = { ...user, ...updates };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setStreak(newStreak);
        return true;
      }
    } catch (err) {
      console.error("Error updating streak:", err);
    }
  } else {
    // console.log("Put more effort: Cleared :)")
  }

  return false;
}

function isNewDay(lastDate) {
  if (!lastDate) return true;
  return !isSameDay(new Date(lastDate), new Date());
}

function checkIfUserPracticeWithRecommendation(listOfConfigs) {
  listOfConfigs.forEach((element) => {
    console.log(element);
    if (element.recommend)
      localStorage.setItem("lastPracticeRecommend", new Date()); // thank you...
  });
}
