import axios from 'axios';

const api = axios.create({
  baseURL: 'https://beta-repositorio.onrender.com'  // URL da sua API
});

export default api;