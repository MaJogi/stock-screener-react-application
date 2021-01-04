import axios from 'axios';

const API_URL = 'http://localhost:8080/';

class CompanyService {

    getAllCompanies() {
        return axios
            .get(API_URL + 'companies');
    }

    getCompanyById(tickerId) {
        return axios
            .get(API_URL + 'companies/' + tickerId);
    }
}
export default new CompanyService();