import { getCarUrl } from "../config/api.config";
import axiosRequest from "./api/api.interceptors";

export const carService = {
  async getAll() {
    const { data } = await axiosRequest({
      url: getCarUrl(""),
      method: "GET",
    });

    return data?.cars;
  },

  async create(data) {
    const response = await axiosRequest({
      url: getCarUrl(""),
      method: "POST",
      data,
    });

    return response?.data?.car;
  },

  async update(carId, data) {
    const response = await axiosRequest({
      url: getCarUrl(`/${carId}`),
      method: "PATCH",
      data,
    });

    return response?.data?.car;
  },

  async getById(carId) {
    const { data } = await axiosRequest({
      url: getCarUrl(`/${carId}`),
      method: "GET",
    });

    return data?.car;
  },

  async delete(carId) {
    const { data } = await axiosRequest({
      url: getCarUrl(`/${carId}`),
      method: "DELETE",
    });

    return data?.car;
  },
};
