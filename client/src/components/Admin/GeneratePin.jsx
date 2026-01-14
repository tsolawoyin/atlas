
import {
  addDocument,
  generateRandomString,
  fetchDoc,
  addDocDynamic,
} from "../../utils/firebase";

import { useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";

// It's high time I implement everything Marijn has taught me....
// don't bring anyone into this, you can do this yourself.
function GeneratePin({setPins}) {
  let vendorName = useRef(null);
  let quantity = useRef(null);
  let [err, setErr] = useState("");
  let [spinner, setSpinner] = useState(false);

  // the thing will work jare...
  async function registerKeys(name, qty, tag) {
    let keys = [];

    for (let i = 0; i < qty; i++) {
      keys.push(generateRandomString(12));
    }
    // let it add the ones it can add. and we will just retrieve exactly those... shey you get...
    // makes sense. I will know what to do about this...
    // do you get...
    // I'll have to barb my hair and all that. shey you get...
    for (let k of keys) {
      await addDocDynamic("codes", k, {
        id: k,
        used: false,
        vendor: JSON.parse(localStorage.getItem("user")).username,
        tag: tag,
        retailer: name,
      });
    }

    return true; // just return true. that's
  }
  // the pin should be printable cos that's the essence.
  // thank you so much.
  // makes sense. cool ehn. really cool bro.
  async function handleGenerate() {
    if (vendorName.current.value && quantity.current.value) {
      setSpinner(true);
      // add keys
      try {
        let tag = uuidv4(); // random tag to id newly created stuffs...
        await registerKeys(
          vendorName.current.value,
          Number(quantity.current.value),
          tag
        ); // makes sense. cool. thank you.
        // after adding codes, fetch them using what information???
        // now fetch them using the tags...
        // let newDocs = await fetchDoc("codes", "tag", tag); // fetch all documents with the tag for me... thank you so much.
        // we can fetch with tag later.....
        let newDocs = await fetchDoc("codes");

        if (newDocs.length) {
          setPins(newDocs); // cool. makes /sense.
          // no don't do that...
        }
      } catch (error) {
        setErr(error);
      } finally {
        setSpinner(false); // let's see how it goes.
      }
    } else {
      setErr("Please fill in form field correctly");
    }
  }

  const handleDownloadPDF = () => {
    print();
  };
  // makes sense. Thank you boss. Thank you.
  //   get pdf stuff...
  return (
    <form>
      <ul style={{ display: "grid", gap: "2em" }}>
        <li>
          <label htmlFor="name"></label>
          <input
            ref={vendorName}
            type="text"
            className="input"
            name="name"
            placeholder="Retailer"
          />
        </li>
        <li>
          <label htmlFor="quantity"></label>
          <input
            type="text"
            ref={quantity}
            name="quantity"
            className="input"
            id="quantity"
            placeholder="quantity"
          />
        </li>
        {err ? <li className="has-text-danger">{err}</li> : null}
        <li>
          <button
            className={`button is-primary ${spinner ? "is-loading" : ""}`}
            onClick={handleGenerate}
            type="button"
          >
            Generate
          </button>
        </li>
        <p onClick={handleDownloadPDF}>Print PDF</p>
      </ul>
    </form>
  );
}

export default GeneratePin;
