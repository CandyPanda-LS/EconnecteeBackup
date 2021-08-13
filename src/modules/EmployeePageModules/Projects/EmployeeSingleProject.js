import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import FeedbackForm from "../../ProjectManagerPageModules/Feedback/FeedbackForm/FeedbackForm";
import DoneTasks from "./DoneTasks";
import InProgressTasks from "./InProgressTasks";
import TodoTask from "./TodoTask";

export default class EmployeeSingleProject extends Component {
  constructor(props) {
    super(props);
    this.toggleFeedbackForm = this.toggleFeedbackForm.bind(this);
    this.state = {
      modalFeedbackForm: false,
    };
  }

  toggleFeedbackForm = () => {
    this.setState({ modalFeedbackForm: !this.state.modalFeedbackForm });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-4 mb-2">
          <div className="col-md-12">
          <h1 className="text-left mb-4">ICAF PROJECT</h1>
          <button
            className="btn sprintTableBtn  mb-3"
            onClick={this.toggleFeedbackForm}
          >
            ADD FEEDBACK
          </button>
          </div>
 
          <div className="col-md-4">
            <TodoTask />
          </div>
          <div className="col-md-4">
            <InProgressTasks />
          </div>
          <div className="col-md-4">
            <DoneTasks />
          </div>
        </div>
        {/* Modals Section */}
        {/* Create Feedback form Modal */}
        <Modal
          isOpen={this.state.modalFeedbackForm}
          toggle={this.toggleFeedbackForm}
        >
          <ModalHeader toggle={this.toggleFeedbackForm}>
            Add Feedback
          </ModalHeader>
          <ModalBody>
            <FeedbackForm />
          </ModalBody>
        </Modal>

        {/* End of Modals Section */}
      </div>
    );
  }
}
