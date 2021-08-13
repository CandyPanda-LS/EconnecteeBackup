import React, { Component } from 'react'
import { Button, Label, Form, FormGroup, Input } from "reactstrap";

export default class EditProjectForm extends Component {
    render() {
        return (
            <div>
            <Form>
              <FormGroup className="mt-2">
                <Label for="projectName">Project Name</Label>
                <Input type="text" name="projectName" id="projectName" />
              </FormGroup>
              <FormGroup className="mt-2">
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description" />
              </FormGroup>
              <FormGroup className="mt-2">
                <Label for="projectManager">Project Manager</Label>
                <Input type="select" name="projectManager" id="projectManager">
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
