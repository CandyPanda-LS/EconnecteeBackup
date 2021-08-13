import React, { Component } from "react";
import FeebackTable from "./FeebackTable";
import SprintOverviewBarChar from "./SprintOverviewBarChar";
import TaskOverviewPieChart from "./TaskOverviewPieChart";

export default class EvaluateProjectDashboard extends Component {
  render() {
    return (
      <div>
        <div className="row mt-5">
          <div className="col-md-4 p-2"><TaskOverviewPieChart/></div>
          <div className="col-md-8 p-2"><SprintOverviewBarChar/></div>
          <div className="col-md-12 p-2"><FeebackTable/></div>
        </div>
      </div>
    );
  }
}
