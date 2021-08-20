import axios from "axios";
import authHeader from "./authHeader";
const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

const authEmployeeApi = {
  authEmployee() {
    return {
      getEmployeeDetails: () => axios.get(baseUrl + "/api/employee",config),
      register: (newEmployee) =>
        axios.post(baseUrl + "/api/employee/register", newEmployee),
      login: (loginEmployee) =>
        axios.post(baseUrl + "/api/employee/login", loginEmployee),
    };
  },
};
export default authEmployeeApi;
