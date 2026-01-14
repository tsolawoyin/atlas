import { getAuth } from "firebase/auth";
import { redirect } from "react-router-dom";
import { getData, getSingleData } from "../../utils/indexedDB.js";
import { fetchDoc } from "../../utils/firebase";

const authLoader = async (page, question, request) => {
  // request is optional. and that's why it's at the last part
  // console.log(request?.url);
  const auth = getAuth();
  // makes sense abi? I am not sure...
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // special routing for samuelolawoyin3
        if (user.email == "samuelolawoyin3@gmail.com") {
          if (page == "signup" || page == "home") {
            resolve(redirect("/practice/configure/mbbs")); // cool
          }
        }
        // User is authenticated, resolve with the user object
        if (page == "signup" || page == "home") {
          // so that we will not be seeing home shey u get...
          resolve(redirect("/practice/configure"));
        } else if (page == "admin") {
          if (
            // these are the admins we have currently...
            user.email == "t.olawoyin@outlook.com" ||
            user.email == "oyinadeolawoyin79@gmail.com" ||
            user.email == "rhodamercy333@gmail.com" ||
            user.email == "aperaveronica2022@gmail.com" ||
            user.email == "trix50@yahoo.com"
          ) {
            let questions = await getData("EditorQB", question);
            // this is how we do it...
            if (questions) {
              resolve(questions);
            } else {
              resolve([]); // empty list...
            }
          } else {
            resolve(redirect("/")); // makes sense... thank you.
          }
        } else if (page == "exam") {
          let { pathname } = new URL(request.url);
          const id = pathname.split("/").pop();
          let config = await getSingleData("Exams", question, id);
          // !!! Potential network Request

          // !!!

          // if this fails then we can make some network request later

          if (question == "mbbs") {
            if (config) {
              resolve(config);
            } else {
              resolve(redirect("/practice/configure/mbbs"));
            }
          } else if (question == "UTME") {
            if (config) {
              resolve(config);
            } else {
              resolve(redirect("/practice/configure")); // for now if exam doesn't exist in db, just move on...
            }
          } else if (question == "futa") {
            if (config) {
              resolve(config); // cool
            } else {
              resolve(redirect("/practice/configure/futa +++")); // else this... thank you.
            }
          }
          // then just return it
          // if activate, pass to config
        } else {
          resolve(user); //
        }
      } else {
        if (
          page == "signup" ||
          page == "home" ||
          page == "blog" ||
          page == "login" ||
          page == "reset"
        ) {
          resolve(false);
        }
        // User is not authenticated, redirect to login page
        resolve(redirect("/login"));
      }
      unsubscribe();
    });
  });
};

export default authLoader;


// else if (page == "profile") {
//   let localUser = JSON.parse(localStorage.getItem("user"));
//   //
//   let { pathname } = new URL(request.url);
//   const username = pathname.split("/").pop();

//   // console.log(username, localUser.username) // nice and easy...
//   // I don't know sha
//   console.log(localUser, username)

//   if (!localUser || localUser.username != username) {
//     // let's fetch user details... hmmm...
//     let user = await fetchDoc("users", "username", username);

//     if (user) {
//       resolve(user[0]);
//     }

//     return []
//   } else {
//     resolve(localUser);
//   }
// }