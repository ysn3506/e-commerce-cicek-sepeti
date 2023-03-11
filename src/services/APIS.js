import API from "./BASE_API";
import { store } from "../storage/store";

export const getItems = (page = 0) => {
  const { categoryId } = store.getState().items;
   const path =
     categoryId === 0
       ? `/products?_page=${page}&&_limit=20`
       : `/products?categoryId=${categoryId}&_page={page}&_limit=20`;
  return API.get(path);
};

export const getCategories = () =>  API.get("/categories");
