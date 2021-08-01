import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "../common/NavbarComponent/NavbarComponent";
import EmployeeLoginPage from "../pages/EmployeeLoginPage/EmployeeLoginPage";
import AdminLoginPage from "../pages/AdminLoginPage/AdminLoginPage";
import PMLoginPage from "../pages/PMLoginPage/PMLoginPage";

export default class index extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <Router>
          <Route path="/" exact component={EmployeeLoginPage} />
          <Route path="/adminlogin" exact component={AdminLoginPage} />
          <Route path="/pmlogin" exact component={PMLoginPage} />
        </Router>
      </div>
    );
  }
}
