import React, { Component } from "react";
import { Button, Form, Label, FormGroup, Input } from "reactstrap";

export default class FeedbackForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup className="mt-2">
            <Label for="feedback">Add Feedback</Label>
            <Input type="textarea" name="feedback" id="feedback" />
          </FormGroup>
          <FormGroup className="mt-2">
            <Button className="mt-2 modalCreateBtn">ADD</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
