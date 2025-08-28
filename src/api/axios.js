import axios from "axios";

const api = axios.create({
  // baseURL: "/api/v1", 
  baseURL: "https://e-commerce-backend2-1.onrender.com", 
  withCredentials: true, 
});

export default api;
