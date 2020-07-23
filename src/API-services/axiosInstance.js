import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:80",
  timeout: 10000,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance