import { getPhotoUrl } from "../config/api.config";
import axiosRequest from "./api/api.interceptors";

export const photoService = {
  async uploadPhoto(file, folder) {
    const { data } = await axiosRequest({
      url: getPhotoUrl("/uploadPhoto"),
      method: "POST",
      data: file,
      params: { folder },
      headers: { "Content-Type": "multipart/form-data" },
    });

    return data.imageUrl;
  },
};
