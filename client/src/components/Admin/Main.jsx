// everything is component, and we should think in that fashion...
import { useRef, useState, useEffect } from "react";
import Editor from "./Editor";
import { Parser } from "html-to-react";

import { addDocument } from "../../utils/firebase";

import "../../css/Main.css";
import "../../assets/fonts/Bungee_Tint/BungeeTint-Regular.ttf";
import "../../assets/fonts/Poppins/Poppins-Regular.ttf";
import "../../assets/fonts/Caveat/Caveat-VariableFont_wght.ttf";
import "../../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf";

import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

// makes sense. like die.
function Question({
  question,
  questions,
  setQuestions,
  setCurrentQuestion,
  number,
  currentQuestion,
  currentTopic,
  currentSubject,
  subjects,
  setSubjects,
  setModified,
  setLogs,
}) {
  // this one is still useful anyways...
  function handleClick() {
    setCurrentQuestion(number); // simple...
  }

  function handleDelete() {
    let areYouSure = confirm("Are you sure?");

    let toBeDeletedQuestion = questions[number];

    if (areYouSure) {
      setQuestions(draft => {
        let newQuestions = draft.filter(q => q.id != toBeDeletedQuestion.id); // something like this...
        return newQuestions
      })

      setSubjects(draft => {

        let newQuestions = draft[currentSubject].questions.find(tp => tp.topic == toBeDeletedQuestion.topic).questions.filter(q => q.id != toBeDeletedQuestion.id);
        newQuestions

        // yupyup it's going to be filtered but to rebuild stuffs.... 
        draft[currentSubject].questions.find(tp => tp.topic == toBeDeletedQuestion.topic).questions = newQuestions
      })

      setLogs((draft) => {
        draft.unshift({
          type: "success",
          message: `${toBeDeletedQuestion.id} removed successfully`,
        });
      });

      setModified((draft) => {
        if (!draft.includes(subjects[currentSubject].subject)) {
          draft.push(subjects[currentSubject].subject);
        }
      });
    }
  }

  // The handle visibilty function is complete...
  function handleVisibility() {
    // This ensure the visibility is turned off on screen
    let q = questions[number]; // making reference to old question....

    setQuestions(draft => {
      draft.find(d => d.id == q.id).notVisible = !q.notVisible;
    })

    setSubjects((draft) => {
      let question = draft[currentSubject].questions.find(tp => tp.topic == q.topic).questions.find(mq => mq.id == q.id);
      // Whatever that is, update its visibility
      question.notVisible = !question.notVisible;
    });

    setModified((draft) => {
      if (!draft.includes(subjects[currentSubject].subject)) {
        draft.push(subjects[currentSubject].subject);
      }
    });
  }

  function changeOptions(answer) {
    let toBeEdited = questions[number];

    setQuestions(draft => {
      draft[number].ans = answer;
    })

    setSubjects((draft) => {
      let question = draft[currentSubject].questions.find(tp => tp.topic == toBeEdited.topic).questions.find(quest => quest.id == toBeEdited.id)
      question.ans = answer;
    });

    setModified((draft) => {
      if (
        !draft.includes(subjects[currentSubject].subject)
      ) {
        draft.push(subjects[currentSubject].subject);
      }
    });

    setLogs((draft) => {
      draft.unshift({
        type: "success",
        message: `Question ${toBeEdited.id} updated successfully`,
      });
    });
  }

  return (
    <div
      className="card questions"
    >
      <div
        className="card-image"
        style={{
          display: `${question.img ? "block" : "none"}`,
        }}
      >
        <figure className="image is-4by3">
          <img src={question.img} alt="Placeholder image" />
        </figure>
      </div>
      <header
        className="card-header"
        style={{
          padding: "10px",
        }}
      >
        <p className="card-header-title">{number + 1}</p>
        <div
          style={{
            display: "flex",
            gap: "1em",
          }}
        >
          <span onClick={handleVisibility}>
            {question.notVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </span>
          <span onClick={handleDelete}>
            {/* question visibility feature too...*/}
            <DeleteIcon
              style={{
                color: "crimson",
              }}
            />
          </span>
        </div>
      </header>
      <div className="card-content">
        <div className="content" onClick={handleClick}>
          <span className="question-text">
            {Parser().parse(question.question)}
          </span>
          <hr />
          <div className="options-editor">
            {question.options
              ? question.options.map((q, i) => {
                let map = { 0: "A", 1: "B", 2: "C", 3: "D", 4: "E" };
                return (
                  <span
                    key={i}
                    className={
                      question.ans == map[i] ? "has-text-success" : ""
                    }
                    onClick={() => changeOptions(map[i])}
                    style={{ cursor: "pointer" }}
                  >
                    {Parser().parse(q)}
                  </span>
                );
              })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
// the only solution is if questions is a state itself...
// omo. and this thing have been hard wired into boots.
// oma se o.
function Questions({
  questions,
  setQuestions,
  setCurrentQuestion,
  currentQuestion,
  currentTopic,
  currentSubject,
  subjects,
  setSubjects,
  setModified,
  setLogs,
}) {
  return (
    <div id="questions-tab">
      {questions.map((q, i) => {
        return (
          <Question
            question={q}
            questions={questions}
            setQuestions={setQuestions}
            key={i} // this is where the key should be useful....
            number={i}
            setCurrentQuestion={setCurrentQuestion}
            currentQuestion={currentQuestion}
            currentTopic={currentTopic}
            currentSubject={currentSubject}
            subjects={subjects}
            setSubjects={setSubjects}
            setModified={setModified}
            setLogs={setLogs}
          />
        );
      })}
    </div>
  );
}

function Topic({
  setSubjects,
  currentSubject,
  topics,
  currentTopic,
  setCurrentTopic,
  setCurrentQuestion,
  handleAdd,
  selected,
  setSelected
}) {
  return (
    <div id="topics">
      <button
        type="button"
        className="button is-dark"
        onClick={(e) => handleAdd(e, "topic")}
      >
        Add new topic
      </button>
      {topics.map((q, i) => {
        return (
          <Button
            name={q.topic}
            number={i}
            setCurrentTopic={setCurrentTopic}
            setCurrentQuestion={setCurrentQuestion}
            color={i == currentTopic ? "is-info" : ""}
            type={"topic"}
            setSubjects={setSubjects}
            currentSubject={currentSubject}
            currentTopic={currentTopic}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
}

function Button({
  name,
  version,
  type,
  color,
  setCurrentSubject,
  number,
  currentTopic,
  setCurrentTopic,
  setCurrentQuestion,
  setSubjects,
  currentSubject,
  selected,
  setSelected
}) {
  function handleContextMenu(e) {
    e.preventDefault();
    // console.log(name)
    let newName = prompt("Enter new name for topic");
    // console.log(newName);
    // then save that's all sha....
    // console.log("right click")
    if (newName) {
      setSubjects((draft) => {
        // nice and easy
        draft[currentSubject].questions[currentTopic].topic = newName; // I could have have used current topic rather easily
      });
    }
  }

  function handleClick(e) {
    // console.log(e.key)
    if (type == "subject") {
      setCurrentSubject(number);
      setCurrentTopic(0);
      setCurrentQuestion(0);
    } else if (type == "topic") {
      setCurrentTopic(number);
      // ok. this is where the problem is I guess
      setCurrentQuestion(0); // ufff, this is a serious case... /// then not here... somewhere else... this is cool..
      console.log("clIck");
    }
  }
  // this one has performed it's job perfectly....
  // the rest is left for the header....
  function handleDel(e) {
    if (type == "topic") {
      if (e.shiftKey && e.keyCode == 68) {
        // console.log(e.target.textContent)
        let sure = confirm("Are you sure?");
        if (sure) {
          setSubjects((draft) => {
            let filtered = draft[currentSubject].questions.filter((t) => {
              if (t.topic) {
                return t;
              }
            });
            draft[currentSubject].questions = filtered;
            setCurrentTopic(0);
          });
        }
      } else if (e.shiftKey && e.keyCode == 77) {
        setSelected(draft => {
          // console.log(name)
          // console.log(selected)
          draft.push(name); // nice and easy
        })
      } else if (e.shiftKey && e.keyCode == 85) {
        setSelected(draft => {
          let x = draft.filter(f => f != name);
          return x;
        })
      }
    }
  }

  // function handleDelete() {
  //   let areYouSure = confirm("Are you sure?");
  //   if (areYouSure) {
  //     setSubjects(draft => {
  //       // just update the questions list that's all...
  //       let newStuffs = draft[currentSubject].questions[currentTopic].questions.filter(e => e.id != number + 1); // this should give us new set of questions
  //       // update the ids... since i is zero indexed, we start from 1... and so on...
  //       newStuffs.forEach((newStuff, i) => {
  //         newStuff.id = i + 1;
  //       })
  //       // console.log(u)
  //       draft[currentSubject].questions[currentTopic].questions = newStuffs; // hmmm. this should work now....
  //     })
  //   }
  // }
  // on context menu we rename an a topic... shey you get?????
  return (
    // console.log(selected)
    <button
      className={`button ${color} ${selected && selected.includes(name) ? "is-warning" : ""}`}
      onClick={handleClick}
      onKeyDown={handleDel}
      onContextMenu={handleContextMenu}
    >
      {name} {version}
    </button>
  );
}

// what are the things we need
// one, we need to a function to help add a new subject
// a new topic
// and a new question...
// now let's use this opportunity to create an interface for arranging topics and deleting them...
// the renaming can come later...

function TopicsTextArea({
  subjects,
  currentSubject,
  setSubjects,
  setModified,
  setLogs,
}) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (subjects.length && subjects[currentSubject]?.questions?.length) {
      const newText = subjects[currentSubject].questions.reduce(
        (a, e) => `${a}${e.topic}\n`,
        ""
      );
      setText(newText); // Update the state
    } else {
      setText(""); // Clear the textarea if there are no topics
    }
  }, [subjects, currentSubject]); // Re-run when these dependencies change

  let textarea = useRef(null);
  let [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleRearrange = (e) => {
    let textAreaContent = textarea.current.value.trim().split("\n");
    // console.log(subjects[currentSubject])
    // console.log(subjects)
    setSubjects((draft) => {
      let oldTopic = draft[currentSubject].questions; // this will give the array of topics
      // and that's what we want to rearrange normally...
      // now let's work on it...
      let newArr = [];
      let topics = [];
      for (let t of textAreaContent) {
        newArr.push(oldTopic.find((el) => el.topic == t));
        topics.push(t); // just push like this...
      }

      // after completing, push exam...
      topics.push("Exam"); // nice and easy...

      draft[currentSubject].questions = newArr;
      draft[currentSubject].topics = topics; // easy...
      // arranging should update version number...
      setModified((draft) => {
        if (!draft.includes(subjects[currentSubject].subject)) {
          draft.push(subjects[currentSubject].subject);
        }
      });
      setLogs((draft) => {
        draft.unshift({
          type: "success",
          message: `Topics rearranged successfully`,
        });
      });
      // and turn on the save btn
    });

    // Update the questions with the new array
  };

  return (
    <div>
      <textarea
        ref={textarea}
        name="topics"
        id="topics"
        className="textarea"
        value={text}
        onChange={handleChange} // Update state on user input
        style={{
          marginBottom: "2em",
        }}
      ></textarea>
      <button
        onClick={handleRearrange}
        className={`button is-primary ${loading ? "is-loading" : ""}`}
      >
        Rearrange
      </button>
    </div>
  );
}

function Main({
  type,
  subjects,
  setSubjects,
  // experimental
  questions,
  setQuestions,
  // it's like the experiment is here to stay actually... shey you get
  setModified,
  logs,
  setLogs,
  showEditor,
  selected,
  setSelected,
  currentSubject,
  setCurrentSubject
}) {
  // console.log(subjects)
  // let [currentSubject, setCurrentSubject] = useState(0);
  let [currentTopic, setCurrentTopic] = useState(0);
  // then it's more like when setCurrentQuestion have changed sort of. 
  // Omase o....
  // this is not good...
  let [currentQuestion, setCurrentQuestion] = useState(0); // let's do it like this for now.
  // op is one of: subject, topic, or question
  // adding a subject is a network request something...
  // if it fails to register on database, don't bother adding...
  // let [question, setQuestion] = useState(questions[currentQuestion]); // hmmm... yeah... something like this but I don't know the integrity of this one sha.
  async function handleAdd(event, op) {
    // alright, since the one for topic and subject is likely to be same, let's use a single function for them
    // we prompt... for the topic name;
    let name = "";
    if (op == "subject") {
      name = prompt("Enter subject"); // cool
      // continue...
      // then I will set subjects and that's all...
      if (name) {
        try {
          setLogs((draft) => {
            draft.unshift({
              type: "pending",
              message: "Adding subject please wait...",
            });
          });
          let addToDB = await addDocument("questions", {
            // cool...
            subject: name,
            type: type,
            url: `questions/${name.toLowerCase()}.json`, // GST101
            version: 0,
          });
          // console.log(addToDB);          // nice
          if (addToDB) {
            setSubjects((draft) => {
              draft.push({ ...addToDB, questions: [] }); // let's see how it goes...
            });
          }
          setLogs((draft) => {
            draft.unshift({
              type: "success",
              message: `${addToDB.subject} added successfully`,
            });
          });
        } catch (e) {
          setLogs((draft) => {
            draft.unshift({ type: "failure", message: "Failed to add" }); // cool...
          });
        }
      }
    } else if (op == "topic") {
      name = prompt("Enter topic");
      if (name) {
        setSubjects((draft) => {
          // we add the current topic shey you get
          let curr = draft[currentSubject]; // current subject // since draft is list of subjects
          curr.questions.push({
            // a new object
            topic: name,
            questions: [], // empty list for a start normally...
          });
        });
      }
    }
  }
  // we can useEffect obviously...
  useEffect(() => {
    // so easily now, I can just deal with questions beyen...
    setQuestions(subjects.length && subjects[currentSubject].questions.length
      ? subjects[currentSubject].questions[currentTopic].questions
      : []) // don't call useEffect again... just update the question that's all...
    // so it is very clear that currentSubject and currentTopic are the only dependencies we need...
    // nice and easy...
  }, [currentTopic, currentSubject])
  // the dependency means when currentTopic and currentSubject has changed, change as well.

  return (
    <div id="main">
      <div id="subjects">
        {subjects.map((q, i) => {
          return (
            <Button
              name={q.subject}
              version={q.version.toFixed(1)}
              type="subject"
              number={i}
              color={i == currentSubject ? "is-primary" : ""}
              setCurrentSubject={setCurrentSubject}
              setCurrentTopic={setCurrentTopic}
              setCurrentQuestion={setCurrentQuestion}
            />
          );
        })}
        <button
          className="button is-dark"
          type="button"
          onClick={(e) => handleAdd(e, "subject")}
        >
          Add new Subject
        </button>
        {/* so it's ok like this... */}
        {/* let's make it really crude for now, we will make it perfect later */}
        {/* it should just be able to perform the normal functionality that we need. she you get */}
      </div>
      <div id="panel">
        <Topic
          topics={subjects.length ? subjects[currentSubject].questions : []}
          currentTopic={currentTopic}
          setCurrentTopic={setCurrentTopic}
          setCurrentQuestion={setCurrentQuestion}
          handleAdd={handleAdd}
          setSubjects={setSubjects}
          currentSubject={currentSubject}
          selected={selected}
          setSelected={setSelected}
        />
        <div id="question-editor">
          {/* this must support empty questions. Simply display nothing. */}
          <Questions
            questions={questions}
            setQuestions={setQuestions}
            setCurrentQuestion={setCurrentQuestion}
            currentQuestion={currentQuestion}
            currentTopic={currentTopic}
            currentSubject={currentSubject}
            subjects={subjects}
            setSubjects={setSubjects}
            setModified={setModified}
            setLogs={setLogs}
          />
          {showEditor ? (
            <Editor
              // I think the problem is here actually...
              // yupyup....
              subjects={subjects}
              question={
                questions[currentQuestion]
              }
              questions={questions}
              setQuestions={setQuestions}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              currentTopic={currentTopic}
              currentSubject={currentSubject}
              setSubjects={setSubjects}
              setModified={setModified}
              logs={logs}
              setLogs={setLogs}
            />
          ) : (
            <TopicsTextArea
              subjects={subjects}
              currentSubject={currentSubject}
              setSubjects={setSubjects}
              setModified={setModified}
              setLogs={setLogs}
            // nice and easy shey you get...
            />
          )}
        </div>
      </div>
    </div>
  );
}

// so the subjects will contain the list of subjects....

export default Main;

// the structure is balanced beyen. cool
