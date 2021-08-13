import React, { Component } from "react";
import { Button, Form, Label, FormGroup, Input } from "reactstrap";

export default class CreateSprintForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup className="mt-2">
            <Label for="startDate">Start Date</Label>
            <Input type="date" name="startDate" id="startDate" />
          </FormGroup>
          <FormGroup className="mt-2">
            <Label for="endDate">End Date</Label>
            <Input type="date" name="endDate" id="endDate" />
          </FormGroup>
          <FormGroup className="mt-2">
            <Button className="mt-2 modalCreateBtn">ADD</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
