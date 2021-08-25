import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import Clock from "react-live-clock";
import "./WebcamValidator.css";
import axios from "axios";
import { storage } from "../../../firebase";
import Progress from "../../../common/ProgressBar/progress";

export default function WebcamValidator(props) {
  //states for webcam
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState("");

  //states for send image to firebase

  const [imageURL, setImageURL] = useState("");
  const [uploadPercentage, setuploadPercentage] = useState(0);

  //states for send backend data
  const [userId, setuserId] = useState("");
  const [StateOfProcess, setStateOfProcess] = useState("");

  //method for capture an image Destop
  const captureImage = React.useCallback(async () => {
    const imageSrc = await webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    uploadImage(imageSrc);
    //console.log(imageSrc);
  }, [webcamRef, setImgSrc]);

  async function uploadImage(imgSrc) {
    if (imgSrc !== null) {
      const fileName = Math.floor(Math.random() * 100000 + 1) + ".jpg";
      const uploadTask = storage
        .ref(`facelogin/${fileName}`)
        .putString(imgSrc, "data_url", { contentType: "image/jpeg" });
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setuploadPercentage(progress);
        },
        (error) => {
          //error function
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref("facelogin")
            .child(fileName)
            .getDownloadURL()
            .then((urlFirebase) => {
              console.log("Image Url is = " + urlFirebase);
              setImageURL(urlFirebase);

              const config = {
                headers: {
                  "Content-Type": "application/json",
                  "Ocp-Apim-Subscription-Key":
                    "a680691db6174916bb8819e75475a406",
                },
              };

              const newImageDetails = {
                url: urlFirebase,
              };

              axios
                .post(
                  "https://eastus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&recognitionModel=recognition_03&returnRecognitionModel=false&detectionModel=detection_02&faceIdTimeToLive=86400",
                  newImageDetails,
                  config
                )
                .then(async (response) => {
                  console.log(
                    "Response for face detect is = " + response.data[0].faceId
                  );
                  setuserId(response.data[0].faceId);
                  //alert("Face Detect Successfully");
                  setStateOfProcess("Processing Your Face.....");

                  const newUserLogin = {
                    faceId: response.data[0].faceId,
                    largeFaceListId: "hexalist",
                    maxNumOfCandidatesReturned: 10,
                    mode: "matchPerson",
                  };

                  await axios
                    .post(
                      "https://eastus.api.cognitive.microsoft.com/face/v1.0/findsimilars",
                      newUserLogin,
                      config
                    )
                    .then((res) => {
                      console.log(res.data[0].persistedFaceId);

                      //alert("Face Verify Successfully");
                      setStateOfProcess("Please Wait...");

                      axios
                        .get(
                          process.env.REACT_APP_BACKEND_URL +
                            "/users/" +
                            res.data[0].persistedFaceId
                        )
                        .then((res) => {
                          console.log(res.data.userName);
                          if (!res.data) {
                            //alert("Authentication Failed..Try Again");
                            setStateOfProcess(
                              "Authentication Failed..Try Again..."
                            );
                          } else {
                            localStorage.setItem("UserID", res.data.userId);
                            localStorage.setItem("UserName", res.data.userName);
                            window.location = "/user";
                          }
                        })
                        .catch(() => {
                          //alert("Authentication Failed..Try Again");
                          setStateOfProcess(
                            "Authentication Failed..Try Again..."
                          );
                        });
                    })
                    .catch(() => {
                      //alert("Authentication Failed..Try Again");
                      setStateOfProcess("Authentication Failed..Try Again...");
                    });
                })
                .catch((err) => {
                  alert(err.message);
                });
            });
        }
      );
    } else {
      alert("First You Must Select An Image");
    }
  }

  return (
    <div>
      <div className="row text-center">
        <div className="col-md-12">
          <Webcam
            audio={false}
            ref={webcamRef}
            className="webcam"
            screenshotFormat="image/jpeg"
          />
        </div>
        <div className="col-md-12">
          <h1>
            <Clock format="HH:mm:ss" interval={1000} ticking={true} />
          </h1>
          <button className="btn webcamBtn" onClick={captureImage}>
            CONFIRM {props.timeSlot}
          </button>

          <div>
            <div class="form-group">
              <h3 style={{ color: "red" }}>{StateOfProcess}</h3>
              <img src={imgSrc} style={{ width: "300px" }} />{" "}
            </div>
            <br />
            <br />
            <div class="form-group">
              <Progress percentage={uploadPercentage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
