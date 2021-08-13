import React, { Component } from 'react'
import ProjectsTable from "../../../modules/ProjectManagerPageModules/Projects/ProjectsTable";

export default class ProjectsPage extends Component {
    render() {
        return (
            <div className="container">
                <ProjectsTable />
            </div>
        )
    }
}
