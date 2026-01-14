// import { globalStats } from "../../../../utils/globalStates";
import { getData, addData } from "../../../../utils/indexedDB";
import { differenceInDays } from "date-fns";
import { stackAndQueue } from "./calculatePoints";

const defaultDecayConstant = 0.005;
// Yes let it be like this. Easy peasy. Nice and easy.

export async function forgetModel() {
  try {
    let job = handleSubjects(await getData("Stats", "UTME"));
    localStorage.setItem("lastDecay", new Date());
    return job;
    // nice and easy...
  } catch (err) {
    throw new Error(err);
  }
}

function handleSubjects(stats) {
  // Stats is a list normally. So moving on...
  let newStat = []; // nice and easy

  for (let { name, progress, version, topics } of stats) {
    let newObj = { name, progress, version };
    let computedTopics = handleTopics(topics);
    let newProgress = computeAverage(computedTopics);
    newObj.topics = computedTopics;
    newObj.progress = newProgress; // Hmm. A lot of lapses sef.
    newStat.push(newObj); // completed
  }
  // console.log(newStat);
  return newStat;
}

function handleTopics(topics) {
  let newTopicList = [];

  for (let {
    name,
    attempts,
    progress,
    weight,
    oldScore,
    oldScores,
    lastAttempt,
  } of topics) {
    let newTopic = {
      name,
      attempts,
      weight,
      progress,
      lastAttempt,
      oldScore,
      oldScores,
    };
    let newProgress = handleTopic(attempts, progress, lastAttempt);
    newTopic.progress = newProgress; // so handleTopic must return an Int or Float
    // if (!lastAttempt || (attempts == 0 && progress == 0)) {
    //   newTopic.oldScores = stackAndQueue(
    //     newProgress,
    //     newTopic.oldScores,
    //     newTopic.oldScore
    //   );
    // }
    // console.log()
    if (!lastAttempt) newTopic.lastAttempt = new Date(); // nice and easy...
    newTopicList.push(newTopic); // Nice and easy
  }

  return newTopicList; // Don't worry each one will do its job properly...
}

function handleTopic(attempts, progress, lastAttempt) {
  // console.log(lastAttempt);
  if (!lastAttempt) {
    return progress; // don't do anything... nice and easy.
  }

  if (attempts == 0 || progress == 0) {
    return progress;
  }

  let lastDate = new Date(lastAttempt);
  let lastDecay = new Date(localStorage.getItem("lastDecay"));
  let currentDate = new Date();
  let timeDifference = differenceInDays(currentDate, lastDate);

  if (differenceInDays(new Date(), lastDecay) == 0) {
    return progress; // do not any further computation. Just stop here...
  }

  let res = computeNewProgress(timeDifference, progress);
  // console.log(res)
  return res;
}

// this is if there is nothing... Let's test it...
export function computeNewProgress(timeDifference, progress) {
  const decayConstant = defaultDecayConstant;
  const newProgress = progress * Math.exp(-decayConstant * timeDifference);
  return Math.max(0, newProgress.toFixed(2)); // Ensure progress doesn't go below 0
}

function computeAverage(topics) {
  return Number(
    (topics.reduce((a, c) => a + c.progress, 0) / topics.length).toFixed(2)
  ); // balanced like that...
}
