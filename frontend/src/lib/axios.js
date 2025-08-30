import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Update this if your backend runs on a different port or path
});

export default api;
