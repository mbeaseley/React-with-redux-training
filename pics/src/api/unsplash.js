import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c079f8864dbb2e4462fd33854d62e21aec777b5d99e59a4c7679bc661a328f1e',
  }
});
