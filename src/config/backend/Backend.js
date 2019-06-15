import axios from 'axios';

const Backend = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Authorization: 'ddfadfdfdf45d4f5d4f5d'
  }
});

export default Backend;
