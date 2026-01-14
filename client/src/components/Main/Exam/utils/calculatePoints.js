//  This is a code that runs
import { addData, getData } from "../../../../utils/indexedDB";
// Helps predict new score based on oldweight and all those stuffs...
function computeNewScore(
  oldWeight,
  oldScores, // List of up to 5 scores
  newScore,
  attempts,
  questionCount,
  exam
) {
  // Calculate the average of oldScores
  const oldScore = oldScores.reduce((a, b) => a + b, 0) / oldScores.length;

  // Non-linear scaling for old weight
  const scaledOldWeight = Math.pow(Math.min(oldWeight, 10), 1.5);

  // Dynamic new score weight based on the gap between the old and new scores
  const gap = Math.abs(newScore - oldScore);
  const dynamicNewWeight =
    newScore < 30 ? 1.5 : 2 + (Math.log10(gap + 1) > 10 ? 0.5 : 0.5);

  // Progression bands based on oldScore
  let progressWeight = 1;
  if (oldScore >= 50 && oldScore < 80) progressWeight = 0.8;
  if (oldScore >= 80) progressWeight = 0.6;

  // Capped attempts (max 25)
  const cappedAttempts = Math.min(attempts, 25);

  // Attempts handling
  const masteryBonus = cappedAttempts <= 5 ? (5 - cappedAttempts) * 1.5 : 0;
  const diminishingFactor = 1 / (1 + Math.max(0, cappedAttempts - 10) * 0.2);
  const improvement = newScore - oldScore;
  const stagnationPenalty = improvement < 5 && cappedAttempts > 15 ? 2 : 0;

  // Adjust for question count: Apply smaller weight for small tests (e.g., less than 5 questions)
  let smallTestPenalty = 1; // Apply penalty for small tests

  if (!exam) {
    // Do not penalize for exams... shey you get...
    smallTestPenalty = questionCount < 10 ? 0.5 : 1;
  }

  // First attempt adjustment (penalize excessively high first test scores)
  const firstAttemptPenalty = attempts === 1 ? (newScore < 50 ? 0.7 : 0.9) : 1;

  // Compute the new weight based on progress or stagnation
  let newWeight = oldWeight + (newScore > oldScore ? 0.5 : 0.1);

  // Combine scores with adjustments
  let combinedScore =
    (oldScore * scaledOldWeight +
      newScore *
        dynamicNewWeight *
        progressWeight *
        diminishingFactor *
        smallTestPenalty *
        firstAttemptPenalty) /
      (scaledOldWeight + dynamicNewWeight) +
    masteryBonus -
    stagnationPenalty;

  // Cap the final score at 100
  const finalScore = Math.min(combinedScore, 100);

  // // Update oldScores: Keep the latest 5 scores
  // const updatedOldScores = [...oldScores, newScore].slice(-5);

  return {
    newWeight: Number(newWeight.toFixed(2)), // Return the new weight
    score: Number(finalScore.toFixed(2)), // Return the final score
    // updatedOldScores,                       // Return the updated old scores
  };
}

// function computeNewScore(oldWeight, oldScore, newScore, attempts, questionCount) {
//   // Non-linear scaling for old weight (e.g., starts slow and gradually increases)
//   const scaledOldWeight = Math.pow(Math.min(oldWeight, 10), 1.5);

//   // Dynamic new score weight based on the gap between the old and new scores
//   const gap = Math.abs(newScore - oldScore);
//   const dynamicNewWeight = newScore < 30 ? 1.5 : 2 + (Math.log10(gap + 1) > 10 ? 0.5 : 0.5);

//   // Progression bands based on oldScore
//   let progressWeight = 1;
//   if (oldScore >= 50 && oldScore < 80) progressWeight = 0.8;
//   if (oldScore >= 80) progressWeight = 0.6;

//   // Capped attempts (max 25)
//   const cappedAttempts = Math.min(attempts, 25);

