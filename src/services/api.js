import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restaurante-q52p.onrender.com'
});

export default api;
