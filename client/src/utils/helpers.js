import { v4 as uuidv4 } from "uuid"; // we will need this stuff... shey you get...
import { cloneDeep } from "lodash";
import { updateDocument } from "./firebase";

import { differenceInCalendarDays } from "date-fns";
// let testcase = `<h3><span class="ql-formula" data-value="\sqrt{2\times5^3}">﻿<span contenteditable="false"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msqrt><mrow><mn>2</mn><mo>×</mo><msup><mn>5</mn><mn>3</mn></msup></mrow></msqrt></mrow><annotation encoding="application/x-tex">\sqrt{2\times5^3}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.04em; vertical-align: -0.1266em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.9134em;"><span class="svg-align" style="top: -3em;"><span class="pstrut" style="height: 3em;"></span><span class="mord" style="padding-left: 0.833em;"><span class="mord">2</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mord"><span class="mord">5</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.7401em;"><span class="" style="top: -2.989em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span></span></span><span class="" style="top: -2.8734em;"><span class="pstrut" style="height: 3em;"></span><span class="hide-tail" style="min-width: 0.853em; height: 1.08em;"><svg width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
// c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
// c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
// c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
// s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
// c69,-144,104.5,-217.7,106.5,-221
// l0 -0
// c5.3,-9.3,12,-14,20,-14
// H400000v40H845.2724
// s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
// c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
// M834 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1266em;"><span class=""></span></span></span></span></span></span></span></span></span>﻿</span> </h3><p><br></p><ul><li>a</li><li>b</li><li>c</li><li>d</li></ul><p><br></p><p>A</p><p><br></p><p>There is no explanation for this question yet.</p>`;
// helps to calculate the margin top of the main body from the header.
export function calculateMargin(setMarginTop) {
  const header = document.querySelector("#header");
  if (header) {
    const headerHeight = header.getBoundingClientRect().height;
    setMarginTop(headerHeight); // ok...
  }
}

export function parseStrToObject(html) {
  const delimeter = "<p><br></p><p><br></p>";

  let arr = html.split(delimeter); // nice and easy

  if (arr.length == 4) {
    return parseStruct(arr);
  } else if (arr.length == 5) {
    // console.log("hi")
    let info = arr[0];
    let rest = parseStruct(arr.slice(1));
    rest.info = info;

    return rest;
  }
}

// makes sense and easy... nice one.....

