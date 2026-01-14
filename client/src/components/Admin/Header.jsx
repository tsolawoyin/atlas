import { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import "../../css/Header.css";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { uploadDocument } from "../../utils/firebase";
import { Link } from "react-router-dom";
import { fetchDoc, downloadDoc, decrypt } from "../../utils/firebase";
import CryptoJS from "crypto-js";
import { addData, getData } from "../../utils/indexedDB";

import Search from "./Search";
import { v4 as uuidv4 } from "uuid";

function Header({
  type,
  subjects,
  setSubjects,
  questions,
  setQuestions,
  modified = [],
  setModified,
  login,
  setLogs,
  from,
  setMessage,
  setShowEditor,
  showEditor,
  selected,
  setSelected,
  currentSubject
}) {
  let [lightMode, setLightMode] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  );
  let [saved, setSaved] = useState(localStorage.getItem("saved")); // let's assume it's false

  let user = JSON.parse(localStorage.getItem("user"));

  let [spinner, setSpinner] = useImmer({
    1: false,
    2: false,
    3: false,
  }); // this spinner thing will be really useful here...

  if (lightMode) {
    document.documentElement.className = "theme-light";
  } else {
    document.documentElement.className = "theme-dark";
  }

  let key = CryptoJS.AES.decrypt(
    localStorage.getItem("uid"),
    navigator.userAgent
  ).toString(CryptoJS.enc.Utf8); // the key...

  let [opLoading, setOpLoading] = useState(false);

  // makes sense
  function handleClick() {
    if (lightMode) {
      setLightMode(false);
      localStorage.setItem("lightmode", JSON.stringify(false));
    } else {
      setLightMode(true);
      localStorage.setItem("lightmode", JSON.stringify(true));
    }
  }

  // at the end of the day you just have to be really fearless... shey you get.
  // so the questions must have a particular id...

  // sync with server function...
  async function syncWithServer() {
    setSpinner((draft) => {
      draft[3] = true;
    });
    // that should do the job...
    try {
      let snapShots = await fetchDoc("questions", "type", type); // get questions for us...
      // let current = JSON.parse(localStorage.getItem("draft" + type));
      // this one is just about getting stuff from storage
      // working no it please...
      let current = await getData("EditorQB", type.toUpperCase()); // go to editor database and fetch the type of question

      let jobs = []; // this is what we want to push...

      for (let c of current) {
        //
        let onlineVersion = snapShots.find((e) => e.subject == c.subject);
        if (!onlineVersion || c.version > onlineVersion.version) {
          // if subject doesn't exist online or the one we have on our machine is greater...
          jobs.push(c); // that's all... making sense.
          // not filtering anything since we are keeping all our files on our machine...
        }
      }
      // console.log(jobs);
      // job must be of higher length anyways but no p
      if (jobs.length) {
        for (let j of jobs) {
          setLogs((draft) => {
            draft.unshift({
              type: "pending",
              message: `Uploading ${j.subject}...`,
            });
          });
          let y = await uploadDocument(j, key); // upload document...
          if (y) {
            setLogs((draft) => {
              draft.unshift({
                type: "success",
                message: `Uploaded ${j.subject} successfully!`,
              });
            });
          } else {
            setLogs((draft) => {
              draft.unshift({
                type: "Failure",
                message: `Failure to upload ${j.subject}!`,
              });
            });
          }
        }
      }
      // once job is done... // that's all
      localStorage.removeItem("saved"); // nice one.
      //
      setSaved(localStorage.getItem("saved")); // it will be null at this point.

      setLogs((draft) => {
        draft.unshift({ type: "success", message: `Upload completed!` });
      });
    } catch (e) {
      setLogs((draft) => {
        draft.unshift({ type: "failure", message: e }); // that's all
      });
    } finally {
      setSpinner((draft) => {
        draft[3] = false;
      });
    }
  }
  // I will work on everything don't worry.
  // That's all for the saving aspect...
  async function save() {
    // this is sure to work always. no problem... shey you get.
    // to click the save btn at all, it must have been enabled somehow... so that's cool.
    let newList = []; // ok
    for (let s of subjects) {
      if (modified.includes(s.subject)) {
        newList.push({ ...s, version: Number((s.version + 0.1).toFixed(2)) }); // so the question must contain its id already... omo. no problem.
      } else {
        newList.push(s); // no need to update...
      }
    }
    // let's try this version
    // everything is experience. abi what do you think. everything is experience.
    // now before we start network req that we can't really rely on, let's save a draft of our work
    await addData("EditorQB", type.toUpperCase(), newList, {
      keyPath: "subject",
    }); // it's not as if the keyPath will be used always...
    // so let's update the ui
    // setSubjects(JSON.parse(localStorage.getItem("draft" + type)));
    setSubjects(await getData("EditorQB", type.toUpperCase())); // get all the data shey you get...

    localStorage.setItem("saved", "saved");

    setSaved(localStorage.getItem("saved")); // thank you. just freestyle. nothing much...
    // If I will be saving things on the device then modified is not necessary anymore...
    // empty modified. thanks
    setModified([]); // setting modified to empty since we have saved...

    setLogs((draft) => {
      // working on it...
      draft.unshift({ type: "success", message: "Saved!" }); // hmm. cool.. makes sense...
      // this is working now.
    });
  }
  // fetched stuff done successfully.
  // I will this stuff this morning... I don't even want to know...
  async function handleFetch() {
    // now let's work with fetch... the fetch stuff is now crucial... so let's work on it too...
    setSpinner((draft) => {
      draft[2] = true;
    });
    setLogs((draft) => {
      // why not checking for fetching... you know...
      draft.unshift({ type: "pending", message: `Fetching...` });
    });
    // if (!subjects.length) {
    //   setLogs((draft) => {
    //     draft.unshift({
    //       type: "pending",
    //       message: `Fetching questions from server...`,
    //     });
    //   });
    //   // so I will the db for type... shey you get... how to deal with pride is another topic for another day
    //   // console.log(type)
    //   fetchDocument(type, "questions", key) // this is how to use the stuff... the then and catch methods...
    //     .then(async (docs) => {
    //       setSubjects(docs);
    //       await addData("EditorQB", type.toUpperCase(), docs, {
    //         keyPath: "subject",
    //       });
    //       // localStorage.setItem(getType(type), JSON.stringify(docs)); // set to local storage
    //       setLogs((draft) => {
    //         draft.unshift({ type: "success", message: `Fetching done!` });
    //       });
    //     })
    //     .catch((e) => {
    //       setLogs((draft) => {
    //         draft.unshift({
    //           type: "failure",
    //           message: `Can't get questions, please try again.`,
    //         });
    //       });
    //       console.log(e);
    //     });
    // }
    // this is what I really need then
    try {
      // cool. done and dusted.
      let snapShots = await fetchDoc("questions", "type", type); // get questions for us...
      // this will snapshots...
      // console.log(snapShots)
      // once the topic changes, the version number changes too... hmmm, nice and easy...
      // or maybe it's not needed
      // oops this has changed....
      let current = await getData("EditorQB", type.toUpperCase());

      let jobs = []; // this is what we want to update...
      let downloads = [];

      if (snapShots.length) {
        // it is correct up to this point...
        for (let s of snapShots) {
          let subject = current.find((e) => e.subject == s.subject);
          // oga mehn...
          if (!subject || s.version > subject.version) {
            // necesitates that s.version be greater than the one of local... hmmm... that get as e be ooo..
            jobs.push(s); // just push s // we are updating
            current = current.filter((e) => e.subject != s.subject); // we also filter it out as well
          }
        }

        if (jobs.length) {
          // pass...
          // console.log(jobs)
          // alright let's move on...
          for (let j of jobs) {
            setLogs((draft) => {
              draft.unshift({
                type: "success",
                message: `Downloading ${j.subject}`,
              });
            });
            let newFile = await downloadDoc(j.subject); // this help download a single doc...
            // but this doesn't necessarily add the newly updated properties...
            // pay attention and write this now and save ursef from future stress
            // ok sir.
            // now this makes sense
            // console.log(newFile)
            if (newFile) {
              newFile = decrypt([newFile], key); // we didn't encrypt everything...
              // console.log(newFile)
              downloads.push(newFile[0]); // everything has been taken care of.
            }
          }
        }

        // console.log(downloads, "sloopyy");
        // now at the end
        // console.log(current);
        if (downloads.length) {
          // console.log(downloads);
          current = current.concat(downloads); // no be here we go decrypt the stuff shey you get...
        }
        // console.log(current);
        setLogs((draft) => {
          draft.unshift({ type: "success", message: `Fetched successfully!` });
        });
        // then save to localStorage
        await addData("EditorQB", type.toUpperCase(), current); // progress. olagbara....
        // localStorage.setItem("draft" + type, JSON.stringify(current)); // successfully updated.
        let newData = await getData("EditorQB", type.toUpperCase());
        // let's see how it goes
        setSubjects(newData);
        // balanced.... nice and easy...
        // the old questions will override the new one... hmmm...
        // conflicts are still occuring lolzzz... ko easy...
      }
    } catch (error) {
      console.log(error);
      setLogs((draft) => {
        draft.unshift({ type: "failure", message: `Failed due to ${error}` });
      });
    } finally {
      setSpinner((draft) => {
        draft[2] = false;
      });
    }
  }
  //I don't even understand what I am saving sef...
  // easy peasy....

  // that's like all sha....
  function handleMerge(event) {
    let newArr = []; // new arr stuff....

    let sub = subjects[currentSubject]; // gives us the current subject
    // it's something I can do here before moving on sef....
    // but hmmm... how does it work....
    //

    for (let select of selected) {
      try {
        let t = sub.questions.find(q => q.topic == select);
        newArr = newArr.concat(t.questions);
      } catch (err) {
        console.log(err.message);
        break;
      }
    }

    // newArr is already complete
    if (!newArr.length) return
    else {
      // then use the save mechanism as well....
      // now let's do something...
      let newTopicName = prompt("Enter topic name...");
      if (newTopicName) {
        // if not empty string
        let topicStruct = {
          topic: newTopicName,
          questions: newArr
        }

        // then we push to the end of the arr of the current subject...
        setSubjects(draft => {
          // console.log("doing job")
          // worked nicely shey you get... make sense....
          draft[currentSubject].questions.push(topicStruct);
        })

        setSelected([]); // empty merge list...
        // then we can now delete the topics manually...

        setModified((draft) => {
          if (
            !draft.includes(subjects[currentSubject].subject)
          ) {
            draft.push(subjects[currentSubject].subject);
          }
        });
      } else {
        // console.log(subjects)
      }
    }
  }


  function specialOperation() {
    // our goal with this is to assign to each question a new id, a subject property, and topic property...
    // example structure
    // let sbjs = [
    //   {
    //     name: "Chemistry",
    //     topic: [
    //       {
    //         name: "Atomic structure",
    //         questions: [
    //           {
    //             question: "The name of wakanda queen is?"
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ]

    setSubjects(draft => {
      for (let subject of draft) {
        for (let topic of subject.questions) {
          for (let question of topic.questions) {
            try {
              question.id = uuidv4();
              question.subject = subject.subject;
              question.topic = topic.topic;
            } catch (error) {
              console.loog(error);
            }
          }
        }
        // modify so that we will save it shey you get...
        try {
          // setModified((draft) => {
          console.log(subject.subject)
          // });
        } catch (error) {
          console.log(error)
        }

      }

      setModified(["English", "Biology", "Chemistry", "Physics", "Mathematics"])
      setOpLoading(false); // this is if we are through sha...
    })

  }



  return (
    <div id="header" className="admin-header">
      <div id="header-helper">
        <h1 id="logo">
          <Link to="/admin">Boots</Link>
        </h1>
        <span>editor v2.1</span>
        {
          login && (from == "ManageQuestions" || from == "Pin") &&
          <Search what={from} questions={questions} setQuestions={setQuestions} subjects={subjects} currentSubject={currentSubject} />
        }
      </div>

      <span id="header-helper-2">
        {from == "ManageQuestions" && (
          <button
            className="button is-small"
            onClick={(e) => {
              if (showEditor) {
                setShowEditor(false);
              } else {
                setShowEditor(true);
              }
            }}
          >
            Show Editor
          </button>
        )}
        {/* <button className={`button is-small is-danger ${opLoading && "is-loading"}`} disabled onClick={specialOperation}>Special Op</button> */}
        {login && from == "ManageQuestions" ? (
          <div id="network-buttons">
            {user.username != "tsolawoyin" && user.username != "veronica7" ? (
              <span className="has-text-danger">
                Sorry, You don't full admin rights yet.{" "}
                <span
                  className="has-text-link"
                  onClick={(e) => {
                    setMessage(true); // simple
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Click here
                </span>{" "}
                to learn more
              </span>
            ) : null}
            {/* <button className={`button is-primary`} type="button" onClick={save}>Save</button> */}
            <button
              className={`button is-small is-white  ${selected && selected.length ? "is-block" : "is-hidden"
                }`}
              onClick={handleMerge}
            >
              Merge
            </button>
            <button
              className="button is-primary is-small"
              disabled={!modified.length} // modified is useful here...
              onClick={save}
            >
              Save
            </button>
            <button
              className={`button is-warning is-small ${spinner[2] ? "is-loading" : ""
                }`}
              onClick={handleFetch}
            >
              Fetch
            </button>
            <button
              className={`button is-small is-white ${spinner[3] ? "is-loading" : ""
                }`}
              disabled={
                !saved ||
                (user.username != "tsolawoyin" && user.username != "veronica7")
              } // cool... // only tsolawoyin can upload for now..
              onClick={syncWithServer}
            >
              Upload
            </button>
          </div>
        ) : null}

        <LightbulbIcon
          className={lightMode ? "has-text-warning" : "has-text-white"}
          onClick={handleClick}
        />
      </span>
    </div>
  );
}

// <ArrowBackIosIcon style={{cursor: "pointer"}} onClick={e => {
//         setExamMode(false)
//         localStorage.setItem("examConfig", JSON.stringify(false));
//       }}/>

export default Header;
