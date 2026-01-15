import { readJsonFile } from "../../../../utils/firebase";
import { getData, addData, deleteDatabase } from "../../../../utils/indexedDB";
import buildStat from "../../../../utils/getStats";
import { fetchDoc, downloadDoc } from "../../../../utils/firebase";

import { forgetModel } from "../../Exam/utils/forgetModel";

export function getType(type) {
  if (type == "UTME") {
    return "utme";
  } else {
    return "mbbs"; // no more support for futa jare. shey u get.
  }
}

export async function reduce(type, setStats, setStatusMsg, message) {
  try {
    // throw new Error("Problemitivitis")
    // there might be stats already shey you get...
    let stats = await getData("Stats", type); // try to check if user have stats already...
    // if stats is available set stats to stats...
    // If there is stats, and message is either offline or normal...
    // It will rebuiild from scratch trust me...
    if (stats.length && (message == "offline" || message == "normal")) {
      try {
        // we don't just want to return stats everytime
        // console.log(op);
        let subjects = await getData("QuestionBank", type);
        let newStat = [];
        // getting subjects
        // know that we are not building stats... we just want to update stats that's all
        pushLog(
          {
            status: "has-text-info",
            message: "Checking for new topics...",
          },
          setStatusMsg
        );

        for (let s of subjects) {
          let statSub = stats.find((e) => e.name == s.subject);
          let statTopic = statSub.topics;

          let newTopics = [];
          // console.log(s.topics)
          for (let t of s.topics) {
            if (!statTopic.find((e) => e.name == t)) {
              newTopics.push({
                attempt: 0,
                name: t,
                progress: 0,
                weight: 1,
              });

              pushLog(
                {
                  status: "has-text-success",
                  message: "New topic found: " + t, // inform the user topic is added...
                },
                setStatusMsg
              );
            } else {
              // no ooo, we can't do that normally... the log will be unnecessarily long. u gat me
              newTopics.push(statTopic.find((e) => e.name == t));
            }
          }

          // after all this
          statSub.topics = newTopics; // easy peasy....
          newStat.push(statSub); // clear and easy...
        }

        let job = await addData("Stats", type, newStat, {
          keyPath: "name",
        });
        // so at this point we just write the new stats to disk... that's all..
        if (job) {
          setStats(newStat);

          pushLog(
            {
              status: "has-text-success",
              message: "Stats update successfully.",
            },
            setStatusMsg
          );

          return true;
        } else {
          // just return stat....
          setStats(newStat);
          return true;
        }
      } catch (e) {
        // console.log(e);
        // so in fact, reduce has taken care of so many things. Wow.
        pushLog(
          {
            status: "has-text-danger",
            message: "An error occured. Please refresh",
          },
          setStatusMsg
        );
        return false; // just forget about the error since this is not totally crucial to the app's functionality... // it is oo
      }
    } else {
      // if there is no stat present...
      pushLog(
        {
          status: "has-text-succes",
          message: "Creating Stats...",
        },
        setStatusMsg
      );

      let subjects = await getData("QuestionBank", type); // do you see... this one is already balanced...

      let statsObj = buildStat(subjects);

      let job = await addData("Stats", type, statsObj, {
        keyPath: "name",
      });

      if (job) {
        setStats(statsObj);

        pushLog(
          {
            status: "has-text-success",
            message: "Store created successfully.",
          },
          setStatusMsg
        );
      }

      return true;
    }
  } catch (e) {
    // replacing it with a new one...
    // we delete the old store entirely
    try {
      pushLog(
        {
          status: "has-text-succes",
          message: "Error occured. Fixing things up...",
        },
        setStatusMsg
      );

      let delOp = await deleteDatabase("Stats"); // deleting the entire db

      if (delOp) {
        // then we recreate the db from scratch... it is a recursive process..

        let op = await reduce(type, setStats, setStatusMsg, op);

        if (op) return true;
      }
    } catch (e) {
      // na so this thing just be like this... I love this stuff.... let's roll....
      pushLog(
        {
          status: "has-text-danger",
          message: e.message,
        },
        setStatusMsg
      );

      return false;
    }
  }
}

// it's a general operation
// write one function and just inject it everywhere...
// I think updating exam will still
export async function fetchStatAndExams(username, type, setStats) {
  let statAndExam = new Object(null); // makes sense??? yupup

  try {
    // since stats doesn't really contribute to read things..
    let statsFile = await readJsonFile(`stats/${username}`);
    // console.log(statsFile, "=> hmmmmm")
    // console.log(statsFile)
    if (statsFile) {
      statAndExam.stats = statsFile;
    }
    // since this is about reading, I don't need it's even needed sef...
    if (statAndExam.stats) {
      let addOp = await addData("Stats", type, statAndExam.stats, {
        keyPath: "name",
      }); // it should have a keypath already... shey u get... no long thing particularly...
      // Programmers don't sleep abi you no get..
      if (addOp) {
        setStats(statAndExam.stats); // simple as abc... imagine
      }
    }

    if (!statsFile) {
      console.log("hmmmm");
      return false;
    } else {
      return true; // I don't need to deal with exam... dah one no need...
    }

    // nice and easy... that's all..
  } catch (error) {
    if (error.code === "storage/object-not-found") {
      console.log("file not found error");
      throw new Error("File not found");
    } else if (error.message == "Request timed out") {
      console.log("user is offline");
      throw new Error("Offline");
    } else {
      throw new Error("Unknown error");
    }
  }
  // nice and easy...
  // makes sense... just once per day too
  // we fetch once per day shey u get
  // the upload code will be written after this
}

