// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  getDoc,
  query,
  where,
  updateDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

import CryptoJS from "crypto-js";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
  uploadBytes,
} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv5ciDHCrG19B7OBfMF16XKuY5v-k0CiE",
  authDomain: "boots-e1a5b.firebaseapp.com",
  projectId: "boots-e1a5b",
  storageBucket: "boots-e1a5b.appspot.com",
  messagingSenderId: "439330050539",
  appId: "1:439330050539:web:dff655164bfa7ea04b09ae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// here we only writing and fetching
// and even the writing is not everytime.
// Initialze firestore...
const auth = getAuth();
const user = auth.currentUser;
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

/**
 * Uploads an image to Firebase Storage and returns the download URL.
 * @param {File} file - The image file to upload.
 * @param {string} path - The path in Firebase Storage where the image will be stored.
 * @returns {Promise<string>} - A promise that resolves to the download URL of the uploaded image.
 */
const uploadImage = async (file, path) => {
  try {
    // Create a reference to the storage path
    const storageRef = ref(storage, path);

    // Upload the file
    const snapshot = await uploadBytes(storageRef, file);

    // Get the download URL
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

async function signIn(email, password) {
  try {
    let authenticate = await signInWithEmailAndPassword(auth, email, password);
    return authenticate.user; // if successful. makes sense
  } catch (err) {
    throw new Error(err.message); // unable to sign in... due to several factors I;m not interested in...
  }
}

// oh ok, it is fetch doc that will do all the stuff for me sef...
// nice and easy. thank God...
// this function has dual function... thank God..
async function fetchDoc(path, property, value, sort) {
  let colRef = collection(db, path);

  if (property && value) {
    colRef = query(colRef, where(property, "==", value)); // makes sense... this makes this function super useful
  }

  if (path == "leaderboard") {
    // Nice and easy... makes sense...
    colRef = query(colRef, orderBy("points", "desc"));
  }

  const k = [];

  let q = await getDocs(colRef);

  q.forEach((e) => k.push(e.data()));

  return k; // this is the function I need...
}
// adding data first...
async function uploadJsonFile(filePath, jsonData) {
  // Create a reference to the file path
  const storageRef = ref(storage, filePath);

  // Convert JSON object to a string
  const jsonString = JSON.stringify(jsonData);

  try {
    // Upload the JSON string as a new file
    await uploadString(storageRef, jsonString, "raw", {
      contentType: "application/json",
    });
    console.log("JSON file uploaded successfully!");
    return true;
  } catch (error) {
    console.error("Error uploading JSON file:", error.message);
    throw new Error("Unable to send");
  }
}

// This code is generated from chatGPT to help solve the issue of hanging getDownloadURL
async function fetchWithTimeout(storageRef, timeout = 10000) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request timed out")), timeout)
  );

  const fetchPromise = getDownloadURL(storageRef);

  return Promise.race([fetchPromise, timeoutPromise]);
}

async function readJsonFile(filePath) {
  console.log("done");
  try {
    // Create a reference to the file
    const storageRef = ref(storage, filePath);

    // Get the download URL
    // console.log("about to start fetching")
    const url = await fetchWithTimeout(storageRef, 4000);
    // console.log("done fetching")
    // Fetch the file content
    const response = await fetch(url);
    if (!response.ok) {
      // console.log("nice one")
      throw new Error("Network response was not ok");
    }

    // Parse the content as JSON
    const jsonData = await response.json();
    // console.log('Parsed JSON data:', jsonData);
    // console.log("returned sometihing")
    return jsonData;
  } catch (error) {
    throw error;
  }
}

// nice and easy... makes sense... now I know what I will do...
// Honestly, it makes sense... nice and easy...
// Let's experiment first of all...

// !!!!!!!!!!!!!!!! NOTE HERE BECAUSE OF KEY
async function uploadDocument(data, key) {
  // making sense...
  // makes sense.
  // thank you.
  try {
    // in fact this is why the id is necessary, because of updating version number, otherwise, it's not necessary at all
    // only it's id can work unless I want to query...
    let docRef = doc(db, "questions", data.id); // the id should be present initially...

    // encrpyting the questions... before sending...
    data.questions = CryptoJS.AES.encrypt(
      JSON.stringify(data.questions),
      key
    ).toString();
    // update the version number in the doc
    // upload the file too
    // nice one, we use updateDoc
    await updateDoc(docRef, { version: data.version }); //update version number
    await uploadJsonFile(data.url, data); // already encrypted at this point
    return true;
  } catch (err) {
    // console.log(err);
    return false;
  }
  // I don't need these one...
}

