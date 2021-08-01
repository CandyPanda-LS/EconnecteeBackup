import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "../common/NavbarComponent/NavbarComponent";
import EmployeeLoginPage from "../pages/EmployeeLoginPage/EmployeeLoginPage";
import AdminRegistrationPage from "../pages/AdminRegistrationPage/AdminRegistrationPage";
import AdminLoginPage from "../pages/AdminLoginPage/AdminLoginPage";

export default class index extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <Router>
            <Route path="/" exact component={EmployeeLoginPage} />
            <Route path="/adminReg" exact component={AdminRegistrationPage} />
            <Route path="/adminlogin" exact component={AdminLoginPage} />
        </Router>
      </div>
    );
  }
}
