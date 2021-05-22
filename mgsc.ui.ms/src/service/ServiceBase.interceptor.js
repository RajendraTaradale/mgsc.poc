import Axios from "axios";
const Myapi = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {'mgsc': 'mgsc2021'}
});

export default Myapi;
