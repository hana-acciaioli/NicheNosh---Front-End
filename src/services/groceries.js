import axios from 'axios';
import { checkError } from './client.js';
const API_URL = 'http://localhost:3000/api/groceries';

class GroceriesService {
  getGroceries() {
    return axios.get(API_URL);
  }

  //   get(id) {
  //     return axios.get(`${API_URL}/${id}`);
  //   }

  createGrocery(data) {
    return axios.post(API_URL, data);
  }

  update(id, data) {
    return axios.put(`${API_URL}/${id}`, data);
  }

  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new GroceriesService();
