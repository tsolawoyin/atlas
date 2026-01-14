function fetcher(query) {
  return new Promise((resolve, reject) => {
    if (query == true) {
      setTimeout(() => {
        resolve(true);
      }, 5000);
    } else {
      setTimeout(() => {
        reject(false);
      }, 5000);
    }
  });
}

const { A, B, C, D, E, c } = { A: "A", B: "B", C: "C", D: "D", E: "E", c: "C" };

export const questions = [
  {
    id: "4590jfoeore",
    name: "Chemistry",
    topic: "Stoichiometry",
    score: 0,
    current: 2,
    questions: [
      {
        id: 1,
        question:
          "Which of the following is characteristic of the animal cell?",
        options: [
          "presence of chloroplasts",
          "Possession of a cellulose cell wall",
          "Absence of large vacuoles",
          "Presence of large vacuoles",
          "Presence of chromosomes",
        ],
        ans: C,
        remark:
          "Animal and plant cells have vacoules but the vacoule of animal cells are small, unlike the vacoules of plant cells which is large.",
      },
      {
        id: 2,
        question: "The vacuole of a plant cell is:",
        options: [
          "A large empty space",
          "Smaller than that of an animal cell",
          "Filled with air",
          "An ordinary vacuum",
          "Surrounded by a membrane",
        ],
        ans: E,
        remark:
          "The vacoule of a plant cell is surrounded by a membrane called <strong>Tonoplast</strong>",
      },
      {
        id: 3,
        question:
          "The part of the cell solely responsible for respiration is the:",
        options: [
          "Nucleus",
          "Nucleolus",
          "Mitochondria",
          "Golgi apparatus",
          "Endoplasmic reticulum",
        ],
        ans: C,
        remark:
          "Mitochodria is the power house of the cell which is responsible for respiration => the breakdown of glucose to give energy in form of ATP",
      },
    ],
  },
  {
    id: "fjskl9e89",
    name: "Biology",
    topic: "Cell",
    current: 0,
    score: 0,
    questions: [
      {
        id: 1,
        question:
          "Which of the following is characteristic of the animal cell?",
        options: [
          "presence of chloroplasts",
          "Possession of a cellulose cell wall",
          "Absence of large vacuoles",
          "Presence of large vacuoles",
          "Presence of chromosomes",
        ],
        ans: C,
        remark:
          "Animal and plant cells have vacoules but the vacoule of animal cells are small, unlike the vacoules of plant cells which is large.",
      },
      {
        id: 2,
        question: "The vacuole of a plant cell is:",
        options: [
          "A large empty space",
          "Smaller than that of an animal cell",
          "Filled with air",
          "An ordinary vacuum",
          "Surrounded by a membrane",
        ],
        ans: E,
        remark:
          "The vacoule of a plant cell is surrounded by a membrane called <strong>Tonoplast</strong>",
      },
      {
        id: 3,
        question:
          "The part of the cell solely responsible for respiration is the:",
        options: [
          "Nucleus",
          "Nucleolus",
          "Mitochondria",
          "Golgi apparatus",
          "Endoplasmic reticulum",
        ],
        ans: C,
        remark:
          "Mitochodria is the power house of the cell which is responsible for respiration => the breakdown of glucose to give energy in form of ATP",
      },
      {
        id: 4,
        question:
          "Which of these combinations is common to plant and animal cells?",
        options: [
          "Centriole, middle lamella, Golgi bodies, mitochondrion",
          "Cytoplasm, sap vacuole, starch grains, leucoplasts",
          "Plasma membranes, chromosome, mitochondria, lysosomes",
          "Nucleus, nucleolus, cellulose cell wall, endoplasmic reticulum",
          "Cytoplasm, centriole, cell wall, nucleolus",
        ],
        ans: C,
        remark:
          "Only animal cells possess centriole, and only plant cells possess chloroplast, sap vacoule, and cell wall.",
      },
      {
        id: 5,
        question: "Where is energy produced in a cell?",
        options: [
          "Nucleus",
          "Nucleolus",
          "Lysosomes",
          "Chloroplast",
          "Mitochondria",
        ],
        ans: E,
        remark: "mitochondria is always associated with energy production",
      },
      {
        id: 6,
        question:
          "Which of the following cell constituents is NOT common to both plants and animals?",
        options: [
          "Mitochondria",
          "Chloroplasts",
          "Ribosomes",
          "Golgi apparatus",
          "Vacuoles",
        ],
        ans: B,
        remark:
          "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
      },
      {
        id: 6,
        question:
          "Which of the following cell constituents is NOT common to both plants and animals?",
        options: [
          "Mitochondria",
          "Chloroplasts",
          "Ribosomes",
          "Golgi apparatus",
          "Vacuoles",
        ],
        ans: B,
        remark:
          "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
      },
      {
        id: 6,
        question:
          "Which of the following cell constituents is NOT common to both plants and animals?",
        options: [
          "Mitochondria",
          "Chloroplasts",
          "Ribosomes",
          "Golgi apparatus",
          "Vacuoles",
        ],
        ans: B,
        remark:
          "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
      },
      {
        id: 6,
        question:
          "Which of the following cell constituents is NOT common to both plants and animals?",
        options: [
          "Mitochondria",
          "Chloroplasts",
          "Ribosomes",
          "Golgi apparatus",
          "Vacuoles",
        ],
        ans: B,
        remark:
          "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
      },
      {
        id: 6,
        question:
          "Which of the following cell constituents is NOT common to both plants and animals?",
        options: [
          "Mitochondria",
          "Chloroplasts",
          "Ribosomes",
          "Golgi apparatus",
          "Vacuoles",
        ],
        ans: B,
        remark:
          "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
      },
      {
        id: 6,
        question:
          "Which of the following cell constituents is NOT common to both plants and animals?",
        options: [
          "Mitochondria",
          "Chloroplasts",
          "Ribosomes",
          "Golgi apparatus",
          "Vacuoles",
        ],
        ans: B,
        remark:
          "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
      },
      {
        id: 6,
        question:
          "Which of the following cell constituents is NOT common to both plants and animals?",
        options: [
          "Mitochondria",
          "Chloroplasts",
          "Ribosomes",
          "Golgi apparatus",
          "Vacuoles",
        ],
        ans: B,
        remark:
          "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
      },
      {
        id: 6,
        question:
          "Which of the following cell constituents is NOT common to both plants and animals?",
        options: [
          "Mitochondria",
          "Chloroplasts",
          "Ribosomes",
          "Golgi apparatus",
          "Vacuoles",
        ],
        ans: B,
        remark:
          "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
      },
      {
        id: 6,
        question:
          "Which of the following cell constituents is NOT common to both plants and animals?",
        options: [
          "Mitochondria",
          "Chloroplasts",
          "Ribosomes",
          "Golgi apparatus",
          "Vacuoles",
        ],
        ans: B,
        remark:
          "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
      },
      {
        id: 6,
        question:
          "Which of the following cell constituents is NOT common to both plants and animals?",
        options: [
          "Mitochondria",
          "Chloroplasts",
          "Ribosomes",
          "Golgi apparatus",
          "Vacuoles",
        ],
        ans: B,
        remark:
          "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
      },
    ],
  },
];

