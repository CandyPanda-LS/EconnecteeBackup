import React, { Component } from "react";
import AttendenceHistory from "../../../modules/EmployeePageModules/Attendence/AttendenceHistory";
import MarkAttendenceForm from "../../../modules/EmployeePageModules/Attendence/MarkAttendenceForm";
import ProfileDetails from "../../../modules/EmployeePageModules/Attendence/ProfileDetails";

export default class AttendencePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4"><ProfileDetails/></div>
          <div className="col-md-8"><MarkAttendenceForm/></div>
          <div className="col-md-4"></div>
          <div className="col-md-8"><AttendenceHistory/></div>
        </div>
      </div>
    );
  }
}
