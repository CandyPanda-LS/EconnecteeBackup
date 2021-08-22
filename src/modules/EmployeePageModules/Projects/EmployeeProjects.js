import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EmployeeProjects.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/EmployeeActions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

class EmployeeProjects extends Component {
  componentDidMount() {
    this.props.fetchEmployee();
  }

  render() {
    return (
      <div className="card mt-5 boderRadiusCards">
        <div className="card-body">
          <div>
            <div className="mt-2 text-center">
              <h1>ASSIGNED PROJECTS</h1>
            </div>
            <div className="row mb-5 p-4">
              {this.props.currentEmployee ? (
                this.props.currentEmployee.projectsList.map(
                  (singleproj, key) => {
                    return (
                      <div className="col-md-2">
                        <Link to={`/empsingleproject/${singleproj._id}`}>
                          <div className="card mt-5 boderRadiusCards empProjectCards">
                            <div className="card-body">
                              <h4>{singleproj.projectName}</h4>
                              <h6 className="empProjectCardsText mb-3">
                                {singleproj.descripton}
                              </h6>
                              <span
                                style={{
                                  color: "#FFFFFF",
                                  paddingRight: "10px",
                                  paddingLeft: "10px",
                                  fontSize: "25px",
                                  margin: "5px",
                                  borderRadius: "50%",
                                  backgroundColor: "#DB380A",
                                }}
                              >
                                {singleproj.sprintList ? "4" : ""}
                              </span>
                              <span
                                style={{
                                  color: "#FFFFFF",
                                  paddingRight: "10px",
                                  paddingLeft: "10px",
                                  fontSize: "25px",
                                  margin: "5px",
                                  borderRadius: "50%",
                                  backgroundColor: "#DF9E45",
                                }}
                              >
                                {singleproj.sprintList ? "4" : ""}
                              </span>
                              <span
                                style={{
                                  color: "#FFFFFF",
                                  paddingRight: "10px",
                                  paddingLeft: "10px",
                                  fontSize: "25px",
                                  margin: "5px",
                                  borderRadius: "50%",
                                  backgroundColor: "#028759",
                                }}
                              >
                                {singleproj.sprintList ? "4" : ""}
                              </span>
                              <h6 className="mt-3 p-0">Project Manager</h6>
                              <h6 className="empProjectCardsText p-0">
                                {singleproj.projectManager.name}
                              </h6>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  }
                )
              ) : (
                <div className="col-12 p-5">
                  <center>
                  <Loader
                    type="Grid"
                    color="#087E8B"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                  />
                  </center>

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentEmployee: state.employeeReducer.singleEmployee,
});

const mapActionToProps = {
  fetchEmployee: actions.fetchEmployee,
};
export default connect(mapStateToProps, mapActionToProps)(EmployeeProjects);
