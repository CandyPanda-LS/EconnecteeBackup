import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProjectCardSection.css";

export default class ProjectCardSection extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row mt-4">
            <div className="col-lg-4 p-3">
              <Link to="/addmemberproject">
                <div className="card projectDashboardCard boderRadiusCards">
                  <div className="card-body projectDashboardCardOne">
                    <p className="projectDashboardCardText">Recruit</p>
                    <p className="projectDashboardCardText">Employees</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 p-3">
              <Link to="/sprintbacklog">
                <div className="card projectDashboardCard boderRadiusCards">
                  <div className="card-body projectDashboardCardTwo">
                    <p className="projectDashboardCardText">Sprint</p>
                    <p className="projectDashboardCardText">Management</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 p-3">
              <Link to="/evaluateemployee">
                <div className="card projectDashboardCard boderRadiusCards">
                  <div className="card-body projectDashboardCardThree">
                    <p className="projectDashboardCardText">Evaluate</p>
                    <p className="projectDashboardCardText">Employee</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 p-3">
              <Link to="/evaluateproject">
                <div className="card projectDashboardCard boderRadiusCards">
                  <div className="card-body projectDashboardCardFour">
                    <p className="projectDashboardCardText">Evaluate</p>
                    <p className="projectDashboardCardText">Project</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
