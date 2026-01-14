import postExamEvents from "./utils/endExam";
import { nav, mark, markAll, markQuestion, setColor } from "./utils/helpers";

function Button({
  type, // type of button, String: one of -> "prev", "next", "submit"
  score,
  setScore,
  examType, // String: one of -> A or B
  exam, // since this component only focuses on the current exam then we just pass in the current exam into it. makes sense?
  setExams,
  submit,
  setSubmit,
  setScoreColor,
  setExamMode,
  exams, // this is for the submit btn
  current,
  negativeMark,
  lightmode,
  id,
  questions,
  userScore,
  code,
  timer,
  setTimer,
  whichType, // which type reps the kind of exam; UTME, MBBS, etc...
  duration,
  setStreak,
  setPrediction,
  loading,
  setLoading,
  config
}) {
  // maybe I should just save every 5 seconds for now...
  // let's save only when users pick an answer... and don't save otherwise...
  async function handleClick(e) {
    let userdet = JSON.parse(localStorage.getItem("user")); // nice
    
    nav(type, exam, setExams); // let's see if this will work // oh ok. the nav keys
    // makes sense...
    // it works like this...
    // let make score a global var...
    let tempScore;
    let examBState = [];

    if (type == "submit") {
      // this thing is seriously problematic in my opinion
      // on submit, the answer should be calculated...
      // e get as everything be...
      if (!submit) {
        // yeah, if user haven't submitted yet. I grab now
        // I didn't even check it at all. Omo...
        let sure = confirm("Click ok to submit your exam?");

        let msg;

        if (sure) {
          // me sef shey I get sense???
          setLoading(true);
          // this is a normal thing now... normally...
          if (examType == "A") msg = "Exam ended"; // ok.
          // we only want to update the prediction score for exam type B...
          // oh ok... the userscore is not updated over time but at run time normally...
          if (examType == "B") {
            // this is our concern...
            let total = 0;
            let totalQuestions = 0;
            // let
            // the issue is between here
            // one issue is that if I use keys for picking answers the score doesn't update...
            // so I'ld assume that key is making some errors
            // console.log(exams);
            exams.forEach((e, i) => {
              // we will mark each question naani
              // mark everything
              // console.log(e);
              let score = markAll(
                e.questions,
                e,
                submit,
                setExams,
                negativeMark
              ); // this should work.

              total += score;
              totalQuestions += e.questions.length;
              // after marking
              setExams((draft) => {
                let draftExam = draft.find((q) => q.id == e.id);
                draftExam.score = score; // makes sense? somehow...
              });
              // it's a little bit problematic to be honest...
              examBState.push({
                ...e,
                score: score,
              });

              // we hold a local variable to make sure things are workbg pretty fine
            });

            let percent = Math.floor((total / totalQuestions) * 100);

            tempScore = percent;

            setScoreColor(setColor(percent));
            // I just need to store the overall calculation shey you get...
            msg = "Your average score is " + percent + "%";
          }
          // postevents... easy peasy stuff shey you get...
          try {
            let postEvents = await postExamEvents(
              id,
              whichType,
              examType == "A" ? exams : examBState,
              setStreak,
              setPrediction,
              config,
              tempScore
            );

            if (postEvents) {
              // console.log(tempScore);
              if (examType == "B") {
                setScore(tempScore);
              }
              // console.log("hi")
              clearInterval(timer);
              setTimer(null);
              setLoading(false); // nice and easy
              setSubmit(true);
              alert(msg); // simple as abc...
            } else {
              setLoading(false);
              // but what will now happen...
              alert("An error occured, please try submitting again...");
            }
          } catch(err) {
            // console.log(err);
            alert(err.message);
            setLoading(false);
          }
        } 
      }
    }
    // works perfectly too... we move
    // alright...
    if (examType == "A" && (type == "prev" || type == "next"))
      markQuestion(
        type,
        examType,
        exam,
        mark(
          exam.questions[exam.current],
          submit,
          setExams,
          exam,
          negativeMark
        ),
        setScore,
        setScoreColor,
        setExams
      );

    // let's do the saving here...
  }

  let className = "";

  if (type == "prev") {
    className = "button";
  } else if (type == "next") {
    className = "button";
  } else {
    className = `button ${lightmode ? "submit-light" : "submit-dark"} ${
      loading ? "is-loading" : ""
    }`;
  }

  // nice and easy.

  // updating exam state is done here...
  // and write should be done in a debounced kind of way

  // I will just have to use scope for this thing shey thing....

  return (
    <button type="button" className={className} onClick={handleClick} id={type}>
      {type}
    </button>
  );
}

export default Button;
