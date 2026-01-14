import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "../Footer";

import "../../assets/fonts/Poppins/Poppins-Regular.ttf";
import "../../assets/fonts/Caveat/Caveat-VariableFont_wght.ttf";
import "../../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf";

import "../../css/App.css";

const team = [
  {
    name: "Temidayo Samuel Olawoyin",
    role: "CEO and CTO"
  },
  {
    name: "Apera Member Veronica",
    role: "CFO and CMO"
  }
]

function Team({team}) {
  return (
    <ul className="team-ul">
      {team.map(t => {
        return (
          <li>
            <p className="title is-size-6">{t.name}</p>
            <p className="subtitle is-size-6">{t.role}</p>
          </li>
        )
      })}
    </ul>
  )
}

export function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div id="app-editor">
      <Header // nice and well. thank you.
        login={true}
      />
      <div id="admin-todo">
        <h1>
          Welcome <strong>{user.username}</strong> to Boots 5 Admin Dashboard
        </h1>
        <Team team={team}/>
        <ul>
          <li className="menu">
            <p className="menu-label">Manage Questions</p>
            <ul className="menu-list">
              <li>
                <Link to="manage utme questions">UTME</Link>
              </li>
            </ul>
          </li>
          <li>
            <li className="menu">
              <p className="menu-label">Others things</p>
              <ul className="menu-list">
                <li>
                  <Link to="manage pins">Manage Pins</Link>
                  <Link to={"manage users"}>Manage Users</Link>
                </li>
              </ul>
            </li>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
