import React, { Component } from "react";
import "./EmployeeDashboardHeader.css";

export default class EmployeeDashboardHeader extends Component {

  render() {
    return (
      <div>
        {this.props.currentEmployee ? (
          <div className="mt-5">
            <div className="row">
              <div className="col-lg-6 mt-2">
                <div className="card boderRadiusCards">
                  <div className="card-body">
                    <div className="row p-2">
                      <div className="col-lg-6 empDashboardUserDetailsColOne">
                        <img
                          className="empDashboardImage img-fluid"
                          src={this.props.currentEmployee.profileImg}
                          alt="empImage"
                        />
                      </div>
                      <div className="col-lg-6 empDashboardUserDetailsTwo mt-2">
                        <h2>Hello</h2>
                        <h6>{this.props.currentEmployee.name}</h6>
                        <h6 className="text-muted">
                          {this.props.currentEmployee.username}
                        </h6>
                        <h6 className="text-muted">
                          {this.props.currentEmployee.department}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-2">
                <div className="card boderRadiusCards p-2">
                  <div className="card-body">
                    <h2>Other Information</h2>
                    <h6 className="text-muted">Salary for Month : 35 000/=</h6>
                    <h6 className="text-muted">Working Days - 28</h6>
                    <h6 className="text-muted">Current Leaves - 3</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