function parseStruct(list) {
  let objStruct = new Object(null);

  try {
    list.forEach((e, i) => {
      if (i == 0) {
        // question
        objStruct.question = parseQuestion(e); // I don't think I need any form of parsing jare...
      } else if (i == 1) {
        // options
        objStruct.options = parseOptions(e); // hmm
      } else if (i == 2) {
        objStruct.ans = parseAnswer(e);
      } else if (i == 3) {
        objStruct.remark = e; // just dump in inside... we don't need anything special here...
        // remark well let's assume e is available for now sha... shey you get...
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message); // we will keep throwing the error shey you get...
  }
  // console.log(objStruct);
  return objStruct;
}
// completed too....
function parseQuestion(str) {
  // console.log(str);
  // nice and easy bruv...
  // there can't be any list here... shey u get... no need to handle list...
  let questionList = str.split("<p><br></p>");

  let strRes = "";
  // all this sef doesn't seems to be needed at all... Imagine....
  // why I am parsing it??? it doesn't seem necessary or what you think.....
  // then I will use p now normally....
  for (let q of questionList) {
    // const pattern = /<\s*([a-zA-Z0-9]+)[^>]*>(.*?)<\/\1>/g;
    const pattern = /<p\b[^>]*>([\s\S]*?)<\/p>/g;

    let match;

    let subStr = "";

    while ((match = pattern.exec(q)) !== null) {
      subStr += `${match[1]}<br />`; // first division to divide it shey you get...
    }

    strRes += `${subStr}<br />`;
  }

  return strRes.slice(0, strRes.length - 12); // great easy peasy... thank you...
}

function parseOptions(str) {
  // we just parse the option and return it normally.... we are even through parsing it....
  let match = str.match(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/(ul|ol)>/);

  let list = match[2];

  list = list.match(/<li\b[^>]*>([\s\S]*?)<\/li>/g);

  let options = [];

  for (let l of list) {
    options.push(l.match(/<li\b[^>]*>([\s\S]*?)<\/li>/)[1]);
  }

  return options;
}

function parseAnswer(str) {
  let ans = str.match(/<p>([A-Ea-e])<\/p>/)[1];
  if (ans.length == 0) throw new Error("An answer is required!");
  return ans;
}

// !!!
// function parseRemark(str) {} // this one is not needed at all....

function parseAdditionalInfo(str) {}

//Let's test this function to see if it works properly...
// export function parseStrToObject(html) {
//   const regexes = {
//     question: /<h3\b[^>]*>([\s\S]*?)<\/h3>/,  // Non-greedy match for the question
//     options: /<(ul|ol)\b[^>]*>([\s\S]*?)<\/(ul|ol)>/, // Match options list
//     answer: /<p>([A-Ea-e])<\/p>/, // Answer match
//     remark: /<p>(.+?)<\/p>/g, // Match remark paragraphs
//     whiteSpace: /^<p><br><\/p>/, // Match white space
//     list: /<li\b[^>]*>([\s\S]*?)<\/li>/g, // Match list items
//   };

//   let struct = {};

//   // Loop to parse HTML
//   while (html.length) {
//     let match = null;

//     // Question
//     if (match = html.match(regexes.question)) {
//        // console.log("hmm")
//       let str = "";
//       match = html.match(regexes.question)[1]; // => string
//       html = html.slice(match.length); // => rest
//       // console.log(match)

//       // just in case there is nothing else to match
//       let specialRegex = /<h3>(.+?)<\/h3>/; // greedy greedy;
//       // nice one
//       // but how has it been working so far???
//       while (match.match(specialRegex)) {
//         let match2 = match.match(specialRegex);
//         str += match2[1] + "<br/>";
//         match = match.slice(match2[1].length);
//       }
//       // if str is undefined and match has a value, set str to match
//       if (!str && match) str = match + "<br />"

//       struct.question = str;

//     // White Space
//     } else if (match = html.match(regexes.whiteSpace)) {
//       html = html.slice(match[0].length); // Skip the white space

//     // Options
//     } else if (match = html.match(regexes.options)) {
//       const optionsHtml = match[2];
//       const options = [];
//       let optionMatch;

//       // Extract list items
//       while (optionMatch = regexes.list.exec(optionsHtml)) {
//         options.push(optionMatch[1]);
//       }

//       struct.options = options;
//       html = html.slice(match[0].length); // Remove matched portion

//     // Answer
//     } else if (match = html.match(regexes.answer)) {
//       struct.ans = match[1].toUpperCase(); // Normalize answer (e.g., 'a' -> 'A')
//       html = html.slice(match[0].length); // Remove matched portion

//     // Remark
//     } else if (match = html.match(regexes.remark)) {
//       struct.remark = match[0].replace(regexes.remark, '$1').replace(/<br\s*\/?>/g, '<br/>'); // Clean and handle remarks
//       html = html.slice(match[0].length); // Remove matched portion

//     } else {
//       break; // If nothing matches, exit the loop
//     }
//   }

//   return struct;
// }
// kept for future purpose....

// console.log(parseStrToObject(testcase));

export function parseQuestionToStr(question) {
  if (!question)
    return `
  <p>Q</p>
  <br />
  <br />
  <ul>
    <li>a<li>
    <li>b<li>
    <li>c<li>
    <li>d<li>
  </ul>
  <br />
  <br />
  <p>A</p>
  <br />
  <br />
  <p>There is no explanation for this question yet.</p>
  `;
  // normally sha just return it as is...
  // maybe this one needs extra parsing then....
  // not just inserting it into just anyhow stuff
  // just have to be thinking like crazy...
  return `
  ${question.info ? `<p>${question.info}</p><br><br>` : ""}
  ${buildQuestion(question.question)}
  <br/ >
  <br />
  <ul>
    ${question.options.map((e) => `<li>${e.trim()}</li>`).join("")}
  </ul>
  <br />
  <br />
  <p>${question.ans}</p>
  <br />
  <br />
  ${
    question.remark
      ? question.remark
      : "<p>There is no explanation for this question yet.</p>"
  }
  `;
}
// parse the structure as it is in stuff... nice and easy
function buildQuestion(str) {
  // for single stuff, we have single line break
  // in essence sha we just break it into series of line breaks sha and forget the rest
  return str.split("<br><br>").reduce((a, b) => a + `<p>${b}</p>`, ""); // simple as abc
}

export function choose(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

const mainWord = (word, statement) => {
  // let's think of how to make this work...
  let posn = statement.search(word);
  if (posn != -1) {
    let fPart = statement.slice(0, posn);
    let sPart = statement.slice(posn + word.length);
    return `${fPart}<span class="main-word"><em><u>${word}</u></span>${sPart}`;
  } else return statement;
};

export function shuffle(question) {
  let choice = { ...question };
  // it takes three functions to shuffle up object. someone else might do it with one line. someone like marijn
  // convert list of options to object with the one having the correct ans set to true while others are set to false
  function convertOptToObj(options, answer) {
    let opt = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
    };

    let newOptionList = []; // this holds our optionobjlist

    for (let i = 0; i < options.length; i++) {
      // consoele.log
      let optionObj = new Object(null);

      optionObj.main = options[i]; // object.main is just the option itselff

      if (opt[i] == answer) {
        // if the option is the answer, set to true
        optionObj.answer = true;
      } else {
        optionObj.answer = false; // otherwise set to false
      }

      newOptionList.push(optionObj); // pushing everything
    }
    return newOptionList; // this will surely work...
  }

  // alright time to shuffle up
  // this function takes the output of convertOptToObj function and shuffle it up
  function shuffleOptions(options) {
    let newArr = new Array();
    let optionWords = []; // this is to check for duplicate
    // inf looop checker
    let count = 0;
    while (newArr.length != options.length) {
      if (count > 500) {
        console.log("there is a problem!!!!!!");
        break;
      }
      // now let's work on this stuff
      let choice = choose(options);
      if (!optionWords.includes(choice.main)) {
        newArr.push(choice);
        optionWords.push(choice.main);
      }
      // inf loop checker
      count += 1;
    }
    return newArr; // works as need...
  }

  // now let's do the last part...
  // the last part is about converting back to normal...
  // this function takes the output of the shuffleOption function

  function convertToList(options) {
    // alright, let's continue
    let resObj = {
      options: [],
      answer: null,
    };

    let opt = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
    };

    for (let i = 0; i < options.length; i++) {
      resObj.options.push(options[i].main);
      if (options[i].answer) {
        // if it is the answe
        resObj.answer = opt[i]; // balanced
      }
    }

    return resObj;
  }

  let resObject = convertToList(
    shuffleOptions(convertOptToObj(choice.options, choice.ans))
  );

  // set the option to the new shuffled stuff
  choice.options = resObject.options;
  choice.ans = resObject.answer;

  // set the answer to the same thing as well
  // job done and complete. thank you
  // now everything is working perfectly...
  // testing function
  // console.log(convertOptToObj(this.currentQuestion.options, this.currentQuestion.ans));
  // everything is making perfect sense to me now..
  // correcto
  return choice;
}

const { A, B, C, D, E, c } = { A: "A", B: "B", C: "C", D: "D", E: "E", c: "C" };

// fetch questions and sort it...
// so let's just do it like that. one big string. shey get.
// so let's make it like that.
// shey you get

// test objects from config page

// let test = [
//   // let's work with this one first...
//   {
//     id: "fsjksjkrjkjkdjskjd",
//     name: "English",
//     qty: 1,
//     selected: false,
//     subject: "English",
//     topic: "Antonyms", // Ok, topic will be Exam instead of Antonym which makes it easy to work with...
//     type: "single",
//   },
//   // this config stuff is important...
//   {
//     id: "skdlkrewew",
//     name: "Multiple",
//     qty: 24,
//     selected: false,
//     subject: [
//       {
//         id: "fsjksjkrjkjkdjskjd",
//         name: "English",
//         qty: 6,
//         selected: false,
//         subject: "English",
//         topic: "Antonyms",
//         type: "single",
//       },
//       {
//         id: "fsjksjkrjkjkdjskjd",
//         name: "English",
//         qty: 5,
//         selected: false,
//         subject: "English",
//         topic: "Antonyms",
//         type: "single",
//       },
//     ],
//     topic: 2,
//     type: "multiple",
//   },
// ];

// expected return object
// each question should hold information about the subject and topic it's from actually...
// let res = {
//   id: "fjskl9e89",
//   name: "Biology",
//   topic: "Cell",
//   current: 0,
//   score: 0,
//   questions: [
//     {
//       id: 1,
//       question: "Which of the following is characteristic of the animal cell?",
//       options: [
//         "presence of chloroplasts",
//         "Possession of a cellulose cell wall",
//         "Absence of large vacuoles",
//         "Presence of large vacuoles",
//         "Presence of chromosomes",
//       ],
//       ans: "C",
//       remark:
//         "Animal and plant cells have vacoules but the vacoule of animal cells are small, unlike the vacoules of plant cells which is large.",
//     },
//     {
//       id: 2,
//       question: "The vacuole of a plant cell is:",
//       options: [
//         "A large empty space",
//         "Smaller than that of an animal cell",
//         "Filled with air",
//         "An ordinary vacuum",
//         "Surrounded by a membrane",
//       ],
//       ans: "E",
//       remark:
//         "The vacoule of a plant cell is surrounded by a membrane called <strong>Tonoplast</strong>",
//     },
//     {
//       id: 3,
//       question:
//         "The part of the cell solely responsible for respiration is the:",
//       options: [
//         "Nucleus",
//         "Nucleolus",
//         "Mitochondria",
//         "Golgi apparatus",
//         "Endoplasmic reticulum",
//       ],
//       ans: "C",
//       remark:
//         "Mitochodria is the power house of the cell which is responsible for respiration => the breakdown of glucose to give energy in form of ATP",
//     },
//     {
//       id: 4,
//       question:
//         "Which of these combinations is common to plant and animal cells?",
//       options: [
//         "Centriole, middle lamella, Golgi bodies, mitochondrion",
//         "Cytoplasm, sap vacuole, starch grains, leucoplasts",
//         "Plasma membranes, chromosome, mitochondria, lysosomes",
//         "Nucleus, nucleolus, cellulose cell wall, endoplasmic reticulum",
//         "Cytoplasm, centriole, cell wall, nucleolus",
//       ],
//       ans: "C",
//       remark:
//         "Only animal cells possess centriole, and only plant cells possess chloroplast, sap vacoule, and cell wall.",
//     },
//     {
//       id: 5,
//       question: "Where is energy produced in a cell?",
//       options: [
//         "Nucleus",
//         "Nucleolus",
//         "Lysosomes",
//         "Chloroplast",
//         "Mitochondria",
//       ],
//       ans: "E",
//       remark: "mitochondria is always associated with energy production",
//     },
//     {
//       id: 6,
//       question:
//         "Which of the following cell constituents is NOT common to both plants and animals?",
//       options: [
//         "Mitochondria",
//         "Chloroplasts",
//         "Ribosomes",
//         "Golgi apparatus",
//         "Vacuoles",
//       ],
//       ans: "B",
//       remark:
//         "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
//     },
//     {
//       id: 6,
//       question:
//         "Which of the following cell constituents is NOT common to both plants and animals?",
//       options: [
//         "Mitochondria",
//         "Chloroplasts",
//         "Ribosomes",
//         "Golgi apparatus",
//         "Vacuoles",
//       ],
//       ans: B,
//       remark:
//         "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
//     },
//     {
//       id: 6,
//       question:
//         "Which of the following cell constituents is NOT common to both plants and animals?",
//       options: [
//         "Mitochondria",
//         "Chloroplasts",
//         "Ribosomes",
//         "Golgi apparatus",
//         "Vacuoles",
//       ],
//       ans: B,
//       remark:
//         "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
//     },
//     {
//       id: 6,
//       question:
//         "Which of the following cell constituents is NOT common to both plants and animals?",
//       options: [
//         "Mitochondria",
//         "Chloroplasts",
//         "Ribosomes",
//         "Golgi apparatus",
//         "Vacuoles",
//       ],
//       ans: B,
//       remark:
//         "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
//     },
//     {
//       id: 6,
//       question:
//         "Which of the following cell constituents is NOT common to both plants and animals?",
//       options: [
//         "Mitochondria",
//         "Chloroplasts",
//         "Ribosomes",
//         "Golgi apparatus",
//         "Vacuoles",
//       ],
//       ans: B,
//       remark:
//         "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
//     },
//     {
//       id: 6,
//       question:
//         "Which of the following cell constituents is NOT common to both plants and animals?",
//       options: [
//         "Mitochondria",
//         "Chloroplasts",
//         "Ribosomes",
//         "Golgi apparatus",
//         "Vacuoles",
//       ],
//       ans: B,
//       remark:
//         "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
//     },
//     {
//       id: 6,
//       question:
//         "Which of the following cell constituents is NOT common to both plants and animals?",
//       options: [
//         "Mitochondria",
//         "Chloroplasts",
//         "Ribosomes",
//         "Golgi apparatus",
//         "Vacuoles",
//       ],
//       ans: B,
//       remark:
//         "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
//     },
//     {
//       id: 6,
//       question:
//         "Which of the following cell constituents is NOT common to both plants and animals?",
//       options: [
//         "Mitochondria",
//         "Chloroplasts",
//         "Ribosomes",
//         "Golgi apparatus",
//         "Vacuoles",
//       ],
//       ans: B,
//       remark:
//         "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
//     },
//     {
//       id: 6,
//       question:
//         "Which of the following cell constituents is NOT common to both plants and animals?",
//       options: [
//         "Mitochondria",
//         "Chloroplasts",
//         "Ribosomes",
//         "Golgi apparatus",
//         "Vacuoles",
//       ],
//       ans: B,
//       remark:
//         "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
//     },
//     {
//       id: 6,
//       question:
//         "Which of the following cell constituents is NOT common to both plants and animals?",
//       options: [
//         "Mitochondria",
//         "Chloroplasts",
//         "Ribosomes",
//         "Golgi apparatus",
//         "Vacuoles",
//       ],
//       ans: B,
//       remark:
//         "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
//     },
//   ],
// };

// please note, questions must always be random
// and questions must always be shuffled.
// no option for anybody.
// if you are not interested in using boots, no problems
// use others. thank you.

// console.log(Questions);
// now let's start work...
// no deleting of comments o. ehnehn
// db -> object...
// config -> list
// working properly, so it seems...
// we detect other errors later...
// it's time to start some async stuff
export default function fetchQuestions(db, config) {
  let questionList = config.map((e) => {
    // where e reps each config file...
    if (e.type == "single") return normal(db, e);
    else return multiple(db, e);
  });

  return questionList;

  // we simply work on it for each..
  // we need a function that helps fetch question for each type shey you get
}
// for getting questions for normal types
// given a question db and config return random and shuffle questions... thanks.
// this is very straight forward an easy...
// but it seems we might need repacking for some questions.
// but everything can be done here. normally
// that's all for now...
function normal(db, config) {
  // yeah it's still normal normally....
  let question = db.find((e) => e.subject == config.name); // this will

  let randomChoices = []; // nice and easy...

  if (config.topic == "Exam") {
    // this is for the case of exam...
    randomChoices = exam(question, config.qty); // go fetch general questions for us
  } else {
    let topic = question.questions.find((e) => e.topic == config.topic);

    let qty =
      config.qty <= topic.questions.length
        ? config.qty
        : topic.questions.length;
    // console.log(question)

    for (let i = 0; i < qty; i++) {
      let choice = choose(topic.questions);
      // we find it in random choices to see if it's there to ensure duplication is not present
      // we have our choice already, so let's find it if it's not choosen before
      // hmm
      if (!choice.id) choice.id = uuidv4();
      // if id already choosen or choice is notVisible, try to choose another one...
      if (randomChoices.find((e) => e.id == choice.id) || choice.notVisible) {
        // console.log("hi")
        let trial = 0;
        // discard it and pick another one
        while (true) {
          // just keep doing for now
          if (trial >= qty + 1) {
            // try 1000 times more. lolzzz...
            console.log("problematic");
            break; // that's enough
          }
          choice = choose(topic.questions);

          if (randomChoices.find((e) => e.id == choice.id) || choice.notVisible) {
            trial += 1; // try again...
          } else {
            choice = shuffle(choice); // shuffle up the options... similarly here as well.
            choice.topic = config.topic;
            choice.subject = config.subject;

            // console.log(topic.topic)

            if (topic.topic == "Antonyms") {
              // console.log("called....")
              choice.info = `<p>Choose the word opposite in meaning to the italicized word</p>`;
            }
            if (topic.topic == "Synonyms") {
              choice.info = `<p>Choose the word nearest in meaning to the italicized word</p>`;
            }

            if (choice.main) {
              // make sharp modification
              choice.question = mainWord(choice.main, choice.question);
            }

            randomChoices.push(choice);
            break; // that's enough
          }
        }
      } else {
        choice = shuffle(choice); // since shuffling is important, we just append topic and subject after shuffling...
        choice.topic = config.topic;
        choice.subject = config.subject;

        if (topic.topic == "Antonyms") {
          console.log("called....");
          choice.info = `<p>Choose the word opposite in meaning to the italicized word</p>`;
        }
        if (topic.topic == "Synonyms") {
          choice.info = `<p>Choose the word nearest in meaning to the italicized word</p>`;
        }

        if (choice.main) {
          // make sharp modification
          choice.question = mainWord(choice.main, choice.question);
        }
        randomChoices.push(choice);
      }
    }
  }

  // I don't even know if this one is necessary at all.
  // e get as e be...
  randomChoices = randomChoices.map((e, i) => {
    e.id = i + 1;
    return e;
  });

  // now that's cool... and we can be rest assured that the questions are all cool...
  // console.log(randomChoices.map(e => e.id));

  // console.log(topic);
  return {
    id: uuidv4(),
    name: config.name,
    topic: config.topic,
    oldScore: config.oldScore,
    current: 0,
    score: 0,
    questions: randomChoices,
  };
}
// THIS CODE WAS ORIGINALLY WRITTEN BY ME BUT HELPED REVISED BY ChatGPT...
function exam(subject, qty) {
  let chosen = [];
  let usedIds = new Set(); // To track unique IDs

  for (let i = 0; i < qty; i++) {
    let attempts = 0; // To prevent infinite loops
    while (attempts < 1000) {
      // Select a random topic and question
      const randomTopic = choose(subject.questions);
      let randomQuestion = choose(randomTopic.questions);

      // Assign topic and unique ID if missing
      randomQuestion.topic = randomQuestion.topic || randomTopic.topic;
      randomQuestion.id = randomQuestion.id || uuidv4();

      // Check if the question is unique
      if (!usedIds.has(randomQuestion.id) && !randomQuestion.notVisible) {
        // Shuffle the options
        randomQuestion = shuffle(randomQuestion);
        randomQuestion.subject = subject.subject;
        randomQuestion.topic = randomTopic.topic;

        // Replace placeholders in the question, if any
        if (randomQuestion.main) {
          randomQuestion.question = mainWord(
            randomQuestion.main,
            randomQuestion.question
          );
        }

        // Add to chosen list and mark ID as used
        chosen.push(randomQuestion);
        usedIds.add(randomQuestion.id);
        break; // Exit the loop once a unique question is added
      }

      attempts++;
    }

    if (attempts >= 1000) {
      console.warn("Failed to find a unique question after 1000 attempts");
    }
  }

  return chosen;
}

// for getting questions for multiple types
function multiple(db, config) {
  // multiple contains list of normal questions, so we just use those stuffs.
  let subjects = config.subject; // this one is cool?
  // now let's sharperly do dis stuff;
  let subjEl = [];

  for (let s of subjects) {
    // inside normal, everything gets called normally..
    subjEl.push(normal(db, s));
  }

  // now let's combine...
  let randomChoices = mix(...subjEl.map((e) => e.questions));
  // console.log(subjEl)
  return {
    id: uuidv4(),
    name: "Multiple",
    topic: "Multiple",
    current: 0,
    score: 0,
    questions: randomChoices,
  };
}

// multiple works fine only exam...

function mix(...rest) {
  let combine = rest
    .reduce((a, c) => a.concat(c), [])
    .map((e, i) => {
      e.id = i + 1;
      return e;
    });

  let newArr = [];

  while (combine.length) {
    let choice = choose(combine);
    combine = combine.filter((e) => e.id != choice.id);
    newArr.push(choice);
  }
  // for (let r of rest) console.log(r.length)
  newArr = newArr.map((e, i) => {
    e.id = i + 1;
    return e;
  });

  return newArr;
  // now shuffle up...
}
// let's do it like this....
export function convertMillisecondsToMinutesAndSeconds(ms) {
  // Calculate the number of minutes
  const minutes = Math.floor(ms / 60000);

  // Calculate the remaining seconds
  const seconds = Math.floor((ms % 60000) / 1000);

  return { minutes, seconds };
}

// export async function checkStreak(setStreak) {
//   let user = JSON.parse(localStorage.getItem("user"));
//   // now this is where everything clicks
//   if (!isStreakMaintained(user.lastUpdated)) {
//     // if it is false, we've got job to do, otherwise, we've nothing to do...
//     // since user doesn't maintain the streak, we default back to zero
//     let updates = {
//       // we don't even need to update anything...
//       currentStreak: 0,
//     }

//     await updateDocument("users", user.uid, updates).then(() => {
//       localStorage.setItem("user", JSON.stringify({...user, ...updates}));
//       setStreak(0); // shikena... no long thing...
//     }).catch(() => {
//       // do nothing
//     })
//   }
//   // do you see now...
// }

// function isStreakMaintained(lastDate) {
//   if (!lastDate) return true;
//   const diff = differenceInCalendarDays(new Date(), new Date(lastDate));
//   return diff <= 1; // Streak continues if the difference is exactly 1 day or 0 day
// }

export async function checkStreak(setStreak) {
  const user = JSON.parse(localStorage.getItem("user"));

  // Return early if user data is missing
  if (!user || !user.uid) {
    console.error("User data is missing or invalid.");
    return;
  }

  // Check if the streak has been maintained
  // console.log(isStreakMaintained(user.lastUpdated));
  if (!isStreakMaintained(user.lastUpdated)) {
    const updates = {
      currentStreak: 0, // Reset streak to zero
    };

    try {
      // Update Firestore document
      await updateDocument("users", user.uid, updates);

      // Update localStorage and streak state
      const updatedUser = { ...user, ...updates };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setStreak(0);
    } catch (error) {
      console.error("Failed to reset streak:", error);
    }
  }
}

// Utility function to check streak maintenance
function isStreakMaintained(lastDate) {
  if (!lastDate) return true; // Assume streak is maintained if no date exists
  const daysDifference = differenceInCalendarDays(
    new Date(),
    new Date(lastDate)
  );
  return daysDifference <= 1; // Streak continues if the gap is 0 or 1 day
}

export async function generateFingerprint() {
  // Collect multiple device and browser properties for accuracy
  const properties = [
    navigator.userAgent,
    screen.width + "x" + screen.height,
    screen.colorDepth,
    navigator.platform,
    new Date().getTimezoneOffset(),
    navigator.language,
    navigator.deviceMemory || "unknown", // Memory info (if available)
    navigator.hardwareConcurrency || "unknown", // CPU cores (if available)
    window.navigator.maxTouchPoints || 0, // Touchscreen support
    JSON.stringify(navigator.plugins), // Installed plugins
    JSON.stringify(navigator.mimeTypes), // Supported MIME types
  ];

  // Combine properties into a single string
  const data = properties.join("|");

  // Hash the properties using SubtleCrypto API
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest(
    "SHA-256",
    encoder.encode(data)
  );
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}