// name, version, and url
async function fetchDocument(type, col, key) {
  // console.log("hi")
  let colRef = collection(db, col); // let it throw errors so that I can fix it.
  // you can imagine... just one line of code and everything is sef. makes sense
  let q = query(colRef, where("type", "==", type));

  let questions = [];
  let decrypted = [];

  const querySnapShot = await getDocs(q); // get all doc with property type of type
  // it doesnt work like this. cool

  querySnapShot.forEach(async (doc) => questions.push(doc.data()));

  // console.log(questions)

  for (let q of questions) {
    // these ones are relatively simple from here...
    // it's time to convert questions
    let newDoc = { ...q }; // copy all necessary properties... nice and easy
    let json = await readJsonFile(newDoc.url); // url is already available;
    if (json) {
      // ok, it is decrypted here...
      newDoc.questions = JSON.parse(
        CryptoJS.AES.decrypt(json.questions, key).toString(CryptoJS.enc.Utf8)
      );
      decrypted.push(newDoc);
    } else {
      console.log("error getting " + newDoc.subject);
    }
  }

  return decrypted; // no need to repackage anything any more...
}

async function downloadDoc(name) {
  // the id is supposed to be here... let's use id for now jare...
  // given a name, go download a particular document for us...
  // makes sense? yupyup
  let colRef = collection(db, "questions"); // reference the collection
  let q = query(colRef, where("subject", "==", name)); // this is better than copying the id to the source here...
  let res = [];
  try {
    let doc = await getDocs(q); // that's all
    doc.forEach((d) => res.push(d.data()));
    // then after doing this, we can move to download the document... as needed....
    let data = await readJsonFile(res[0].url);
    if (data) {
      // data is a object...
      let newObj = { ...data, ...res[0] }; // updating necessary properties... shey u get
      return newObj;
    }
  } catch (err) {
    // console.log(err);
    return false;
  }
}

// very useful and easy to read from db
// now this one makes sense.... thank you so much....

function decrypt(data, key) {
  // we need to return a new data alaye...
  let q = [];
  //
  // console.log(data)
  // console.log(data);
  for (let d of data) {
    // alright, this is where we roll
    let newObj = { ...d };

    newObj.questions = JSON.parse(
      CryptoJS.AES.decrypt(newObj.questions, key).toString(CryptoJS.enc.Utf8)
    );
    // console.log(newObj.questions)
    // newObj.questions = JSON.parse(newObj.questions); // e get as e be...

    // console.log(newObj, "hello...");

    q.push(newObj);
  }
  // console.log(q);
  return q; // this is a new object, not the old one...
}

function encrypt(data, key) {
  // we need to return a new data alaye...
  let q = [];
  //
  for (let d of data) {
    // alright, this is where we roll
    let newObj = { ...d };

    newObj.questions = CryptoJS.AES.encrypt(
      JSON.stringify(newObj.questions),
      key
    ).toString();

    q.push(newObj);
  }

  return q; // this is a new object, not the old one...
}

// this is my networking room
// ...lolzzz...

