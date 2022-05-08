import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'Production'
    ? 'http://localhost:3001/'
    : 'http://localhost:3001/';
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
