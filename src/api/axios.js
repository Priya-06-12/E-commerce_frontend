// import axios from "axios";

// const api = axios.create({
//   // baseURL: "/api/v1", 
//   baseURL: "https://e-commerce-backend2-1.onrender.com", 
//   withCredentials: true, 
// });

// export default api;




import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL + "/api/v1",
  withCredentials: true,
});

export default api;