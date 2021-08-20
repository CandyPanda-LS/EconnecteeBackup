import axios from "axios";
import authHeader from "./authHeader";
const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

const authProductManagerApi = {
  authProductManager() {
    return {
      getProductManagerDetails: () => axios.get(baseUrl + "/api/projectmanager",config),
      register: (newProductManager) =>
        axios.post(baseUrl + "/api/projectmanager/register", newProductManager),
      login: (loginProductManager) =>
        axios.post(baseUrl + "/api/projectmanager/login", loginProductManager),
    };
  },
};
export default authProductManagerApi;
