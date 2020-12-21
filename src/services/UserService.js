import axios from 'axios';
import authHeader from './AuthenticationHeader';

const API_URL = 'http://localhost:8080/';

class UserService {
    getPublicContent() {
        return axios
            .get(API_URL + 'companies');
    }

    getCompanyById(ticker_id) {
        return axios
            .get(API_URL + 'companies/' + ticker_id);
    }

    getUserBoard(user_id) {
        return axios
            .get(API_URL + 'users/'+ user_id, { headers: authHeader() });
    }

    addTicker(user_id, tickerId) {
        return axios
            .post(API_URL + "users/" + user_id + "/tickers",
                { tickerId },
                { headers: authHeader() });
    }

    deleteTicker(user_id, ticker_id) {
        return axios
            .delete(API_URL + "users/" + user_id + "/tickers/" + ticker_id, { headers: authHeader() });
    }
}

export default new UserService();