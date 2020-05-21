import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_HOST || "http://localhost:3333",
});

export default api;
