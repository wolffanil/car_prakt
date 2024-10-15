import { getAuthUrl } from "../../config/api.config";
import axiosRequest from "../api/api.interceptors";
import { saveTokenStorage } from "./auth-token.service";

export const authService = {
  async main(type, data) {
    const response = await axiosRequest({
      url: getAuthUrl(`${type === "login" ? "/login" : "/register"}`),
      method: "POST",
      data,
    });

    if (response.data?.accessToken) saveTokenStorage(response.data.accessToken);

    return response.data.user;
  },

  async refesh() {
    const response = await axiosRequest({
      url: getAuthUrl("/refresh"),
      method: "POST",
    });

    if (response.data?.accessToken) saveTokenStorage(response.data.accessToken);

    return response.data;
  },
};
