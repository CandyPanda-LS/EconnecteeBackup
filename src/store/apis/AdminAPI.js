import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const authAdminApi = {
    authAdmin() {
        return {
            getAdminDetails: () => axios.get(baseUrl + "/api/admin"),
            register: (newAdmin) =>
                axios.post(baseUrl + "/api/admin/register", newAdmin),
            login: (loginAdmin) => axios.post(baseUrl + "/api/admin/login", loginAdmin),
        };
    },
};
export default authAdminApi;