//   // Attempts handling
//   const masteryBonus = cappedAttempts <= 5 ? (5 - cappedAttempts) * 1.5 : 0;
//   const diminishingFactor = 1 / (1 + Math.max(0, cappedAttempts - 10) * 0.2);
//   const improvement = newScore - oldScore;
//   const stagnationPenalty = improvement < 5 && cappedAttempts > 15 ? 2 : 0;

//   // Adjust for question count: Apply smaller weight for small tests (e.g., less than 5 questions)
//   // Then I will need to know if it's exam mode or not.... but for now sha,,, let's still assume it normal...
//   const smallTestPenalty = questionCount <= 10 ? 0.5 : 1; // Apply penalty for small tests

//   // First attempt adjustment (penalize excessively high first test scores)
//   const firstAttemptPenalty = attempts === 1 ? (newScore < 50 ? 0.7 : 0.9) : 1;

//   // Compute the new weight based on progress or stagnation
//   let newWeight = oldWeight + (newScore > oldScore ? 0.5 : 0.1); // Increase weight if there's progress, minimal increase if stagnating
//   // console.log(newWeight)
//   // Combine scores with adjustments
//   let combinedScore = (
//     (oldScore * scaledOldWeight + newScore * dynamicNewWeight * progressWeight * diminishingFactor * smallTestPenalty * firstAttemptPenalty) /
//     (scaledOldWeight + dynamicNewWeight)
//   ) + masteryBonus - stagnationPenalty;

//   // Cap the final score at 100
//   const finalScore = Math.min(combinedScore, 100);

//   return {
//     newWeight: Number(newWeight.toFixed(2)), // Return the new weight
//     score: Number(finalScore.toFixed(2)),    // Return the final score
//   };
// }

// future purpose algorithm...
// function computeCappedScoreUpdated(oldWeight, oldScore, newScore, attempts, questionCount) {
//   // Non-linear scaling for old weight
//   const scaledOldWeight = Math.pow(Math.min(oldWeight, 10), 1.5);

//   // Dynamic new score weight based on gap
//   const gap = Math.abs(newScore - oldScore);
//   const dynamicNewWeight = 2 + (Math.log10(gap + 1) > 10 ? 0.5 : 0.5);

//   // Progression bands
//   let progressWeight = 1;
//   if (oldScore >= 50 && oldScore < 80) progressWeight = 0.8;
//   if (oldScore >= 80) progressWeight = 0.6;

//   // Capped attempts (max 25)
//   const cappedAttempts = Math.min(attempts, 25);

//   // Attempts handling
//   const masteryBonus = cappedAttempts <= 5 ? (5 - cappedAttempts) * 1.5 : 0;
//   const diminishingFactor = 1 / (1 + Math.max(0, cappedAttempts - 10) * 0.2);
//   const improvement = newScore - oldScore;
//   const stagnationPenalty = improvement < 5 && cappedAttempts > 15 ? 2 : 0;

//   // Penalty for small tests (less than 20 questions)
//   let smallTestPenalty = 0;
//   if (questionCount < 5) {
//     smallTestPenalty = 5; // High penalty for tests with fewer than 5 questions
//   } else if (questionCount < 10) {
//     smallTestPenalty = 3; // Moderate penalty for tests with fewer than 10 questions
//   } else if (questionCount < 20) {
//     smallTestPenalty = 1; // Light penalty for tests with fewer than 20 questions
//   }

//   // Combine scores with adjustments
//   let combinedScore = (
//     (oldScore * scaledOldWeight + newScore * dynamicNewWeight * progressWeight * diminishingFactor) /
//     (scaledOldWeight + dynamicNewWeight)
//   ) + masteryBonus - stagnationPenalty - smallTestPenalty; // Apply the penalty for small tests

//   // Cap final score at 100
//   return Number(Math.min(combinedScore, 100).toFixed(2));
// }

// this function is simple and interesting... more to come tho...

