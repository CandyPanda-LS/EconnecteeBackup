import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/SprintActions";
import * as projectActions from "../../../../store/actions/ProjectActions";
import { Button, Form, Label, FormGroup, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.onCreateFeedback = this.onCreateFeedback.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      feedback: "",
    };
  }

  onCreateFeedback(e) {
    e.preventDefault();

    const newFeedback = {
      feedback: this.state.feedback,
    };
    this.props.addFeedback(
      this.props.sprintId,
      newFeedback,
      () => {
        this.props.fetchProjectById(this.props.projectId);
        toast.success("Issue Created", {
          autoClose: 2000,
        });
      },
      () => {
        toast.error("Something went wrong", {
          autoClose: 2000,
        });
      }
    );
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onCreateFeedback}>
          <FormGroup className="mt-2">
            <Label for="feedback">Add Feedback</Label>
            <Input
              type="textarea"
              name="feedback"
              id="feedback"
              onChange={(e) => {
                this.onValueChange(e);
              }}
            />
          </FormGroup>
          <FormGroup className="mt-2">
            <Button className="mt-2 modalCreateBtn">ADD</Button>
          </FormGroup>
        </Form>
        <ToastContainer/>
      </div>
    );
  }
}

const mapActionToProps = {
  addFeedback: actions.addFeedback,
  fetchProjectById: projectActions.fetchProjectById
};
export default connect(null, mapActionToProps)(FeedbackForm);