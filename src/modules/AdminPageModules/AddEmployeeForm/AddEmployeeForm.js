import React, { Component } from "react";
import "./AddEmployeeForm.css";
import { Button, Form, FormGroup, Input } from "reactstrap";

export class AddEmployeeForm extends Component {
  render() {
    return (
      <div>
        <div className="card boderRadiusCards cardAddEmployeeForm">
          <div className="card-body text-center">
            <div className="container mt-4">
              <h5>EMPLOYEE REGISTRATION !</h5>
            </div>
            <div className="container mt-3">
              <Form>
                <FormGroup className="mt-3">
                  <Input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <Input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Confirm password"
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                <Input type="select" name="position" id="position">
                  <option>Select the Position</option>
                  <option value="Intern Software Engineer">Intern Software Engineer</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Senior Software Engineer">Senior Software Engineer</option>
                  <option value="Business Analyst">Business Analyst</option>
                  <option value="Business Analyst">Intern Quality Engineer</option>
                  <option value="Business Analyst">Quality Engineer</option>
                </Input>
                </FormGroup>

                <FormGroup className="mt-4 mb-3">
                  <Button className="loginBtn">Register</Button>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEmployeeForm;