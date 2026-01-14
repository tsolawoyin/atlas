import React, { useRef, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "katex/dist/katex.min.css";
import katex from "katex";
import { v4 as uuid5 } from "uuid";
import { parseQuestionToStr, parseStrToObject } from "../../utils/helpers";

import "../../css/Editor.css";

import ImageUploader from "./uploadImage";

// Initialize Quill's custom module for KaTeX
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    [{ align: [] }],
    ["clean"], // remove formatting button
    ["formula"], // Adding the formula option to the toolbar
  ],
};

// Register KaTeX as a custom Quill blot
window.katex = katex;

const Editor = ({
  subjects,
  question,
  questions,
  setQuestions,
  currentQuestion,
  setCurrentQuestion,
  currentTopic,
  currentSubject,
  setSubjects,
  setModified,
  logs,
  setLogs,
}) => {
  let [editing, setEditing] = useState(false);
  // let [image, setImage] = useState(null);
  // let [tempImg, setTempImg] = useState(null); // I m not sure 
  let [id, setId] = useState(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!question) {
      let newId = uuid5();
      setId(newId);
    } else {
      // Extract values first to avoid revoked Proxy issues
      const questionId = question.id;
      setId(questionId);
    }
  }, [questions]); // it's like this one is causing it to update successfully. nice and easy.
  // makes sense. That's the error it's having sha.
  // the questioins are having the saame id...

  window.onload = (e) => {
    quillRef.current.focus();
  };
  // op is one of add or update
  function handleClick(op) {
    const quill = quillRef.current.getEditor();

    try {
      let htmlStruct = parseStrToObject(quill.root.innerHTML);
      if (!htmlStruct) {
        throw new Error(
          "Unable to parse structure, please check and try again"
        );
      }
      if (op == "update") {
        let question = questions[currentQuestion];
        
        setQuestions((draft) => {
          try {
            let oldQuestion = draft[currentQuestion];
            oldQuestion.question = htmlStruct.question;
            oldQuestion.ans = htmlStruct.ans;
            oldQuestion.remark = htmlStruct.remark;
            oldQuestion.options = htmlStruct.options;
          } catch (err) {
            setLogs((draft) => {
              draft.unshift({
                type: "warning",
                message: `No question to update`,
              });
            });
          }
        });
        // update real list
        setSubjects(draft => {
          try {
            let subject = draft.find(sb => sb.subject == question.subject);
            let topic = subject.questions.find(tp => tp.topic == question.topic);
            let realQuestion = topic.questions.find(q => q.id == question.id);
            // console.log(realQuestion.id);
            realQuestion.question = htmlStruct.question;
            realQuestion.ans = htmlStruct.ans;
            realQuestion.remark = htmlStruct.remark;
            realQuestion.options = htmlStruct.options; // Nice and easy. Makes sense. Thank you.
          } catch (err) {
            console.log(err.message);
          }
          // update to new questions....
        })
        // this is foor switching stuffs.
        setCurrentQuestion(100000); // this will set the editor to an undefined state...
        // this is for saving things up..
        setLogs((draft) => {
          try {
            draft.unshift({
              type: "success",
              message: `Question ${questions[currentQuestion].id} updated successfully`,
            });

            setModified((draft) => {
              if (!draft.includes(subjects[currentSubject].subject)) {
                draft.push(subjects[currentSubject].subject);
              }
            });
          } catch (err) {
            console.log(err)
          }
        });
      } else {

        let newQuestion = {
          // current...
          id: id || uuid5(), // I hope you understand
          question: htmlStruct.question,
          ans: htmlStruct.ans,
          remark: htmlStruct.remark,
          options: htmlStruct.options,
          subject: subjects[currentSubject].subject,
          topic: subjects[currentSubject].questions[currentTopic].topic
          // nice and easy... makes a lot of sense.
        }

        setQuestions(draft => {
          // setting questions. Nice and easy...
          draft.push(newQuestion)
        })

        setSubjects((draft) => {
          // let's update everyting
          // add question to the bottom...
          try {
            draft[currentSubject].questions[currentTopic].questions.push(newQuestion);
          } catch (err) {
            console.log(err);
          }
        });

        setCurrentQuestion(100000);

        // then we can just set question to null normally. Abi?

        // adding stuffs.
        setLogs((draft) => {
          try {
            draft.unshift({
              type: "success",
              message: `Question ${newQuestion.id} added successfully successfully`,
            });
  
            setModified((draft) => {
              if (!draft.includes(subjects[currentSubject].subject)) {
                draft.push(subjects[currentSubject].subject);
              }
            });
          } catch (err) {
            draft.unshift({
              type: "warning",
              message: `${err}`,
            });
          }
        });
      }
    } catch (e) {
      setLogs((draft) => {
        draft.unshift({
          type: "failure",
          message: `${e.message}`,
        });
      });
    }
  }
  // you know, we need a default value...
  return (
    <div id="editor-tab">
      <div id="quill-editor">
        <ReactQuill
          ref={quillRef} // holding an instance of the editor here... hmmmm
          value={parseQuestionToStr(question)} // remember to change this to question...
          onChange={(e) => setEditing(true)}
          // onChange={e => handleClick}
          modules={modules}
          theme="snow"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            className="button is-info m-3"
            disabled={editing ? false : true}
            onClick={(e) => handleClick("update")}
          >
            Update
          </button>
          {/* some serious drilling here... */}
          {/* e get as e be. shey you get.... */}
          <button
            className="button is-primary m-3"
            type="button"
            onClick={() => handleClick("add")}
          >
            Add question
          </button>
          {/* let calm first */}
          {/* <ImageUploader
            tempImg={tempImg}
            setTempImg={setTempImg}
            setImage={setImage}
            id={id}
            setId={setId}
            setLogs={setLogs}
          /> */}
        </div>
      </div>
      <article className="message log">
        <div className="message-header">
          <p>Log</p>
        </div>
        <div className="message-body">
          {logs.map((e, i) => {
            return (
              <p key={i} className={msgType(e.type)}>
                {e.message}
              </p>
            );
          })}
        </div>
      </article>
    </div>
  );
};

function msgType(status) {
  if (status == "success") return "has-text-success";
  if (status == "failure") return "has-text-danger";
  if (status == "pending") return "has-text-warning";
}

export default Editor;

// I can actually find something useful to build for our prestiguous valentis and see where it leads
// but I can build only when I have my brain with me... thanks

// ERROR BOUNDARIES
// Still have some other stuffs to do.
// The thing get as e be to be honest. I don't really understand the error...
// I really do not understand its problem to be honest...
// I just feel like it should work sha...
// Olagbara....


// The current model uses a double layered sort of thing
// The questions which I see
// And the internal question
// Anything that happens to the virtual also must happen to the main question...