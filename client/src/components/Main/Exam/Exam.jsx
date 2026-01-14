// DEPENDENCIES
import { useState, useEffect, useRef } from "react";
import { useImmer } from "use-immer";
import CryptoJS from "crypto-js";
import { useLoaderData, useNavigate } from "react-router-dom";

// COMPONENTS
import Header from "../Header";
import Sidebar from "../Sidebar";

// HELPER COMPONENTS
import Question from "./Question";
import NumKeys from "./NumKeys";
import Time from "./Time";
import ExamKeys from "./ExamKeys";
import Button from "./Buttons";

// HELPER FUNCTIONS
import { nav, markAll, mark, markQuestion, setColor } from "./utils/helpers";
import postExamEvents from "./utils/endExam";
import { calculateMargin } from "../../../utils/helpers";

// CSS
import "../../../css/Exam.css";
// I will need two type of exam.... normally...

function Exam({ type }) {
  let navigate = useNavigate();
  let [marginTop, setMarginTop] = useState(0);
  let key = null;
  let user = JSON.parse(localStorage.getItem("user"));

  if (localStorage.getItem("uid")) {
    key = CryptoJS.AES.decrypt(
      localStorage.getItem("uid"),
      navigator.userAgent
    ).toString(CryptoJS.enc.Utf8);
  } else {
    navigate("/login");
    return;
  }

  let {
    name,
    uid,
    duration,
    questions,
    examType,
    userScore,
    negativeMark,
    finished,
    createdAt,
    config
  } = useLoaderData();

  questions = JSON.parse(
    CryptoJS.AES.decrypt(questions, key).toString(CryptoJS.enc.Utf8)
  );

  let [exams, setExams] = useImmer(questions);

  let [pressed, setPressed] = useState(null);
  let [current, setCurrent] = useImmer({ exam: 0 });
  let [score, setScore] = useState(userScore);
  let [submit, setSubmit] = useState(false);
  let [scoreColor, setScoreColor] = useState("low");
  let [navi, setNav] = useState(false);
  let [darkmode, setLightmode] = useState(
    JSON.parse(localStorage.getItem("lightmode"))
  ); // it depends...
  let [prediction, setPrediction] = useState(
    localStorage.getItem("overallscore") || 0
  );
  let [timer, setTimer] = useState(null); // null for a start
  let [streak, setStreak] = useState(user.currentStreak || 0);

  let [loading, setLoading] = useState(false);

  let numKey = useRef(null); // it might still not see useRef too. but let's try and check
  let mutExams = useRef(exams);
  let mutCurrent = useRef(current);
  let mutScore = useRef(score);
  let mutSubmit = useRef(submit);
  let mutTimer = useRef(timer);
  // let [timer, setTimer] = useState(null);
  // the key registers only once... So how to do deal with problem...
  // I am doing...
  // the problem is interesting because it's making me learn more...
  mutExams.current = exams; // e no easy I swear. u gats think ur ass out. makes sense... anyways. cool and brilliant...
  mutCurrent.current = current; //...
  mutScore.current = score; //...
  mutSubmit.current = submit; //...

  // problem detected
  // when I use keys for toggling right or left it doesn't work properly
  // shey you understand
  // makes sense?
  // yupyup

  // toggle(); // do you see now that toggle function is working fine here...
  // Open issue. To be solved some other time. // Thank you.
  useEffect(() => {
    document.title = "Exam"; // I can change it too exam completed if I want

    // let get to work then....
    // mutTimer... the stuff doesn't actually register the timer properly
    async function handleKeyDown(e) {
      //console.log(e.key); // making sense? no no no doesn't make sense...
      // console.log(e.key); // now let's work on this... // majority will be handled with key.... // makes sense... // this is what will make
      // handle keys for desktop users
      // the nexting and preving algorithm should be in one place in order to find use he
      // done....
      // these keys makes things easy for those using PC...
      // the solution is reading the UI's state itself...
      // so we can use useRef to track this down.
      // let current = document.querySelector(".current").id.split("-")[0];
      // this is probably where useRef is useful... hmmm...
      // useRef baby...
      // now we are down to marking stuff....
      // how in the world will this thing mark successfully since I'm dealing with object now not the UI.
      // reading the UI again???? ummmm, this is serious o...
      let exam = mutExams.current[mutCurrent.current.exam]; // this is the current exam now.
      // console.log(exam);
      // the only work around this is simple...
      // the reason why it works for toggling is because exams is constant
      // so it works in that case...
      // it doesn't really matter anyways...
      // it remains submit key...
      if (e.keyCode == 37 || e.keyCode == 80) {
        // in essence, this portion can't access current later on...
        // maybe I can read the UI to determine then...
        // what about that...
        // this is another experience actually... makes sense...
        nav("prev", exam, setExams); // I know this won't work
        // toggle("prev", mutCurrent.current.exam); // I jealous my ancestors, they lived their lives. Whether poor or rich.
        if (examType == "A") {
          let score = mark(
            exam.questions[exam.current],
            mutSubmit.current,
            setExams,
            exam,
            negativeMark
          );
          // console.log(score);
          // the score( might or will )be affected too, the rest is ok...
          markQuestion(
            "prev",
            examType,
            exam,
            score,
            setScore,
            setScoreColor,
            setExams
          );
          // I think I've run into this issue once like that...
        }
      } else if (e.keyCode == 39 || e.keyCode == 78) {
        // it remains marking and all those sort of cool things...
        nav("next", exam, setExams); // nice and easy... nice and easy. nice and easy.
        // console.log(currentNumber)
        // console.log(exam); // makes some sense but it's not working...
        // console.log(Number(numKey.current.textContent))
        // Yay. It works. Congratulations. Keyboard support activated. Thank you.
        if (examType == "A") {
          let score = mark(
            exam.questions[exam.current],
            mutSubmit.current,
            setExams,
            exam,
            negativeMark
          );
          // console.log(score);
          // let score = mark(exam.questions[Number(numKey.current.textContent) - 1], submit, setExams, exam, negativeMark)
          // console.log(exam.questions[Number(numKey.current.textContent) - 1]);
          // console.log(score);
          // it's working already.
          // I think this stuff is marking unnecessarily sef
          markQuestion(
            "next",
            examType,
            exam,
            score,
            setScore,
            setScoreColor,
            setExams
          ); // it works. //thank you so much...
          // obviously. especially I m not interested in medicine. // honestly.
          // I'm interested in UI but not medicine...
        }
      } else if (e.key == "s") {
        let prompt = confirm("Click ok to submit your exam");

        if (prompt) {
          // makes sense...
          setLoading(true); // to start the submit process;

          let tempScore;
          let msg;
          if (examType == "A") {
            msg = "Exam ended!";
            // localStorage.removeItem("c_e"); // cool // we don't do this anymore...
          } else if (examType == "B") {
            // it doesn't even mark at all...
            let total = 0; // local
            let totalQuestions = 0; // local

            // the issue is between here
            // one issue is that if I use keys for picking answers the score doesn't update...
            // so I'ld assume that key is making some errors
            // mutExams is what we need
            mutExams.current.forEach((e, i) => {
              // we will mark each question naani
              // mark everything
              // console.log(e);
              // it remains displaying the correct exam score
              let score = markAll(
                e.questions,
                e,
                mutSubmit.current,
                setExams,
                negativeMark
              ); // this should work. negative mark is constant

              // console.log(score);

              total += score;
              totalQuestions += e.questions.length;
              // after marking
              setExams((draft) => {
                let draftExam = draft.find((q) => q.id == e.id);
                draftExam.score = score; // makes sense? somehow...
              });
            });

            let percent = Math.floor((total / totalQuestions) * 100);

            // ok setScore
            tempScore = percent;

            setScoreColor(setColor(percent));

            msg = "Your average score is " + percent + "%";
            // we gats to dey calm down, shey you don't know ni...
          }

          let postEvents = await postExamEvents(
            uid,
            type,
            mutExams.current,
            setStreak,
            setPrediction,
            // passing config information into it 
            config
          );

          if (postEvents) {
            if (examType == "B") setScore(tempScore); // nice...
            clearInterval(mutTimer.current); // what's wrong with this one bayii...
            setTimer(null);
            setLoading(false);
            setSubmit(true); // that's all
            alert(msg);
          } else {
            setLoading(false);
            alert("An error occured, please try submitting again");
          }
        }
      }
      // what's next, the option stuff...
      // the easiest part as it turns out

      // support for tab => t
      // which is best, 1234567, or pn

      let pressedKey = e.key.toUpperCase();
      // it working at least. E remain to just solve it.
      // this is not working overtime...
      // honestly... it's persistent...
      if (
        pressedKey == "A" ||
        pressedKey == "B" ||
        pressedKey == "C" ||
        pressedKey == "D" ||
        pressedKey == "E"
      ) {
        setPressed(pressedKey); // makes sense???????
        // that's all. works. easy peasy...
      }
    }

    calculateMargin(setMarginTop);
    // calculate streak too will be here... nice one and makes sense...
    // too many errors...
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`app-exam ${darkmode ? "app-light" : "app-dark"}`}
      style={{
        marginTop: `${marginTop}px`,
        // this is the height of main...
        height: `calc(100vh - ${marginTop}px)`,
        // now the height of main has been fixed...
      }}
    >
      <Header
        setDarkMode={setLightmode}
        nav={navi}
        setNav={setNav}
        from={"exam"}
        // these two for streak things....
        streak={streak}
        prediction={prediction}
      />

      <div
        id="exam-page"
        // in this case it's not necessary...
      >
        {navi ? <Sidebar login={true} lightMode={darkmode} /> : null}

        {/* Alright. Let's just focus */}
        {/* the architecture of exam will have to change normally... */}
        <div id="exam">
          <div className="header">
            {/* let's it just be like dat. */}
            {examType == "A" || submit ? (
              <p className={`score ${scoreColor}`}>{mutScore.current}</p>
            ) : (
              <p></p>
            )}
            {/* the time component will handle itself... */}
            <Time
              score={mutScore}
              setSubmit={setSubmit}
              darkmode={darkmode}
              code={key}
              examType={examType}
              exams={mutExams}
              setScore={setScore}
              setScoreColor={setScoreColor}
              submit={mutSubmit.current}
              setExams={setExams}
              negativeMark={negativeMark}
              type={type} // now I need type....
              duration={duration}
              createdAt={createdAt}
              finished={finished}
              id={uid}
              setTimer={setTimer}
              mutTimer={mutTimer}
              setPrediction={setPrediction}
              setStreak={setStreak}
              setLoading={setLoading}
              config={config}
            />
            <p className={`score ${setColor(exams[current.exam].oldScore || 0)}`}>{exams[current.exam].oldScore || 0}</p>
          </div>

          <Question
            exam={exams[current.exam]}
            setExams={setExams}
            type={examType}
            submit={submit}
            pressed={pressed}
            setPressed={setPressed}
            mutExams={mutExams}
          />

          <div id="controller">
            <div id="control-keys">
              <div>
                <Button
                  type={"prev"}
                  setCurrent={setCurrent}
                  score={score}
                  setScore={setScore}
                  examType={examType}
                  exam={exams[current.exam]}
                  setExams={setExams}
                  submit={submit}
                  setScoreColor={setScoreColor}
                  negativeMark={negativeMark}
                  id={uid}
                  questions={exams}
                  userScore={userScore}
                  code={key}
                />
                <Button
                  type={"next"}
                  setCurrent={setCurrent}
                  score={score}
                  setScore={setScore}
                  examType={examType}
                  exam={exams[current.exam]}
                  setExams={setExams}
                  submit={submit}
                  setScoreColor={setScoreColor}
                  negativeMark={negativeMark}
                  id={uid}
                  questions={exams}
                  userScore={userScore}
                  code={key}
                />
              </div>
              <Button
                type={"submit"}
                setCurrent={setCurrent}
                score={score}
                setSubmit={setSubmit}
                exams={mutExams.current}
                current={current}
                setExams={setExams}
                examType={examType}
                setScore={setScore}
                setScoreColor={setScoreColor}
                submit={submit}
                negativeMark={negativeMark}
                lightmode={darkmode}
                timer={timer}
                setTimer={setTimer}
                id={uid}
                whichType={type}
                duration={duration}
                setStreak={setStreak}
                setPrediction={setPrediction}
                loading={loading}
                setLoading={setLoading}
                config={config}
              />
            </div>

            <div id="examkeys">
              {exams.map((q, i) => {
                let name;
                if (q.name == "Multiple") {
                  name = "Multiple";
                } else {
                  name =
                    q.topic.length <= 13
                      ? q.topic
                      : q.topic.slice(0, 10) + "...";
                }
                return (
                  <ExamKeys
                    name={name}
                    key={i}
                    posn={i}
                    current={i == current.exam}
                    setCurrent={setCurrent}
                    setScore={setScore}
                    exams={exams}
                    currentExam={exams[current.exam]}
                    setScoreColor={setScoreColor}
                    submit={submit}
                  />
                );
              })}
            </div>

            <NumKeys
              qty={exams[current.exam].questions.length}
              setExams={setExams}
              exam={exams[current.exam]}
              type={examType}
              submit={submit}
              lightmode={darkmode}
              numKey={numKey}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam;
