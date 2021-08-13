import React, { Component } from "react";
import Webcam from "react-webcam";
import Clock from "react-live-clock";
import "./WebcamValidator.css";

export default class WebcamValidator extends Component {
  render() {
    return (
      <div>
        <div className="row text-center">
          <div className="col-md-12">
            <Webcam
              audio={false}
              className="webcam"
              screenshotFormat="image/jpeg"
            />
          </div>
          <div className="col-md-12">
            <h1>
              <Clock format="HH:mm:ss" interval={1000} ticking={true} />
            </h1>
            <button className="btn webcamBtn">CONFIRM {this.props.timeSlot}</button>
          </div>
        </div>
      </div>
    );
  }
}
