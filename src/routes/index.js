import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "../common/NavbarComponent/NavbarComponent";
import EmployeeLoginPage from "../pages/Employee/EmployeeLoginPage/EmployeeLoginPage";
import AdminRegistrationPage from "../pages/Admin/AdminRegistrationPage/AdminRegistrationPage";
import AdminLoginPage from "../pages/Admin/AdminLoginPage/AdminLoginPage";
import PMLoginPage from "../pages/ProjectManager/PMLoginPage/PMLoginPage";
import EditProfile from "../pages/Employee/EditProfilePage/EditProfile";
import AddEmployeePage from "../pages/Admin/AddEmployeePage/AddEmployeePage";

export default class index extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <Router>
          <Route path="/" exact component={EmployeeLoginPage} />
          <Route path="/adminlogin" exact component={AdminLoginPage} />
          <Route path="/adminregister" exact component={AdminRegistrationPage} />
          <Route path="/addemployee" exact component={AddEmployeePage} />
          <Route path="/pmlogin" exact component={PMLoginPage} />
          <Route path="/editProfile" exact component={EditProfile} />
        </Router>
      </div>
    );
  }
}
