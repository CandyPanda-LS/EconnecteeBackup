import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "../common/NavbarComponent/NavbarComponent";
import EmployeeLoginPage from "../pages/EmployeeLoginPage/EmployeeLoginPage";
import AdminRegistrationPage from "../pages/AdminRegistrationPage/AdminRegistrationPage";
import AdminLoginPage from "../pages/AdminLoginPage/AdminLoginPage";
import PMLoginPage from "../pages/PMLoginPage/PMLoginPage";
import EditProfile from "../pages/EditProfilePage/EditProfile";

export default class index extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <Router>
            <Route path="/" exact component={EmployeeLoginPage} />
            <Route path="/adminlogin" exact component={AdminLoginPage} />
            <Route path="/pmlogin" exact component={PMLoginPage} />
            <Route path="/adminReg" exact component={AdminRegistrationPage} />
            <Route path="/editProfile" exact component={EditProfile} />

        </Router>
      </div>
    );
  }
}
