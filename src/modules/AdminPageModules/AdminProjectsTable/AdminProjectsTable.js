import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import AddProjectForm from "../AddProjectForm/AddProjectForm";
import EditProjectForm from "../EditProjectForm/EditProjectForm";

export default class AdminProjectsTable extends Component {
  constructor(props) {
    super(props);

    this.toggleCreateProject = this.toggleCreateProject.bind(this);
    this.toggleEditProject = this.toggleEditProject.bind(this);

    this.state = {
      modalCreateProject: false,
      modalEditProject: false,
    };
  }

  toggleCreateProject = () => {
    this.setState({
      modalCreateProject: !this.state.modalCreateProject,
    });
  };

  toggleEditProject = () => {
    this.setState({
      modalEditProject: !this.state.modalEditProject,
    });
  };

  render() {
    return (
      <div className="card mt-5 boderRadiusCards">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <h5>10 Projects</h5>
            </div>
            <div className="col-md-4">
              <button className="btn sprintTableBtn">Generate Report</button>
              <button
                className="btn sprintTableBtn"
                onClick={this.toggleCreateProject}
              >
                Create
              </button>
            </div>
            <hr />
          </div>
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>
                  <h6>P001</h6>
                </td>
                <td>
                  <h6>DevGenix</h6>
                </td>
                <td>
                  <h6>Senura Jayadeva</h6>
                </td>
                <td>
                  <button className="btn btn-primary empTableBtn" onClick={this.toggleEditProject}>
                    <i class="bi bi-gear-fill"></i>
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger empTableBtn">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>P001</h6>
                </td>
                <td>
                  <h6>DevGenix</h6>
                </td>
                <td>
                  <h6>Senura Jayadeva</h6>
                </td>
                <td>
                  <button className="btn btn-primary empTableBtn" onClick={this.toggleEditProject}>
                    <i class="bi bi-gear-fill"></i>
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger empTableBtn">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>P001</h6>
                </td>
                <td>
                  <h6>DevGenix</h6>
                </td>
                <td>
                  <h6>Senura Jayadeva</h6>
                </td>
                <td>
                  <button className="btn btn-primary empTableBtn" onClick={this.toggleEditProject}>
                    <i class="bi bi-gear-fill"></i>
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger empTableBtn">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>P001</h6>
                </td>
                <td>
                  <h6>DevGenix</h6>
                </td>
                <td>
                  <h6>Senura Jayadeva</h6>
                </td>
                <td>
                  <button className="btn btn-primary empTableBtn" onClick={this.toggleEditProject}>
                    <i class="bi bi-gear-fill"></i>
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger empTableBtn">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>P001</h6>
                </td>
                <td>
                  <h6>DevGenix</h6>
                </td>
                <td>
                  <h6>Senura Jayadeva</h6>
                </td>
                <td>
                  <button className="btn btn-primary empTableBtn" onClick={this.toggleEditProject}>
                    <i class="bi bi-gear-fill"></i>
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger empTableBtn">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>P001</h6>
                </td>
                <td>
                  <h6>DevGenix</h6>
                </td>
                <td>
                  <h6>Senura Jayadeva</h6>
                </td>
                <td>
                  <button className="btn btn-primary empTableBtn" onClick={this.toggleEditProject}>
                    <i class="bi bi-gear-fill"></i>
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger empTableBtn">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Modals Section */}

        {/* Create Project Modal */}
        <Modal
          isOpen={this.state.modalCreateProject}
          toggle={this.toggleCreateProject}
        >
          <ModalHeader toggle={this.toggleCreateProject}>
            CREATE A PROJECT
          </ModalHeader>
          <ModalBody>
            <AddProjectForm />
          </ModalBody>
        </Modal>

        {/* Edit Project Moda */}
        <Modal
          isOpen={this.state.modalEditProject}
          toggle={this.toggleEditProject}
        >
          <ModalHeader toggle={this.toggleEditProject}>
            EDIT PROJECT
          </ModalHeader>
          <ModalBody>
            <EditProjectForm />
          </ModalBody>
        </Modal>

        {/* End of Modals Section */}
      </div>
    );
  }
}
