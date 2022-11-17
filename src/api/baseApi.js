import axios from 'axios';

const { VITE_API_URL } =  import.meta.env;


const criptosApi = axios.create({
  baseURL: "https://api.coinlore.net/api/tickers/"
});

// ?start=100&limit=100

export default criptosApi;