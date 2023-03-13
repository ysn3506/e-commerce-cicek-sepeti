import API from "./BASE_API";
import { store } from "../storage/store";

export const getItems = (page = 1) => {
  const { categoryId } = store.getState().items;
  const path =
    categoryId === 0
      ? `/products?_page=${page}&&_limit=20`
      : `/products?categoryId=${categoryId}&_page=${page}&_limit=20`;
  return API.get(path);
};

export const getCategories = () => API.get("/categories");

export const searchItems = (keyword, page = 1) =>
  API.get(`/products?description_like=${keyword}&_page=${page}_limit=20`);

  export const findItem = (id) =>
    API.get(`/products?productId=${id}`);

export const searchQuery = (keyword, page = 1) =>
  API.get(`/products?q=${keyword}&_page=${page}_limit=20`);
