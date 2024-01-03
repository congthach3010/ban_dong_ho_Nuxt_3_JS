import axios from "axios";
export const createApiToken = () => {
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;

  return axios.create({
    baseURL: "http://localhost:8000/api/admin",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
const api = createApiToken();
// Hàm chung để thêm token vào header
export const addTokenToRequest = (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};

// Thêm interceptor cho mọi yêu cầu
api.interceptors.request.use(addTokenToRequest, (error) => {
  return Promise.reject(error);
});

export default api;
