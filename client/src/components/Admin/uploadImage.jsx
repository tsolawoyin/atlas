import React, { useState, useRef } from "react";
import { uploadImage } from "../../utils/firebase";

import { v4 as uuid4 } from "uuid";

const ImageUploader = ({ tempImg, setTempImg, setImage, id, setLogs }) => {
  // temp image in this case is just the file to be uploaded in my opinioin
  // console.log(id, "from image uploader")
  let [loading, setIsLoading] = useState(false);
  let inputField = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTempImg(file); // setting temp image does not affect the id
      setLogs((draft) => {
        draft.unshift({
          type: "Success",
          message: `Img added`,
        });
      });
    }
  };
  // this upload process is something of later...
  const handleUpload = async () => {
    // nice and easy bruv
    if (!tempImg) {
        alert("No img to upload. Please upload an img :)");
    } else {
        // uploading the stuff
        try {
            setIsLoading(true);
            // upload image in the context of the current id.
            // this will the image in the context of existing image
            // or upload a new one for new questions....
            // so that one question will forever maintain its image...
            let imgDownloadURL = await uploadImage(tempImg, `images/${id}`);
            // simple as abc....
            // console.log(imgDownloadURL);
            setImage(imgDownloadURL);

            setLogs((draft) => {
                draft.unshift({
                  type: "success",
                  message: `Successfully uploaded`,
                });
              });
        } catch(err) {
            alert(err.message);
        } finally {
            // setTempImg(null); // nice and easy bruv... thank you.
            // I can;t set it to null after uploading that's not correct now....
            setIsLoading(false);
            inputField.current.value = ""; // simple as abc...
            // no one can stress the boy...
        }
        // moving on...
    }
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "1em",
      }}
    >
      <input
        type="file"
        ref={inputField}
        className="input"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} type="button" className={`button ${loading ? "is-loading" : ""}`}>
        Upload Image
      </button>

    </div>
  );
};

export default ImageUploader;
