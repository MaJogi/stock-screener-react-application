import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

class AuthenticationService {
    registerUser(username, firstName, lastName, password) {
        return axios
            .post(API_URL + "signup", {
                username,
                firstName,
                lastName,
                password
            });
    }

    loginUser(username, password) {
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

    logoutUser() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getAuthHeader() {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.token) {
            return { Authorization: 'Bearer ' + user.token };
        } else {
            return {};
        }
    }
}
export default new AuthenticationService();