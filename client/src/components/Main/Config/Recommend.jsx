import { motion } from "motion/react";
import { useState } from "react";
import { useImmer } from "use-immer";
import { v4 as uuidv4 } from "uuid";

import { getData } from "../../../utils/indexedDB";

import { setColor } from "../Exam/utils/helpers";

import "../../../css/Recommend.css"; // nice and easy...
// Subjects is list of subjects...

function RecommendHelper({ subject, setSubjects, setChoosenConfigs }) {
  let [type, setType] = useState("");

  // this creates an isolated environment...
  let options = ["Explore", "Fortify", "Boost"]; // this is the only way to solve this problem in order to keep isolated states

  return (
    <div className="subject">
      <div
        onClick={() => {
          setSubjects((draft) => {
            let subj = draft.find((d) => d.name == subject.name);
            // subj.selected = true;
            // imagine...
            subj.selected = false;
          });
        }}
      >
        <span>{subject.name}</span>
        <p className={setColor(subject.progress)}>{subject.progress}%</p>
      </div>
      <div
        style={{
          display: "grid",
          gap: "1em",
        }}
      >
        <div
          style={{
            display: "flex",
            // gridTemplateColumns: "2fr 1fr",
            justifyContent: "space-between",
            gap: "1em",
          }}
        >
          <ul
            style={{
              display: "flex",
              gap: ".3em",
            }}
          >
            {options.map((o, i) => {
              return (
                <motion.li
                  onClick={() => {
                    setType(o); // simple
                  }}
                  key={o}
                  // this is where it get's as e be now...
                >
                  <button
                    className={`button is-small is-rounded ${
                      o == type && "is-primary"
                    }`}
                    type="button"
                    onClick={(e) => {
                      if (type == o) {
                        console.log("hmmm")
                        // setType("");
                      } else {
                        setChoosenConfigs((draft) => {
                          if (draft.find((d) => d.subject == subject.name)) {
                            // it has to reflect the current state normally
                            let newArr = draft.filter(d => d.subject != subject.name);
                            newArr.push({
                              subject: subject.name,
                              type: o
                            })
  
                            console.log(newArr);
                            return newArr;
                          } else {
                            draft.push({
                              subject: subject.name,
                              type: o,
                            });
                          }
                        });
                      }
                    }}
                    // let's make it so that if user presses a key twice, it removes it
                  >
                    {o}
                  </button>
                </motion.li>
              );
            })}
          </ul>
          {/* <button
            className="button is-rounded is-primary is-small"
            type="button"
            onClick={() => {
              setChoosenConfigs((draft) => {
                if (draft.find((d) => d.subject == subject.name)) {
                  // do nothing
                  // boots price will surely go up...
                } else {
                  draft.push({
                    subject: subject.name,
                    type,
                  });
                }
              });
            }}
          >
            Set
          </button> */}
        </div>
      </div>
    </div>
  );
}

function Recommend({
  subjects,
  setChoosen,
  setConfigHelper,
  setChoosenConfigs,
}) {
  let [_subjects, setSubjects] = useImmer(subjects); // normally...

  return (
    <ul>
      {/* nice one... to implement na e remain... makes sense... */}
      {_subjects.map((e, i) => {
        return (
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: i || 1 }}
            transition={{ delay: i / 10 + 0.1 }}
          >
            {!e.selected ? (
              <motion.div
                className="subject"
                onClick={() => {
                  // it's going to cause a rerender
                  setSubjects((draft) => {
                    let subj = draft.find((d) => d.name == e.name);
                    // subj.selected = true;
                    // imagine...
                    subj.selected = true;
                  });
                }}
              >
                <div>
                  <span>{e.name}</span>
                  <p className={setColor(e.progress)}>{e.progress}%</p>
                </div>
                <progress
                  className={`progress ${chooseColor(e.progress)}`}
                  value={e.progress}
                  max={"100"}
                >
                  {e.progress}
                </progress>
              </motion.div>
            ) : (
              <RecommendHelper
                subject={e}
                setSubjects={setSubjects}
                setChoosenConfigs={setChoosenConfigs}
              />
            )}
          </motion.li>
        );
      })}
      <motion.p
        style={{
          textAlign: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: _subjects.length / 10 + 0.1 }}
      >
        Assistant Mode
      </motion.p>
    </ul>
  );
}

function chooseColor(num) {
  if (num < 50) {
    return "is-danger";
  } else if (num < 70) {
    return "is-warning";
  } else {
    return "is-success";
  }
}

export default Recommend;

{
  /* <div
style={{
  display: "unset", // nice and easy.... makes sense..
}}
>
<p
  style={{
    display: "grid",
    gap: "1em",
  }}
>
  <div
    style={{
      display: "flex",
      gap: "1em",
    }}
  >
    <input
      type="number"
      className="input is-rounded"
      placeholder="# of topics"
    />
    <input
      type="number"
      className="input is-rounded"
      placeholder="# of questions"
    />
    <button
      className="button is-rounded is-primary"
      type="button"
    >
      Set
    </button>
  </div>
  <ul
    style={{
      display: "flex",
    }}
  >
    {options.map((o, i) => {
      return <motion.li>{o}</motion.li>;
    })}
  </ul>
</p>
</div> */
}