export async function calculatePoints(exams, type) {
  let analysis = analyze(exams); // Analyze exam data and get scores
  // console.log(analysis); // how to get....
  // nice and easy...

  // Fetch existing stats
  let oldStat = await getData("Stats", type);

  let updatedStats = []; // Array to store updated subjects

  // Iterate through the analysis map to update stats
  analysis.forEach((value, key) => {
    let [subjectName, topicName, exam] = key.split("-"); // Extract subject and topic
    // will be undefined in some case and
    // console.log(subjectName, topicName, exam);

    // Find the subject and topic in oldStat
    let subject = oldStat.find((o) => o.name === subjectName);
    if (!subject) return; // Skip if subject is not found

    let topic = subject.topics.find((t) => t.name === topicName);
    if (!topic) return; // Skip if topic is not found
    // since old score is not an array...
    topic.oldScores = stackAndQueue(
      value.score,
      topic.oldScores,
      topic.oldScore
    ); // this is the oldscore now
    // Compute the new progress for the topic
    let calculate = computeNewScore(
      topic.weight,
      topic.oldScores,
      value.score,
      topic.attempts,
      value.qty,
      exam
    ); // just in case the score fails

    // Update topic properties
    // this is where I m going to update the stuff
    // topic.lastAttempt = new Date(); // will store the date property...
    topic.oldScore = value.score; // let's skill keep data...
    topic.weight = calculate.newWeight; // Increment the weight // that's where the problem is... the weight is contributing a lot to the problem....lolz..
    topic.progress = calculate.score || 0; // Update progress
    topic.attempts += 1;
    topic.lastAttempt = new Date(); // this is the last attempted date...

    // Recalculate subject's overall progress as an average of all topic progress
    subject.progress = Number(
      (
        subject.topics.reduce((sum, t) => sum + t.progress, 0) /
        subject.topics.length
      ).toFixed(2)
    ); // those ones are already in percent...

    // Increment the version
    subject.version = parseFloat((subject.version + 0.1).toFixed(1)); // Ensures precision

    // Avoid duplicating subjects in the updated stats
    if (!updatedStats.some((s) => s.name === subjectName)) {
      updatedStats.push(subject);
    }

    // console.log(calculate)
  });

  await addData("Stats", type, updatedStats); // it has keypath before don't stress me abeg...

  // console.log(updatedStats);
}

export function stackAndQueue(newVal, list, oldScore) {
  if (!list) {
    // this is to include prev score and add new score to set things up...
    return [oldScore || 0, newVal]; // nice stuff sha.... it's not easy.. honestly... I will still prefer to learn programming than web development still
  }
  if (list.length < 5) {
    return list.concat(newVal); //
  } else {
    list.shift();
    return list.concat(newVal);
  }
}

function analyze(list) {
  const analysis = new Map();

  for (const l of list) {
    if (l.name !== "Multiple" && l.topic !== "Exam") {
      // Simple case: Directly add the topic
      const key = `${l.name}-${l.topic}`;
      analysis.set(key, [...(analysis.get(key) || []), ...l.questions]);
    } else {
      // Complex case: Exam or Multiple topics
      if (l.topic == "Exam") {
        // Treat as a topic first then analyze...
        const key = `${l.name}-${l.topic}`;
        analysis.set(key, [...(analysis.get(key) || []), ...l.questions]);
      }
      // // then analyze....
      for (const q of l.questions) {
        const key = `${q.subject}-${q.topic}-exam`; // append exam to it sha....
        analysis.set(key, [...(analysis.get(key) || []), q]);
      }
    }
  }

  // Calculate scores for each key
  for (const [key, questions] of analysis.entries()) {
    const score = Number(mark(questions)); // Assuming `mark` calculates score
    analysis.set(key, { qty: questions.length, score });
  }

  return analysis;
}

function mark(questions) {
  let score = 0;
  for (let q of questions) {
    if (!q.userAnswer) continue;
    if (q.ans == q.userAnswer) score += 1;
  }
  // score will be the percentage
  return ((score / questions.length) * 100).toFixed(0); // so that we will get the percentage
}

export async function calculateUTMEPoints() {
  let stats = await getData("Stats", "UTME");

  if (stats.length) return stats.reduce((a, b) => a + b.progress, 0).toFixed(0);
  // simple as abc... thank you...
  else return 0;
}
