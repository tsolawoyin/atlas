export function nav(type, exam, setExams) {
  if (type == "prev") {
    // this is the basic op
    // this way it won't pass o
    setExams((draft) => {
      let draftExam = draft.find((e) => e.id == exam.id);
      if (draftExam.current > 0) {
        draftExam.current -= 1;
      }
    });
  } else if (type == "next") {
    setExams((draft) => {
      let draftExam = draft.find((e) => e.id == exam.id);
      if (draftExam.current < draftExam.questions.length - 1) {
        draftExam.current += 1; // cool...
      }
    });
  }
}
// easily this way I can focus on which part of the code is causing errors.
export function markAll(questions, exam, submit, setExams, negativeMark) {
  // this is not easy mehn.
  let n = [];
  for (let q of questions) {
    n.push({ ...q });
  }

  let score = 0;
  // modified algorithm
  for (let q of n) {
    // things worked as expected...
    // makes sense. cool and nice. makes sense.
    if (q.userAnswer && !q.marked && !submit) {
      // q has been marked somehow
      if (q.ans == q.userAnswer) score += 1;
      else score -= negativeMark; // cool. that's all. that where we need it...
    }
    // then update q
    q.marked = true; // makes sense????
  }

  setExams((draft) => {
    let draftExam = draft.find((e) => e.id == exam.id);
    draftExam.questions = n;
  });

  return score;
}

export function mark(question, submit, setExams, exam, negativeMark) {
  if (question.userAnswer && !question.marked && !submit) {
    // update marked property
    // this is a huge problem. the rerendering stuff is not allowing everything to mark successfully
    // we will need some modification here.
    // huge modifcation
    // let's sleep and let's let the solution wake up with us as usual.
    // honestly, food is good for the body
    // as in really really good.
    setExams((draft) => {
      let draftExam = draft.find((e) => e.id == exam.id);
      let quest = draftExam.questions[exam.current]; // this is where the trouble is...
      quest.marked = true;
    });
    // user have answered and the question isn't marked yet
    if (question.ans == question.userAnswer) return 1;
    else return negativeMark * -1; // we offset it by this amount
  }
  return 0;
}

export function markQuestion(
  type,
  examType,
  exam,
  mark,
  setScore,
  setScoreColor,
  setExams
) {
  if (type == "prev" || type == "next") {
    // console.log("hi")
    // console.log(mark);
    // that is all, it won't mark if exam type isn't A
    // this only have effect on the score element... makes sense
    if (examType == "A") {
      let score = exam.score + mark;
      let percent = (score / exam.questions.length) * 100;
      // then update exam scores
      // setScore
      setScore(Number(percent.toFixed(2)));
      // write a dedicated function for this
      setScoreColor(setColor(percent)); // hmm
      // setExams
      setExams((draft) => {
        let draftExam = draft.find((e) => e.id == exam.id);
        draftExam.score = score; // makes sense?
      });
      // that's all...
    }
  }
}

export function setColor(percent) {
  if (percent < 40) {
    // 0 -> 39
    return "low";
  } else if (percent < 60) {
    // 40 -> 59
    return "mid-low";
  } else if (percent < 80) {
    // 60 -> 80
    return "mid-level";
  } else if (percent <= 99) {
    return "high-level";
  } else if (percent == 100) {
    return "premium";
  }
}
