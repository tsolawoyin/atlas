import Fuse from "fuse.js";
import { getData } from "../../utils/indexedDB";
import { useState } from "react";

// debounce algorithm provided by chatGPT
function debounce(fn, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

function Input({ type, setQuestions, subjects, currentSubject }) {
    let placeholder = type == "pin" ? "enter pin details..." : "type question here..."

    const handleInput = async (event) => {
        let questionsDB = await getData("EditorQB", "UTME"); // normally
        // the best is that we filter based on current subject...
        let questions = questionsDB.find(q => q.subject == subjects[currentSubject].subject).questions.reduce((acc, topic) => acc.concat(topic.questions), []);
        // the thing is now that we will need to flatten the questions else, we get nothing... 
        // console.log(questions)
        let fuse = new Fuse(questions, {
            keys: ["question"],
            threshold: 0.5
        })
        if (type != "pin") {
            setQuestions(fuse.search(event.target.value).map(result => result.item));
        }
    };

    return (
        <input type="text" className="input" id="search-box" placeholder={placeholder} onInput={debounce(handleInput, 300)} />
    )
}

function QuestionSearch({ setQuestions, subjects, currentSubject }) {
    return (
        <Input type={"question"} setQuestions={setQuestions} subjects={subjects} currentSubject={currentSubject} />
    )
}

// break down the problem into tiny bits...
function PinSearch() {
    return <Input type={"pin"} />
}

// Something like this sha...
// I need something nice and easy....
function Search({ what, questions, setQuestions, subjects, currentSubject }) {
    // now we have stuff to search from...
    if (what == "pin") {
        return (
            <PinSearch />
        )
    } else {
        return <QuestionSearch questions={questions} setQuestions={setQuestions} subjects={subjects} currentSubject={currentSubject} />
    }
}

export default Search;

// This portion of the code is working perfectly.
// It's doing it's job very perfectly.