// Generating random keys
function generateRandomString(length) {
  const characters = "0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

// get more than hundred stuff...
// let's create documents
// this is probably what I want
async function addDocument(collectionName, data) {
  try {
    // addin
    const docRef = await addDoc(collection(db, collectionName), data);
    // updating
    const update = await updateDoc(doc(db, collectionName, docRef.id), {
      id: docRef.id,
      createdAt: serverTimestamp(), // adding time of creation as well. makes sense. yupyup...
    }); // makes sense right????? yupyup...
    //
    data = await getDoc(doc(db, collectionName, docRef.id));

    if (data) return data.data();
    // oh, I already have a function for it already sef...
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }
}

const checkUsernameExists = async (username) => {
  const usersRef = collection(db, "users");
  // makes sense
  const q = query(usersRef, where("username", "==", username));

  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty; // Returns true if a username exists
};

// signup auth
async function signUp(email, password, fullname, username, phone) {
  try {
    const usernameExists = await checkUsernameExists(username);
    // works perfectly. makes sense.
    if (usernameExists) {
      return "duplicate username";
    } else {
      let newUser = await createUserWithEmailAndPassword(auth, email, password);

      if (newUser) {
        // at this point the user is signed in already.
        // we just need to get on with the stuff...
        let w = await storeUserData({
          uid: newUser.user.uid,
          email: email,
          fullname: fullname,
          username: username,
          phone: phone,
        });
        if (w) {
          return newUser.user.uid; // it's a string for sure...
        } else {
          // signup but failed to register user data. imagine.
        }
      }
    }
  } catch (err) {
    return err.message;
  }
  // then now I can have a finally stuff
}

// helper function for signup
async function storeUserData(user) {
  // collecting userData allows for more powerful features.
  // lolzzzzzz....
  try {
    const userDocRef = doc(db, "users", user.uid);
    // nice and cool. thank you.
    let userData = await setDoc(userDocRef, {
      uid: user.uid,
      email: user.email,
      fullname: user.fullname,
      username: user.username,
      phone: user.phone,
      createdAt: serverTimestamp(),
    });

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

// Leaderboard code
// async function updateLeaderboard(col, field, value, score, data) {
//   // console.log(data)
//   // updating the leaderboard is one of two cases
//   // user is present
//   // user is not present normally
//   try {
//     const q = query(collection(db, col), where(field, "==", value));
//     const querySnapshot = await getDocs(q);

//     // since I will be using username for sure, it should be do...
//     // if () // I will still have to update the code for the code stuff
//     if (querySnapshot.empty) {
//       // ok, I will assume that sometime the stuff returns an empty list...
//       // hmmm, then it will now add again
//       // this is where the issue comes in
//       // we add the user asap
//       const docRef = await addDoc(collection(db, col), {
//         points: score,
//         ...data,
//       });

//       return true; // nice and easy...
//       // I don't even think it's necessary to store the id of the stuff...
//     } else {
//       // user has already joined before, we update the object for such user...
//       let docID = null;
//       let docDet = null;
//       querySnapshot.forEach((doc) => {
//         docID = doc.id;
//         docDet = doc.data();
//       });
//       // done and dusted for this one...
//       await updateDoc(doc(db, col, docID), {
//         points: Math.round(docDet.points + score),
//       });
//       // it seems like it works sha...
//       return true;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
async function updateLeaderboard(col, field, value, score, data) {
  // it means we won't need querying anymore...
  // that's nice and makes sense...
  try {
    const docRef = doc(collection(db, col), value); // Use value as the document ID
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      // Create new document
      await setDoc(docRef, {
        points: score,
        ...data,
      });
    } else {
      // Update existing document
      const docData = docSnapshot.data();
      await updateDoc(docRef, {
        points: Math.round(docData.points + score),
        ...data,
      });
    }

    return true;
  } catch (err) {
    console.error("Error updating leaderboard:", err);
    return false;
  }
}

async function addDocDynamic(col, value, data) {
  try {
    const docRef = doc(collection(db, col), value);

    await setDoc(docRef, data);

    return true;
  } catch (_) {
    return null;
  }
}

// yeah I can use this to update leaderboard too...
// makes sense??

// I need to write a function to download a single document shey you get.

async function getSingleDoc(path, value) {
  try {
    const userDocRef = doc(db, path, value);

    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      return userDocSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
// it will most likely work
async function updateUserPassword(newpassword, currentPassword) {
  if (!user) {
    return false;
  }

  try {
    // User email
    const email = user.email;

    // Create the credential using the user's email and current password
    const credential = EmailAuthProvider.credential(email, currentPassword);
    // Reauthenticate the user
    await reauthenticateWithCredential(user, credential);

    // update passeword
    await updatePassword(user, newpassword);

    return true;
  } catch (_) {
    return false;
  }
}

/**
 * Updates a document in Firestore.
 *
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} docId - The ID of the document to update.
 * @param {object} updateData - An object containing the fields to update.
 * @returns {Promise<void>} Resolves if the update is successful, otherwise rejects with an error.
 */
async function updateDocument(collectionName, docId, updateData) {
  try {
    // Reference to the specific document
    const docRef = doc(db, collectionName, docId);

    // Update the document with the provided data
    await updateDoc(docRef, updateData);

    // console.log(
    //   `Document ${docId} in collection ${collectionName} updated successfully.`
    // );
    return true;
  } catch (error) {
    // console.error(
    //   `Error updating document ${docId} in collection ${collectionName}:`,
    //   error.message
    // );
    console.log(error);
    // throw error; // Rethrow the error for further handling if needed
    return false;
  }
}

async function fetchSingleDoc(col, id) {
  try {
    const docRef = doc(db, col, id);

    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
}

// this functions are duplicates sha..
async function getUsersWithPoints() {
  try {
    const usersRef = collection(db, "users");
    const usersQuery = query(
      usersRef,
      where("tp", ">", 0), // Only include documents where 'tp' exists and is greater than 0
      orderBy("tp", "desc") // Sort by 'tp' in descending order
    );
    const querySnapshot = await getDocs(usersQuery);

    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });

    // console.log(users);
    return users; // List of users with 'tp' sorted in descending order
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}


async function getUsersWithEp() {
  try {
    const usersRef = collection(db, "users");
    const usersQuery = query(
      usersRef,
      where("ep", ">", 0), // Only include documents where 'tp' exists and is greater than 0
      orderBy("ep", "desc") // Sort by 'tp' in descending order
    );
    const querySnapshot = await getDocs(usersQuery);

    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });

    // console.log(users);
    return users; // List of users with 'tp' sorted in descending order
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

async function getUsersWithStreak() {
  try {
    const usersRef = collection(db, "users");
    const usersQuery = query(
      usersRef,
      where("currentStreak", ">", 0), // Only include documents where 'tp' exists and is greater than 0
      orderBy("currentStreak", "desc") // Sort by 'tp' in descending order
    );
    const querySnapshot = await getDocs(usersQuery);

    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });

    // console.log(users);
    return users; // List of users with 'tp' sorted in descending order
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
// up to here...

// getUsersWithPoints();

// I believe with all these function I should be able to get this done somehow

export {
  decrypt,
  encrypt,
  uploadDocument,
  fetchDoc,
  fetchDocument,
  downloadDoc,
  addDocument,
  generateRandomString,
  signUp,
  signIn,
  getSingleDoc,
  updateLeaderboard,
  updateUserPassword,
  updateDocument,
  fetchSingleDoc,
  addDocDynamic,
  uploadJsonFile,
  readJsonFile,
  getUsersWithPoints,
  getUsersWithEp,
  getUsersWithStreak,
  uploadImage,
}; // this is better jare...
