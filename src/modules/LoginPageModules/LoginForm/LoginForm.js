import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/authActions";
import { Button, Form, FormGroup, Input } from "reactstrap";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {
      email: "",
      password: "",
      processStatus: false,
      processStatusAlert: "",
      processStatusMessage: "",
    };
  }

  onValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onLogin(e) {
    e.preventDefault();

    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Please Wait...",
    });

    const loginObj = {
      email: this.state.email,
      password: this.state.password,
    };
    if(this.props.role === "EMPLOYEE"){
      this.props.employeeLogin(
        loginObj,
        () => {
          this.setState({
            processStatusAlert: "alert alert-success",
            processStatusMessage: "Login successful",
          });
          window.location = "/employeedashboard";
        },
        () => {
          this.setState({
            processStatusAlert: "alert alert-danger",
            processStatusMessage:
              "Username or password incorrect. Please try again.",
          });
        }
      );
    }else if(this.props.role === "ADMIN"){
      this.props.adminLogin(
        loginObj,
        () => {
          this.setState({
            processStatusAlert: "alert alert-success",
            processStatusMessage: "Login successful",
          });
          window.location = "/admindashboard";
        },
        () => {
          this.setState({
            processStatusAlert: "alert alert-danger",
            processStatusMessage:
              "Username or password incorrect. Please try again.",
          });
        }
      );
    }else if(this.props.role === "PROJECT MANAGER"){
      this.props.projectManagerLogin(
        loginObj,
        () => {
          this.setState({
            processStatusAlert: "alert alert-success",
            processStatusMessage: "Login successful",
          });
          window.location = "/pmdashboard";
        },
        () => {
          this.setState({
            processStatusAlert: "alert alert-danger",
            processStatusMessage:
              "Username or password incorrect. Please try again.",
          });
        }
      );
    }

  }

  render() {
    return (
      <div className="container text-center">
        <div className="container mt-5">
          <h5> {this.props.role} LOGIN HERE !</h5>
        </div>
        <div className="container mt-3">
          <Form onSubmit={this.onLogin}>
            <FormGroup className="mt-2">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
              />
            </FormGroup>
            <FormGroup className="mt-2">
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  this.onValueChange(e);
                }}
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

const mapActionToProps = {
  employeeLogin: actions.employeeLogin,
  adminLogin: actions.adminLogin,
  projectManagerLogin: actions.productManagerLogin
};

export default connect(null, mapActionToProps)(LoginForm);