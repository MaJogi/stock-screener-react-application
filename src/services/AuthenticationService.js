import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

class AuthenticationService {
    login(username, password) {
        return axios
            .post(API_URL + "login", {
                username,
                password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, firstName, lastName, password) {
        return axios
            .post(API_URL + "signup", {
                username,
                firstName,
                lastName,
                password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}
export default new AuthenticationService();