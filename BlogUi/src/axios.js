import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:6000/api",
});

export default instance;