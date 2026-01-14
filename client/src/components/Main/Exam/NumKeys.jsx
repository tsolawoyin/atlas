function NumKeys({
  qty = 50,
  setExams,
  exam,
  type = "A",
  submit,
  lightmode,
  numKey,
}) {
  // helps generate key
  // archive function
  // maybe we should do the saving here....
  function generateKeys2() {
    let arr = [];
    for (let i = 0; i < exam.questions.length; i++) {
      arr.push(i); // makes sense?
    }
    return arr.map((e, i) => {
      let color = "";
      let current = exam.current;
      let addition = "";
      if (type == "A" || submit) {
        if (exam.questions[i].userAnswer && exam.questions[i].marked) {
          if (exam.questions[i].userAnswer == exam.questions[i].ans) {
            color = `${lightmode ? "correct-light" : "correct-dark"}`;
          } else {
            color = `${lightmode ? "incorrect-light" : "incorrect-dark"}`;
          }
        }
      } else {
        // done for keys....
        if (exam.questions[i].userAnswer) {
          // if user have answered. makes sense?
          color = `${lightmode ? "correct-light" : "correct-dark"}`;
        }
      }

      if (i == current) {
        color = `is-warning ${lightmode ? "light-current" : "dark-current"}`;
        addition = "current-numkey";
        numKey.current = i; // cool...
      }

      return (
        <button
          onClick={handleClick}
          // ref={i == current ? numKey : null}
          className={`button ${color} ${addition}`}
        >
          {i + 1}
        </button>
      );
    });
  }

  function handleClick(e) {
    setExams((draft) => {
      let f = draft.find((e) => e.id == exam.id);
      f.current = Number(e.target.textContent - 1);
    });
  }
  // numkeys also requires styling...
  return <div id="numkeys">{generateKeys2()}</div>;
}

export default NumKeys;