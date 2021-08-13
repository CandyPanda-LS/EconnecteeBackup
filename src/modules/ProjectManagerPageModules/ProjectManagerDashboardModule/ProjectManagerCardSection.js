import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./ProjectManagerCardSection.css";

export default class EmployeeCardSection extends Component {
  render() {
    return (
      <div>
        <div className="row mt-4">
          <div className="col-lg-4 p-3">
            <Link to="/editprofile">
            <div className="card employeeDashboardCard boderRadiusCards">
              <div className="card-body employeeDashboardCardOne">
                <p className="employeeDashboardCardText">Profile</p>
                <p className="employeeDashboardCardText">Details</p>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-lg-4 p-3">
          <Link to="/projects">
            <div className="card employeeDashboardCard boderRadiusCards">
              <div className="card-body employeeDashboardCardTwo">
                <p className="employeeDashboardCardText">Project</p>
                <p className="employeeDashboardCardText">Details</p>
              </div>
            </div>
            </Link>
          </div> 
          <div className="col-lg-4 p-3">
          <Link to="/markattendence">
            <div className="card employeeDashboardCard boderRadiusCards">
              <div className="card-body employeeDashboardCardThree">
                <p className="employeeDashboardCardText">Mark</p>
                <p className="employeeDashboardCardText">Attendence</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
