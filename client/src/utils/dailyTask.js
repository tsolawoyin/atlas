import { differenceInHours } from "date-fns";
import { uploadJsonFile } from "./firebase";
import { getData } from "./indexedDB";

// The script in here should be run once in a day. To prevent too much reads...
// The user will sync anytime they sync jare... lolzzz...
// no now, let's sync often....
// sync
// job is here to allow for recursion....
// job = ["stats", "exams"]
// trial is number of times to try again...
// this is all. makes sense right
// makes sense... cool....
export async function uploadStatAndExams(username, type, jobs, trials) {
  if (trials <= 0) return false; // this is where we stop
  // for a recursive approach... I don;t know the kind of person I'll be in the future... my future is something I don't know myself...
  // this is where I will still check for the time...
  // doing everything immediately after each exam might be cumbersome naani...
  // let lastSuccessfulUpload = localStorage.getItem("lastupload");
  if (true) {
    // we try stats first
    let completed = [];
    for (let j of jobs) {
      let y = await upload(type, j, username);
      if (y) {
        completed.push(y);
      } // nice and easy
    }

    //
    if (completed.length == jobs.length) {
      localStorage.setItem("lastupload", new Date()); // understood...
      //   console.log("done");
      return true;
    } else {
      // we just three more times... not to overkill the
      // filter job and recurse...
      jobs = jobs.filter((e) => !completed.includes(e)); // upload what is not inside completed normally that's all. simple.
      // that's all
      return uploadStatAndExams(username, type, jobs, trials - 1); // subtract trials... or else you will just je gbese for google ni...
    }
  } else {
    //
    // console.log("Already uploaded");
  }
}

// let's break it down more then..
async function upload(type, path, username) {
  let localDB;
  if (path == "stats") {
    localDB = "Stats";
  } else {
    localDB = "Exams";
  }
  try {
    let offlineData = await getData(localDB, type); // I will be changing it later
    // we do this one first then
    if (offlineData && offlineData.length) {
      let upload = await uploadJsonFile(`${path}/${username}`, offlineData);
      if (upload) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}

// shey e no make sense like this at least
// nice one... makes sense.... cooll... very cool now.... makes sense...
// we just fetch the stuffs when we need them...
