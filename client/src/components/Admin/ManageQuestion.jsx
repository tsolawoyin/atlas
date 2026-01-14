import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Footer from "../Footer";
import Main from "./Main";
import { useImmer } from "use-immer";
import { useEffect, useState } from "react";
import { fetchDocument } from "../../utils/firebase";
import CryptoJS from "crypto-js";
import { addData } from "../../utils/indexedDB";

function ManageQuestions({ type }) {
  let [subjects, setSubjects] = useImmer(useLoaderData());
  let [currentSubject, setCurrentSubject] = useState(0); // nice and easy...
  let [modified, setModified] = useImmer([]);
  // experimental
  let [questions, setQuestions] = useImmer([]);
  // this is here so that all those that needs questions can get it easily shey you get...
  // 
  let [logs, setLogs] = useImmer([]);
  let [saved, setSaved] = useState(true);
  let [showEditor, setShowEditor] = useState(true);
  let key = CryptoJS.AES.decrypt(
    localStorage.getItem("uid"),
    navigator.userAgent
  ).toString(CryptoJS.enc.Utf8); // the key...
  let user = JSON.parse(localStorage.getItem("user"));
  let [message, setMessage] = useState(false);
  let [selected, setSelected] = useImmer([]); // empty stuff for a start...
  // it's reasonable to add only stuff from a topic...

  // we check only once...
  // if subjects is empty list, then we fetch for new user...
  useEffect(() => {
    // I think useEffect doesn't support straight forward async
    if (!subjects.length) {
      setLogs((draft) => {
        draft.unshift({
          type: "pending",
          message: `Fetching questions from server...`,
        });
      });
      // so I will the db for type... shey you get... how to deal with pride is another topic for another day
      // console.log(type)
      fetchDocument(type, "questions", key) // this is how to use the stuff... the then and catch methods...
        .then(async (docs) => {
          setSubjects(docs);
          await addData("EditorQB", type.toUpperCase(), docs, {
            keyPath: "subject",
          });
          // localStorage.setItem(getType(type), JSON.stringify(docs)); // set to local storage
          setLogs((draft) => {
            draft.unshift({ type: "success", message: `Fetching done!` });
          });
        })
        .catch((e) => {
          setLogs((draft) => {
            draft.unshift({
              type: "failure",
              message: `Can't get questions, please try again.`,
            });
          });
          console.log(e);
        });
    }
  }, []);

  return (
    <div id="app-editor">
      <Header
        subjects={subjects}
        modified={modified}
        questions={questions}
        setQuestions={setQuestions}
        setModified={setModified}
        login={true} // since it's true alreay...
        setLogs={setLogs}
        setSubjects={setSubjects}
        saved={saved}
        setSaved={setSaved}
        from={"ManageQuestions"}
        type={type.toLowerCase()}
        setMessage={setMessage}
        setShowEditor={setShowEditor}
        showEditor={showEditor}
        // the merging will happen in the header...
        selected={selected}
        setSelected={setSelected}
        currentSubject={currentSubject}
      />
      {/* the first obvious person that needs question is main */}
      <Main
        subjects={subjects}
        setSubjects={setSubjects}
        setModified={setModified}
        questions={questions}
        setQuestions={setQuestions}
        logs={logs}
        setLogs={setLogs}
        type={type}
        showEditor={showEditor}
        selected={selected}
        setSelected={setSelected}
        currentSubject={currentSubject}
        setCurrentSubject={setCurrentSubject}
      />

      {message ? (
        <article
          class="message admin-right-message"
          style={{
            position: "absolute",
            maxWidth: "50%",
            top: "10px",
            right: "20px",
          }}
        >
          <div class="message-header">
            <p>Hello {user.fullname} 👋</p>
            <button class="delete" aria-label="delete" onClick={(e) => {
            setMessage(false);
            }}></button>
          </div>
          <div class="message-body">
            <p>
              You’re on the verge of becoming a full admin! For now, you have
              the ability to modify (edit, delete, and add) questions, topics,
              and subjects locally on your computer,{" "}
              <strong>but you cannot upload questions to the server</strong>.
              This is to ensure you become familiar with the Editor interface
              and understand how everything works. Once your competence is
              confirmed, you’ll be promoted to a full admin.
            </p>
            <br />
            <p>Have fun!</p>
            <p>
              <strong>Temidayo O.</strong>
            </p>
          </div>
        </article>
      ) : null}

      <Footer />
    </div>
  );
}

function getType(type) {
  if (type == "utme") {
    return "draftutme";
  } else {
    return "draftfuta";
  }
}

export default ManageQuestions;

// now that's how things will go. Clear? yupyup. Simple and straight.
// thank you...
