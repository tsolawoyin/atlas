import { getDatabase } from "firebase/database";
import { app } from "../../../../utils/firebase";
import {ref, set, onValue} from "firebase/database";


const database = getDatabase(app);

// Reference to a specific location in the database;
// this is userone shey you know...
// then we can reference some user two too...
// this will represent one game session shey you get...
// nice and easy...
// hmm.....
const dbRef = ref(database, 'users/user1'); // this will return the data at this location... hmm;
// nice one... easy peasy...

// Write data
// set(dbRef, {
//     username: "JohnDoe",
//     email: "Blablabla"
// })
// for one thing the thing worked. 
// it will really help in modularizing boots code... 
// for one thing at least....
// it makes everything easy to work with inside this place...
export function setStuff(data) {
    set(dbRef, data);
}

// onValue(dbRef, (snapShot) => {
//     const data = snapShot.val();
//     console.log(data);
// })