import React, { Component } from "react";
import "./SalaryManagementHeader.css";

export default class SalaryManagementHeader extends Component {
  render() {
    return (
      <div>
        <div className="row mt-5 SalaryManagementHeader">
          <div className="col-md-7 p-2">
            <h3>SALARY MANAGEMENT</h3>
          </div>
          <div className="col-md-3 p-2">
            <div class="searchTab">
              <input type="text" placeholder="Search.." />
              <button type="submit"><i class="bi bi-search"></i></button>
            </div>
          </div>
          <div className="col-md-2 p-2">
            <button className="btn empProjectTableBtn">Generate Report</button>
          </div>
        </div>
      </div>
    );
  }
}
