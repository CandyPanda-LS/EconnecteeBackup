import React, { Component } from "react";
import EmployeeCardSection from "../../../modules/EmployeePageModules/EmployeeDashboardModule/EmployeeCardSection";
import EmployeeDashboardHeader from "../../../modules/EmployeePageModules/EmployeeDashboardModule/EmployeeDashboardHeader";

export default class EmployeeDashboard extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12"><EmployeeDashboardHeader/></div>
            <div className="col-lg-12"><EmployeeCardSection/></div>
          </div>
        </div>
      </div>
    );
  }
}
