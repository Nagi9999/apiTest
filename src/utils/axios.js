import axios from "axios";
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
instance.interceptors.request.use((config) => {
  config.headers["Accept-Language"];
  return config;
});
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.defaults.headers.post["Accept"] = "*/*";
export default instance;