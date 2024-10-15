import { getBookUrl } from "../config/api.config";
import axiosRequest from "./api/api.interceptors";

export const bookService = {
  async create(data) {
    const response = await axiosRequest({
      url: getBookUrl(""),
      method: "POST",
      data,
    });

    return response?.data.book;
  },

  async getMy() {
    const { data } = await axiosRequest({
      url: getBookUrl("/get-my"),
      method: "GET",
    });

    return data?.books;
  },

  async getAll() {
    const { data } = await axiosRequest({
      url: getBookUrl(""),
      method: "GET",
    });

    return data?.books;
  },

  async updateStatus(bookId, status) {
    const { data } = await axiosRequest({
      url: getBookUrl(`/${bookId}`),
      method: "PATCH",
      data: { status },
    });

    return data?.book;
  },
};
