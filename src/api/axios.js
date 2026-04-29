import axios from "axios";

import { tokenService } from "@utils";

export const api = axios.create({
  baseURL: "https://api.aroma.localhost.uz",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    const token = tokenService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      tokenService.clearTokens();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);