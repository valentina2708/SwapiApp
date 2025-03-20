
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com/', // URL base de la API externa
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;