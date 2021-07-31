import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "../common/NavbarComponent/NavbarComponent";
import EmployeeLoginPage from "../pages/EmployeeLoginPage/EmployeeLoginPage";

export default class index extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <Router>
          <Route path="/" exact component={EmployeeLoginPage} />
        </Router>
      </div>
    );
  }
}
