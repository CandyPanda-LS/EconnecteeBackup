import React, { Component } from 'react'
import { Button, Form, Label, FormGroup, Input } from "reactstrap";

export default class EditIssueForm extends Component {
    render() {
        return (
            <div>
            <Form>
              <FormGroup className="mt-2">
                <Label for="issueName">Issue Name</Label>
                <Input type="text" name="issueName" id="issueName" />
              </FormGroup>
              <FormGroup className="mt-2">
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description" />
              </FormGroup>
              <FormGroup className="mt-2">
                <Label for="points">Points</Label>
                <Input type="number" name="points" id="points" />
              </FormGroup>
              <FormGroup className="mt-2">
                <Label for="estimatedDates">Estimated Dates</Label>
                <Input type="number" name="estimatedDates" id="estimatedDates" />
              </FormGroup>
              <FormGroup className="mt-2">
                <Label for="assignee">Assignee</Label>
                <Input type="select" name="assignee" id="assignee">
                  <option>Select an assignee</option>
                  <option value="Senura">Senura</option>
                  <option value="Lasal">Lasal</option>
                  <option value="Dilmi">Dilmi</option>
                  <option value="Ayodya">Ayodya</option>
                </Input>
              </FormGroup>
              <FormGroup className="mt-2">
                <Button className="mt-2 modalCreateBtn">EDIT</Button>
              </FormGroup>
            </Form>
          </div>
        )
    }
}