// downloading stats from online... shey you get... makes sense...

export function pushLog(log, setStatusMsg) {
  setStatusMsg((draft) => {
    draft.push(log);
  });
  // that's all...
}

// your code must allow for serious extensibility sha...

export async function f(type, setter) {
  // we check for update if last successful update is less than 24 hours
  if (
    // !localStorage.getItem("lastcheckedforupdate") ||
    // // olagbara... I'm currently with Dad in the sitting room at this very moment, around 4am on monday, november 18....
    // differenceInHours(
    //   new Date(),
    //   new Date(localStorage.getItem("lastcheckedforupdate"))
    // ) > 24
    true // for now I need to work with firebase a lot...
    // I will work on this one later jare...
  ) {
    // no pushing of messages for now...
    // pushLog(
    //   {
    //     status: "has-text-warning",
    //     message: "Checking for updates...",
    //   },
    //   setStatusMsg
    // );
    // nice and easy...
    // perform check
    setter(true);
    for (let i = 0; i < 3; i++) {
      let check = await performCheck(type);
      // console.log(check)

      if (check == "no-need") {
        // this one is different
        setter(false);
        throw new Error("no-need");
      } else if (check) {
        return check;
      }
    }

    // if at this point nothing is returned...
    // this f function is very very simple to understand and grab
    throw new Error("Network failure"); // that's it...
  } else {
    return null;
  }
}
// I will work on streak later...
// it has possibly performed check and check is not just working...
async function performCheck(type) {
  let local = await getData("QuestionBank", type.toUpperCase()); // maybe it should just be like that normally for now
  try {
    let server = await fetchDoc("questions", "type", type);
    // console.log(server)
    let update = [];

    if (server.length) {
      for (let s of server) {
        let sbj = local.find((e) => e.subject == s.subject);
        if (!sbj || sbj.version != s.version) {
          update.push(s);
        }
      }
      if (update.length) {
        return update;
      } else {
        return "no-need";
      }
    } else {
      return null; // nothing is back from server possibly, then no need to update anything...
    }
  } catch (_) {
    // console.log("error")
  }
}
// I will try to promote boots this upcoming year...
// May God help me. Amen.
// so we pass we updates in here
export async function updateQuestions(updates, type) {
  // here we update the stuff we have downloaded...
  try {
    // this function has no issues
    // it should only be called if there is some downloading to do...
    let job = updates;
    // read existing data
    let old = await getData("QuestionBank", type);
    // local = await getData("QuestionBank", type.toLowerCase()); // this one too...

    let fetched = [];

    for (let j of job) {
      // pushLog(
      //   {
      //     status: "has-text-warning",
      //     message: `Downloading updates`,
      //   },
      //   setStatusMsg
      // );

      let r = await downloadDoc(j.subject); // and it's working here fine and well...

      if (r) {
        // pushLog(
        //   {
        //     status: "has-text-success",
        //     message: `${j.subject} downloaded successfully.`,
        //   },
        //   setStatusMsg
        // );
        // nice one... learned this one like dat... functional updater...
        // setProgress((prevProgress) => prevProgress + 1); // we ever the old value is +1... thanks...

        fetched.push(r);
        // and filter old
        old = old.filter((e) => e.subject != j.subject);

        // pushLog(
        //   {
        //     status: "has-text-success",
        //     message: "Download complete",
        //   },
        //   setStatusMsg
        // );
      } else {
        // pushLog(
        //   {
        //     status: "has-text-danger",
        //     message: `Failure downloading updates`,
        //   },
        //   setStatusMsg
        // );
        // setProgress(0);
        // update should still remain normally... no long thing
        throw new Error("Download failed"); // if any of the download failed, we summed everything up to failed...
      }
    }

    console.log(fetched);
    // here we have old ones removed and have fresh ones inside fetched.
    // just combine them and update...
    let newOnes = old.concat(fetched); // // the newOnes might be empty string actually...
    // tested and trusted now. thanks....
    // console.log(newOnes)
    // update existing ones...
    // here we try to set items inside db
    // pushLog(
    //   {
    //     status: "has-text-warning",
    //     message: "Saving downloads on your device...",
    //   },
    //   setStatusMsg
    // );

    await addData("QuestionBank", type, newOnes, { keyPath: "subject" });

    return true; // this is if all operation was successful..
  } catch (err) {
    console.log(err.message);
    return false; // no need to throw any error
  }
  // so that's how we roll
}
