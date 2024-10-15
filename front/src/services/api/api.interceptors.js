import axios from "axios";
import { API_URL } from "../../config/api.config";
import { getAccessToken } from "../auth/auth-token.service";

const options = {
  baseURL: API_URL,
  headers: "Content-type: application/json",
};

const axiosRequest = axios.create(options);

axiosRequest.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken) {
    config.headers.authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default axiosRequest;
