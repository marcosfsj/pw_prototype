import axios from 'axios';

const backend = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  headers: {
    Authorization: 'ddfadfdfdf45d4f5d4f5d'
  }
});

export default backend;
