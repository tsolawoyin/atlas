import { setColor } from "./utils/helpers";

function ExamKeys({
  name,
  setCurrent,
  posn,
  current,
  setScore,
  exams,
  examType = "A",
  setScoreColor,
  submit,
}) {
  // here current is true or false
  // here we will set up stuff
  // so we can control a lot of things here with this kind of information
  function handleClick(e) {
    setCurrent((draft) => {
      draft.exam = e.target.id.split("-")[0]; // simple.
    });

    if (examType == "A" || submit) {
      let curr = exams[e.target.id.split("-")[0]];
      let score = curr.score; // get prev exam score?
      let percent = (score / curr.questions.length) * 100;

      setScore(Number(percent.toFixed(2)));

      setScoreColor(setColor(percent));
    }
  }

  return (
    <button
      type="button"
      className={`button is-small ${current ? "is-dark current" : ""}`}
      id={posn + "-exam"}
      onClick={handleClick}
      style={{
        paddingLeft: "2em",
      }}
    >
      {name}
    </button>
  );
}

export default ExamKeys

// The whole thing needs confirm refactoring...