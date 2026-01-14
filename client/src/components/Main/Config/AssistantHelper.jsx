import { useState, useEffect } from "react";
import { getData } from "../../../utils/indexedDB";
import generateRecommendationsByPreference from "./utils/recommendation";

import { v4 as uuidv4 } from "uuid";

function AssistantHelper({ setChoosen }) {
  let t = ["Explore", "Boost", "Fortify"];
  // these are just the common available settings shey you get.
  let s = ["utme", "all", "English", "Chemistry", "Biology", "Physics"];

  let [subject, setSubject] = useState(s[Math.floor(Math.random() * s.length)]);
  let [type, setType] = useState(t[Math.floor(Math.random() * t.length)]);

  function getRecommendation(stats, preference) {
    let recommendations = generateRecommendationsByPreference(
      stats,
      preference
    );

    let choices = [];

    recommendations.forEach((recommendation) => {
      let config = {
        name: recommendation.subject,
        subject: recommendation.subject,
        topic: recommendation.topic,
        qty: recommendation.questions, // max is 60....
        type: "single",
        id: uuidv4(),
        selected: false,
        oldScore: recommendation.oldScore,
        recommend: true,
      };

      choices.push(config);
    });

    // Something like this sha.
    return choices;
  }

  // the only thing left is enforcing them to take at least one customized test per day.
  useEffect(() => {
    getData("Stats", "UTME")
      // Up and running.
      // Shortcut available for default settings.
      // That's the drill. Instead of wasting time and resources.
      .then((stat) => {
        if (subject == "utme") {
          let choices = [
            {
              name: "English",
              subject: "English",
              topic: "Exam",
              qty: 60, // max is 60....
              type: "single",
              id: uuidv4(),
              selected: false,
              oldScore: stat
                .find((s) => s.name == "English")
                .topics.find((t) => t.name == "Exam").oldScore,
              mode: "custom",
            },
            {
              name: "Chemistry",
              subject: "Chemistry",
              topic: "Exam",
              qty: 40, // max is 60....
              type: "single",
              id: uuidv4(),
              selected: false,
              oldScore: stat
                .find((s) => s.name == "Chemistry")
                .topics.find((t) => t.name == "Exam").oldScore,
              mode: "custom",
            },
            {
              name: "Biology",
              subject: "Biology",
              topic: "Exam",
              qty: 40, // max is 60....
              type: "single",
              id: uuidv4(),
              selected: false,
              oldScore: stat
                .find((s) => s.name == "Biology")
                .topics.find((t) => t.name == "Exam").oldScore,
              mode: "custom",
            },
            {
              name: "Physics",
              subject: "Physics",
              topic: "Exam",
              qty: 40, // max is 60....
              type: "single",
              id: uuidv4(),
              selected: false,
              oldScore: stat
                .find((s) => s.name == "Physics")
                .topics.find((t) => t.name == "Exam").oldScore,
              mode: "custom",
            },
          ];

          setChoosen(choices);
        } else if (subject == "all") {
          let preferences = [
            {
              subject: "Chemistry",
              type: type,
            },
            {
              subject: "Biology",
              type: type,
            },
            {
              subject: "Physics",
              type: type,
            },
            {
              subject: "English",
              type: type,
            },
          ];

          let choices = getRecommendation(stat, preferences);

          if (choices.length) {
            setChoosen(choices);
          } else {
            // do it again multiple times...
            let s = ["Explore", "Boost", "Fortify"];
            let newPref = preferences.map(
              (pref) => (pref.type = s[Math.floor(Math.random() * s.length)])
            );
            for (let i = 0; i < 1000; i++) {
              console.log("checking again", i);
              let choices = getRecommendation(stat, newPref);

              if (!choices.length) continue;

              setChoosen(choices);
              return;
            }
          }
        } else {
          let preference = [
            {
              subject: subject,
              type: type,
            },
          ];

          let choices = getRecommendation(stat, preference);

          if (choices.length) {
            setChoosen(choices);
          } else {
            // we just redo it until the stuff solve...
            let s = ["Explore", "Boost", "Fortify"];

            for (let i = 0; i < 1000; i++) {
              console.log("checking again", i);
              let choices = getRecommendation(stat, [
                {
                  subject,
                  type: s[Math.floor(Math.random() * s.length)],
                },
              ]);

              if (!choices.length) continue;

              setChoosen(choices);
              return;
            }
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [subject, type]);

  return (
    <div className="assistant-helper">
      <div className="select">
        <select
          name=""
          id=""
          onChange={(event) => {
            setSubject(event.target.value);
          }}
        >
          <option value="Biology" selected={subject == "Biology"}>
            Biology
          </option>
          <option value="Chemistry" selected={subject == "Chemistry"}>
            Chemistry
          </option>
          <option value="English" selected={subject == "English"}>
            English
          </option>
          <option value="Physics" selected={subject == "Physics"}>
            Physics
          </option>
          <option value="Mathematics" disabled>
            Mathematics
          </option>
          <option value="all" selected={subject == "all"}>
            All
          </option>
          <option value="utme" selected={subject == "utme"}>
            UTME
          </option>
        </select>
      </div>

      <div className="select">
        <select
          name=""
          id=""
          onChange={(event) => {
            setType(event.target.value);
          }}
        >
          <option value="Explore" selected={type == "Explore"}>
            Explore
          </option>
          <option value="Fortify" selected={type == "Fortify"}>
            Fortify
          </option>
          <option value="Boost" selected={type == "Boost"}>
            Boost
          </option>
        </select>
      </div>
    </div>
  );
}

export default AssistantHelper;
