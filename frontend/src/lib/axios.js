import axios from "axios";
const BASE_URL=import.meta.env.MODE === "DEVELOPMENT" ? "http://localhost:5000/api" : "/api"
const api = axios.create({
  baseURL: BASE_URL, // Update this if your backend runs on a different port or path
});

export default api;
