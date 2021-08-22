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
      fetchAllEmployeeList: () => axios.get(baseUrl + "/api/employee/all"),
      deleteEmployee: (employeeId) => axios.delete(baseUrl + "/api/employee/" +employeeId ),
      updateEmployee: (employeeId,updateEmployeeDetails) =>
      axios.put(`${baseUrl}/api/employee/updateprofile/${employeeId}`, updateEmployeeDetails),
      register: (newEmployee) =>
        axios.post(baseUrl + "/api/employee/register", newEmployee),
      login: (loginEmployee) =>
        axios.post(baseUrl + "/api/employee/login", loginEmployee),
    };
  },
};
export default authEmployeeApi;