let html = `<h3>The poor man is compelled to languish in his poverty stricken situation.</h3><p><br></p><ul><li>luxuriate in</li><li>deteriorate in</li><li>suffer in</li><li>laugh at</li></ul><p><br></p><p>A</p><p><br></p><p>Languish is a verb that refers to a state of suffering, decline or becoming feeble. It can be used to describe various situations where something or someone experiences a lack of vitality, energy, or progress.</p>
`;

html = `<h3>Which of the following are derived units?</h3><h3> I. Metre II. Coulomb III. Kilogram IV. Ampere V. Joule</h3><p><br></p><ul><li>I and III only</li><li>II and V only</li><li>II, IV and V only</li><li>All of them</li></ul><p><br></p><p>B</p><p><br></p><p>There is no explanation for this question yet.</p><p>Hello world</p>`
// this is our work... converting this back to object.......

function parseStrToObject(html) {
  let regexes = {
    question: /(<h3>.+<\/h3>)/, // match anything in between; with patience, I will complete this stuff
    options: /<(ul|ol)>(.+)<\/(ul|ol)>/, // match everything in between as well...
    answer: /<p>([A-Ea-e])<\/p>/, // match the answer as well
    remark: /(<p>.+<\/p>)/, // how will match remark bai???? // this should do // I can also match it similarly.
    whiteSpace: /^<p><br><\/p>/, // match white space too....
    list: /<li>(.+)<\/li>/,
  };

  let struct = new Object(null);
  // this might still be useful... lolzzzz...
  while (html.length) {
    let match = null;
    if (html.match(regexes.question)) {
      let str = "";
      match = html.match(regexes.question)[1]; // => string
      html = html.slice(match.length); // => correct

      let specialRegex = /<h3>(.+?)<\/h3>/   // greedy greedy;
      // nice one
      while (match.match(specialRegex)) {
        let match2 = match.match(specialRegex);
        str += match2[1] + "\n";
        match = match.slice(match2[1].length);
      }

      struct.question = str;
    } else if (html.match(regexes.whiteSpace)) {
      match = html.match(regexes.whiteSpace);
      html = html.slice(match[0].length);
    } else if (html.match(regexes.options)) {
      match = html.match(regexes.options);
      let list = match[2];
      // need some sort of parsing...
      list = list.match(/<li>(.+?)<\/li>/g); // stop doing greedy match. understood. makes sense...
      let options = [];

      for (let l of list) {
        options.push(l.match(regexes.list)[1]);
      }

      struct.options = options;
      html = html.slice(match[0].length);
    } else if (html.match(regexes.answer)) {
      match = html.match(regexes.answer);
      struct.ans = match[1];
      html = html.slice(match[0].length);
    } else if (html.match(regexes.remark)) {
      // 
      let str = "";
      match = html.match(regexes.remark)[1]; // => string
      html = html.slice(match.length); // => correct

      let specialRegex = /<p>(.+?)<\/p>/   // greedy greedy;
      // nice one
      while (match.match(specialRegex)) {
        let match2 = match.match(specialRegex);
        str += match2[1] + "<br/>";
        match = match.slice(match2[1].length);
      }

      struct.remark = str;
      // 
    } else {
      break;
    }
  }
  console.log(struct, "\n")
  // return struct;
}

parseStrToObject(html);

export default fetcher;
