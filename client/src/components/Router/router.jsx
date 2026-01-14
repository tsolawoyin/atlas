import { createBrowserRouter } from "react-router-dom";
import authLoader from "./authLoader.js";

import { App as Main } from "../Main/App.jsx";
import { App as EditorApp } from "../Admin/App.jsx";
import ManageQuestions from "../Admin/ManageQuestion.jsx";
import Config from "../Main/Config/Config.jsx";
// import Exam from "./Main/Exam.jsx";
import Exam from "../Main/Exam/Exam.jsx";
import Lock from "../Main/Lock.jsx";
import Login from "../Login.jsx";
import ErrorPage from "../Error.jsx";
import Signup from "../Main/Signup.jsx";
import ManagePin from "../Admin/ManagePin.jsx";
import GeneratePin from "../Admin/GeneratePin.jsx";
import FetchPin from "../Admin/FetchPin.jsx";
import Logo from "../Logo.jsx";
import PasswordReset from "../PasswordReset.jsx";
import Leaderboard from "../Main/LeaderBoard/Leaderboard.jsx";
import AccountSettings from "../Main/AccountSettings.jsx";
import Profile from "../Main/Profile/Profile.jsx";
import ProfileStats from "../Main/Profile/ProfileStats.jsx";
import Exams from "../Main/Profile/ProfileExams.jsx";
import Table from "../Main/LeaderBoard/Table.jsx";

// I am more comfortable using createBrowserRouter...
// Because I can easily manage all my code in one codebase. Shey you get.
const router = createBrowserRouter([
  {
    // if a user is loggedIn, the user should proceed to the config page
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    loader: async () => await authLoader("home"),
  },

  // ADMIN ROUTER START HERE
  {
    path: "admin", // this admin sef can use loader effect
    loader: async () => await authLoader("admin"),
    element: <EditorApp />,
  },
  {
    path: "admin/manage utme questions",
    loader: async () => authLoader("admin", "UTME"),
    element: <ManageQuestions type="utme" />,
  },
  {
    path: "admin/manage futa questions",
    loader: async () => authLoader("admin", "FUTA"),
    element: <ManageQuestions type="futa" />,
  },
  {
    path: "admin/manage mbbs questions",
    loader: async () => authLoader("admin", "MBBS"),
    element: <ManageQuestions type="mbbs" />,
  },
  {
    path: "admin/manage pins",
    loader: async () => await authLoader("admin"),
    element: <ManagePin />,
  },
  {
    path: "admin/manage pins/generate pin",
    loader: async () => await authLoader("admin"),
    element: <GeneratePin />,
  },
  {
    path: "admin/manage pins/fetch pin",
    loader: async () => await authLoader("admin"),
    element: <FetchPin />,
  },
  // ADMIN ROUTER ENDS HERE
  {
    path: "practice/configure",
    element: <Config type="UTME" title={"Configure"} />,
    loader: authLoader, // if user is sha logged in, load up. thanks. no locking here...
  },
  {
    path: "practice/exam/:examuid", // I will need to do some active reading of the url...
    loader: async ({ request }) => await authLoader("exam", "UTME", request),
    element: <Exam type={"UTME"} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "practice/exam/multiplayer/:examuid",
    loader: async ({ request }) => await authLoader("exam", "UTME", request),
    element: <Exam type={"UTME"} mode="multiplayer" />,
    errorElement: <ErrorPage />,
  },
  // I will use another mechanism to give users the ability to test. I will give them 5 minutes for testing any feature they want...
  {
    // makes sense...
    // I'm not even locking, I'm only unlocking. I feel your pain dear.
    path: "practice/configure/unlock", // I will modify appropriately don't worry.
    element: <Lock />,
    loader: authLoader,
  },
  {
    path: "/login",
    element: <Login />,
    loader: async () => await authLoader("login"),
  },
  {
    path: "/reset_password",
    element: <PasswordReset />,
    loader: async () => authLoader("reset"), // let's work with this for now
  },
  {
    path: "/signup",
    element: <Signup />,
    loader: async () => await authLoader("signup"), // olagbara. just experiment
  },
  {
    path: "/logo",
    element: <Logo />,
  },
  // user route
  {
    path: "/users/:username", // something like this... it's should be possible shey you get. And this one should rely on local storage
    // loader: async ({ request }) => await authLoader("profile", "UTME", request),
    element: <Profile />,
    loader: authLoader,
    children: [
      {index: true, element: <ProfileStats />},
      {path: "stats", element: <ProfileStats />},
      {path: "exams", element: <Exams />}
    ]
  },
  // leaderboard route
  {
    path: "/users/leaderboard",
    element: <Leaderboard />,
    // then all I need to do is create a component that will represent this four states.
    // Nice and easy...
    children: [
      {index: true, element: <Table route="this-week"/>},
      {path: "this-week", element: <Table route="this-week"/>},
      {path: "streak", element: <Table route="streak"/>},
      {path: "score-prediction", element: <Table route="score-prediction"/>},
      {path: "all-time", element: <Table route="all-time"/>}
    ],
    loader: authLoader,
  },
  // Account settings
  {
    path: "/users/edit",
    element: <AccountSettings />,
    loader: authLoader,
  },
]);

export default router
