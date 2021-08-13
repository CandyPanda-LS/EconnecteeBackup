import React, { Component } from 'react'
import AdminProjectsTable from '../../../modules/AdminPageModules/AdminProjectsTable/AdminProjectsTable'

export default class AdminProjectsPage extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="text-center">
                    <span className="display-3">ADMIN PROJECT MANAGEMENT</span>
                </div>
                <AdminProjectsTable/>
            </div>
        )
    }
}
