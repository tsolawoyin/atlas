// get stats from indexDB... lolzzz... yeah they will all even download the new version tomorrow. normally... it won't affect actually\
// const demo = [
//     {
//         "subject": "Biology",
//         topics: ["Cell problem"]
//     }
// ]

// const subjectsDemo = [
//     {
//       name: "English",
//       progress: 100,
//       topics: [
//         {
//           name: "Antonyms",
//           progress: 80,
//         },
//         {
//           name: "Synonyms",
//           progress: 80,
//         },
//         {
//           name: "Verbs",
//           progress: 80,
//         },
//         {
//           name: "Nouns",
//           progress: 80,
//         },
//         //   {
//         //     name: "Antonyms",
//         //     progress: 80,
//         //   },
//         //   {
//         //     name: "Antonyms",
//         //     progress: 80,
//         //   },
//         //   {
//         //     name: "Antonyms",
//         //     progress: 80,
//         //   },
//         //   {
//         //     name: "Antonyms",
//         //     progress: 80,
//         //   },
//         //   {
//         //     name: "Antonyms",
//         //     progress: 80,
//         //   },
//         //   {
//         //     name: "Antonyms",
//         //     progress: 80,
//         //   },
//         //   {
//         //     name: "Antonyms",
//         //     progress: 80,
//         //   },
//         //   {
//         //     name: "Antonyms",
//         //     progress: 80,
//         //   },
//         //   {
//         //     name: "Antonyms",
//         //     progress: 80,
//         //   },
//         //   {
//         //     name: "Antonyms",
//         //     progress: 80,
//         //   },
//         //   {
//         //     name: "Antonyms",
//         //     progress: 80,
//         //   },
//       ],
//       // I just need to make it work for one not everything shey you get..
//     },
//     {
//       name: "Biology", // indexDB will have to mimic this structure, nice one. Cool and easy.
//       progress: 95,
//       topics: [], // nice one
//     },
//     {
//       name: "Chemistry",
//       progress: 50,
//       topics: [], // nice one
//     },
//     {
//       name: "Physics",
//       progress: 10,
//       topics: [], // nice one
//     },
//     {
//       name: "Mathematics",
//       progress: 0,
//       topics: [], // nice one
//     },
//   ];
  
function buildStat(listOfSubjects) {
    let stats = []; // we are building a list
    for (let l of listOfSubjects) {
        // nice one...
        let main = new Object(null);
        main.name = l.subject;
        main.progress = 0; // we don't need this one...
        main.topics = [];
        main.version = 1;

        for (let t of l.topics) {
            main.topics.push({
                name: t,
                progress: 0,
                attempts: 0,
                weight: 1 // nice and easy right??? maybe...
            })
        }

        stats.push(main);
    }

    return stats;
}

export default buildStat