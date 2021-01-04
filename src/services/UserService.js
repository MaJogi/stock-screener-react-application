import axios from 'axios';
import AuthenticationService from "./AuthenticationService";

const API_URL = 'http://localhost:8080/';

class UserService {

    getUserContent(userId) {
        return axios
            .get(API_URL + 'users/'+ userId, { headers: AuthenticationService.getAuthHeader() });
    }

    addTicker(userId, tickerId) {
        return axios
            .post(API_URL + "users/" + userId + "/tickers",
                { tickerId },
                { headers: AuthenticationService.getAuthHeader() });
    }

    deleteTicker(userId, tickerId) {
        return axios
            .delete(API_URL + "users/" + userId + "/tickers/" + tickerId, { headers: AuthenticationService.getAuthHeader() });
    }
}
export default new UserService();