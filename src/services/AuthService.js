// src/services/AuthService.js

import axios from 'axios';

const url = 'http://94.74.86.174:8080/api/';

export default {
  login(credentials) {
    return axios
      .post(url + 'login/', credentials)
      .then(response => response.data);
  },
  register(credentials) {
    return axios
      .post(url + 'register/', credentials)
      .then(response => response.data);
  },
  getSecretContent() {
    return axios.get(url + 'secret-route/').then(response => response.data);
  }
};