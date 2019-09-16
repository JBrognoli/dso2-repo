import axios from 'axios';

/**
 * Cria a instância do axios, podendo setar diversas configs, como headers, endpoint, etc..
 */

const client = axios.create({
  baseURL: 'http://localhost:3333'
});

export default client
