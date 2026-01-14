import { useState } from "react";
import Header from "./Header";
import Footer from "../Footer";

function FetchPin() {
  let [spinner, setSpinner] = useState(false);
  let [codes, setCodes] = useState([]);
  let [err, setErr] = useState(false);
  // cool...
  // we just have to build and combine several queries together and use it to search shey u get. cool

  

  return (
    <div className={`app-full`}>
      {/* makes sense. cool thank you so much. */}
      <Header login={true} />
      <main id="generate-pin">
        <form>
          <ul style={{ display: "grid", gap: "2em" }}>
            <li>
              <label htmlFor="name"></label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Vendor"
              />
            </li>
            <li>
              <label htmlFor="tag"></label>
              <input
                type="text"
                name="tag"
                className="input"
                id="tag"
                placeholder="Tag"
              />
            </li>
            <li>
              <label htmlFor="id"></label>
              <input
                type="text"
                name="quantity"
                className="input"
                id="id"
                placeholder="ID"
              />
            </li>
            <li>
              <label htmlFor="date"></label>
              <input type="date" className="input" name="date" id="date" />
            </li>
            <li>
              <label htmlFor="used">Used</label>
              <br />
              <div className="select">
                <select name="used" id="used">
                  <option value="true" className="options">
                    True
                  </option>
                  <option value="false">False</option>
                </select>
              </div>
            </li>
            {err ? <li className="has-text-danger">{err}</li> : null}
            <li>
              <button
                className={`button is-primary ${spinner ? "is-loading" : ""}`}
                type="button"
              >
                Search
              </button>
            </li>
          </ul>
        </form>
        {/* let me experiment with this... */}
        <div id="codes-tab">
          <ul>{codes.length ? null : <li>No pin found</li>}</ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FetchPin;
