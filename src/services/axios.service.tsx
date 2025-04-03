import axios from "axios";
import { getLocalStorage } from "../utilities/helpers";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 30000,
  timeoutErrorMessage: "Request Time out",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  let token = getLocalStorage("accessToken");
  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // return Promise.reject(error);
    if (error.response) {
      //handling
      const { data, status } = error.response;
      // if (status === 400) {
      //   //form
      // } else if (status === 401) {
      //   //unauthorized
      //   //TODO: implementation
      // } else if (status === 403) {
      //   //permission denied
      // } else {
      //   throw { data, status };
      // }
      // throw { data, status };
      return Promise.reject({ status, data });
    } else if (error.request) {
      return Promise.reject({ status: 500, data: error.message });
    } else {
      return Promise.reject({ status: 500, data: error.message });
    }
  }
);

export default axiosInstance;
