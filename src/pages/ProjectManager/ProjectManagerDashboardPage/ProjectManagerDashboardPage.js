import React, { Component } from "react";
import ProjectManagerDashboardHeader from "../../../modules/ProjectManagerPageModules/ProjectManagerDashboardModule/ProjectManagerDashboardHeader"
import ProjectManagerCardSection from "../../../modules/ProjectManagerPageModules/ProjectManagerDashboardModule/ProjectManagerCardSection"

export default class ProjectManagerDashboardPage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ProjectManagerDashboardHeader />
            </div>
            <div className="col-lg-12">
              <ProjectManagerCardSection />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
