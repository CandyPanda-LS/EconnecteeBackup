import React, { Component } from "react";
import "./EmployeeDashboardHeader.css";

export default class EmployeeDashboardHeader extends Component {

  render() {
    return (
      <div>
        {this.props.currentEmployee ? (
          <div className="mt-3">
            <div className="row">
              
              <div className="col-lg-3 mt-1">
                
                  <div className="card-body">
                    <div className="row p-2">
                      <div className="col empDashboardUserDetailsTwo mt-2">
                        <span className="display-5 fw-bold " >{`Hello!`}</span>
                        <h3>{this.props.currentEmployee.name}</h3>
                        <h6 className="text-muted">
                          {`${this.props.currentEmployee.username} - ${this.props.currentEmployee.department}`}
                        </h6>
                        <h6  style={{color: "#087E8B"}}>
                          Salary for Month : 35 000/=
                        </h6>
                        <h6 className="text-muted">
                          Working Days - 28
                        </h6>
                        <h6 className="text-muted">
                          Current Leaves - 3
                        </h6>
                      </div>
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
