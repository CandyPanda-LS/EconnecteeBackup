import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default class LoginForm extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="container mt-5">
          <h5>LOGIN HERE !</h5>
        </div>
        <div className="container mt-3">
          <Form>
            <FormGroup className="mt-2">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup className="mt-2">
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </FormGroup>
            <a className="text-left" href="/">Forget password?</a>
            <FormGroup className="mt-2"><Button className="mt-2 loginBtn">Login</Button></FormGroup>
            
          </Form>
        </div>
        <div className="mt-2 mb-5">
          <p>or</p>
          <a href="/">Register Here !</a>
        </div>
      </div>
    );
  }
}
