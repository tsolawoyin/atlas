import { Parser } from "html-to-react";
import Energy from "../../../assets/images/energy.png"; // nice and easy...
import { useState } from "react";

function Figure({ question }) {
  // this is for future purpose
  // console.log(question);
  // let [url, setDisplay] = useState(question.img);
  return (
    <figure className="question-image">
      <img src={question.img} alt="" />
    </figure>
  );
}

function Question({ exam, setExams, type, submit, pressed, setPressed }) {
  // other modification depends on type... shey you get. we come back to that later...
  let question = exam.questions[exam.current];
  // makes sense... cool
  // we update answer this way... just update answer to value. thank you so much.
  function updateAnswer(value) {
    if (!question.marked || type != "A") {
      setExams((draft) => {
        let draftExam = draft.find((e) => e.id == exam.id);
        // we get the draft exam
        // we get the current question
        let quest = draftExam.questions[exam.current];
        // update user answer that's all...
        quest.userAnswer = value; // so this is what I need to manipulate...
        setPressed(null);
      });
    }
  }
  // makes sense....
  function handleChange(e) {
    updateAnswer(e.target.value); // first and foremost
  }
  // which means I can easily update it here...
  // this is if key is pressed...
  // if not pressed this will not work
  if (pressed) {
    // updateAnswer(pressed); // lowkey stuff... easy peasy
    // console.log(pressed)
    updateAnswer(pressed); // be like say e work o.... hmmmmmm
    // e work seriously....
    // omo... this thing work o..
  }
  // this is insanely easy. Oga o.
  return (
    <div id="question">
      {/* it's best to have questions above... shey you get... */}
      {/* we will css it when we are able to solve it's problem... */}
      {/* imagine... lolzzz... */}
      {/* it's an easy check stuff. if question.img... then just go and get the image for us... simple as abc... no long thing sha... */}
      <Figure question={question}/>
      {/* the rest is just design */}
      {question.info ? (
        <p className="info">{Parser().parse(question.info)}</p>
      ) : null}
      <p className="question">
        <span>{question.id}. </span>
        {/* one needs information to know what's up exactly here... */}
        <span>{Parser().parse(question.question)}</span>
        {/* it will just not be inside span that's all... imagine... lol */}
      </p>

      <div className="options">
        {question.options.map((option, i) => {
          let mapped = { 0: "A", 1: "B", 2: "C", 3: "D", 4: "E" };
          // checked stuff
          return (
            <label
              key={option}
              style={{
                display: "block",
              }}
            >
              <input
                type="radio"
                name={"q" + question.id}
                id={option}
                value={mapped[i]}
                onChange={handleChange}
                checked={
                  // other conditions needs to be here as well...
                  question.userAnswer && question.userAnswer == mapped[i]
                    ? true
                    : false
                }
              />{" "}
              {question.marked && (type == "A" || submit) ? ( // question is marked
                question.userAnswer == mapped[i] ||
                question.ans == mapped[i] ? (
                  question.ans == question.userAnswer ? ( // if both match
                    <span className="has-text-success">
                      {Parser().parse(option)}
                    </span>
                  ) : question.ans == mapped[i] ? (
                    <span className="has-text-success">
                      {Parser().parse(option)}
                    </span>
                  ) : question.userAnswer == mapped[i] ? (
                    <span className="has-text-danger">
                      {Parser().parse(option)}
                    </span>
                  ) : (
                    <span>{Parser().parse(option)}</span>
                  )
                ) : (
                  <span>{Parser().parse(option)}</span>
                )
              ) : (
                <span>{Parser().parse(option)}</span>
              )}
            </label>
          );
        })}
      </div>
      <div className="content remark">
        {(type == "A" && question.marked) ||
        (type == "A" && submit) ||
        (type == "B" && submit)
          ? Parser().parse(question.remark)
          : null}
      </div>
    </div>
  );
  // we need options as well
  // and I need to generate the make the options random...
}

export default Question;
