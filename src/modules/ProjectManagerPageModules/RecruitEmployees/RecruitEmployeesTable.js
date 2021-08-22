import React, { Component } from "react";
import { connect } from "react-redux";
import * as projectActions from "../../../store/actions/ProjectActions";

class RecruitEmployeesTable extends Component {
  constructor(props) {
    super(props);
    this.OnAddEmployeeToProject = this.OnAddEmployeeToProject.bind(this);
    this.state = {
      existEmpArray:[]
    }
  }

 componentDidMount(){
    let localArray = [];
    this.props.empListInProject.map((employee) => {
      localArray.push(employee._id);
    });
    this.setState({existEmpArray:localArray});
  }

  OnAddEmployeeToProject(empId) {
    const employeeObj = {
      employee:{
        _id: empId
      }
    };
    console.log(employeeObj)
    this.props.addEmployeeToProject(
      this.props.projectId,
      employeeObj,
      () => {},
      () => {}
    );
  }

  render() {
    return (
      <div>
        <div className="row mt-5 mb-5">
          <h1 className="text-center">Recruit Employees</h1>
          <div className="col-md-12 mt-2">
            <div className="card mt-3 boderRadiusCards">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h5>Development</h5>
                  </div>
                </div>
                <table className="table table-hover">
                  <tbody>
                    {this.props.employeeList.map((employee, index) => {
                      if (employee.department === "Development") {
                        return (
                          <tr>
                            <td>{++index}</td>
                            <td>{employee.username}</td>
                            <td>{employee.name}</td>
                            <td>
                              {this.state.existEmpArray.includes(employee._id) ? (
                                <button className="btn btn-danger empTableBtn">
                                  <i class="bi bi-dash-lg"></i>
                                </button>
                              ) : (
                                <button
                                  className="btn btn-primary empTableBtn"
                                  onClick={() => {
                                    this.OnAddEmployeeToProject(employee._id);
                                  }}
                                >
                                  <i class="bi bi-plus-lg"></i>
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div className="card mt-3 boderRadiusCards">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h5>Marketing</h5>
                  </div>
                </div>
                <table className="table table-hover">
                  <tbody>
                    {this.props.employeeList.map((employee, index) => {
                      if (employee.department === "Marketing") {
                        return (
                          <tr>
                            <td>{++index}</td>
                            <td>{employee.username}</td>
                            <td>{employee.name}</td>
                            <td>
                              {this.state.existEmpArray.includes(employee._id)? (
                                <button className="btn btn-danger empTableBtn">
                                  <i class="bi bi-dash-lg"></i>
                                </button>
                              ) : (
                                <button
                                  className="btn btn-primary empTableBtn"
                                  onClick={() => {
                                    this.OnAddEmployeeToProject(employee._id);
                                  }}
                                >
                                  <i class="bi bi-plus-lg"></i>
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-2">
            <div className="card mt-3 boderRadiusCards">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <h5>Quality Assurance</h5>
                  </div>
                </div>
                <table className="table table-hover">
                  <tbody>
                    {this.props.employeeList.map((employee, index) => {
                      if (employee.department === "Quality Assurance") {
                        return (
                          <tr>
                            <td>{++index}</td>
                            <td>{employee.username}</td>
                            <td>{employee.name}</td>
                            <td>
                              {this.state.existEmpArray.includes(employee._id) ? (
                                <button className="btn btn-danger empTableBtn">
                                  <i class="bi bi-dash-lg"></i>
                                </button>
                              ) : (
                                <button
                                  className="btn btn-primary empTableBtn"
                                  onClick={() => {
                                    this.OnAddEmployeeToProject(employee._id);
                                  }}
                                >
                                  <i class="bi bi-plus-lg"></i>
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapActionToProps = {
  addEmployeeToProject: projectActions.addEmployeeToProject,
};

export default connect(null, mapActionToProps)(RecruitEmployeesTable);
