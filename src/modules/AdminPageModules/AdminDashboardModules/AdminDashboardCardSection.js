import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class AdminDashboardCardSection extends Component {
  render() {
    return (
      <div>
        <div className="row mt-4">
          <div className="col-lg-4 p-3">
            <Link to="/addemployee">
              <div className="card employeeDashboardCard boderRadiusCards">
                <div className="card-body employeeDashboardCardOne">
                  <p className="employeeDashboardCardText">Employee</p>
                  <p className="employeeDashboardCardText">Management</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 p-3">
            <Link to="/adminprojectsdashboard">
              <div className="card employeeDashboardCard boderRadiusCards">
                <div className="card-body employeeDashboardCardTwo">
                  <p className="employeeDashboardCardText">Project</p>
                  <p className="employeeDashboardCardText">Management</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 p-3">
            <Link to="/salarymanagement">
              <div className="card employeeDashboardCard boderRadiusCards">
                <div className="card-body employeeDashboardCardThree">
                  <p className="employeeDashboardCardText">Salary</p>
                  <p className="employeeDashboardCardText">Management</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
