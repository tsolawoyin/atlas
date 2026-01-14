import { chemistryQuestions } from "./chmQuestions.js";
import { biologyQuestions } from "./bioQuestions.js";
import { englishQuestions } from "./engQuestions.js";
import { phyQuestions } from "./phyQuestions.js";

const Questions = [
    {
        subject: "English",
        questions: englishQuestions,
        version: 1.0
    },
    {
        subject: "Chemistry",
        questions: chemistryQuestions,
        version: 1.0
    },
    {
        subject: "Biology",
        questions: biologyQuestions,
        version: 1.0,
    },
    {
        subject: "Physics",
        questions: phyQuestions,
        version: 1.0
    },
    // adding is just about pushing stuffs in here...
]


export { Questions }