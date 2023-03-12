import { getCategories, getItems } from "../services/APIS";
import {
  setItems,
  setAllCategories,
  setError,
  setLoading,
} from "../storage/redux/actions";

export const updateProductList = (page=0, initial = false) =>
  new Promise((resolve, reject) => {
   if (!initial)  setLoading(true);
    getItems(page)
      .then((resp) => {
        setItems(resp.data);
      })
      .then(() => {
       if (!initial) setLoading(false);
        resolve();
      })
      .catch((err) => {
       if (!initial) setLoading(false);
        setError(true);
        reject();
        throw err;
      });
  });

export const loadCategories = () =>
  new Promise((resolve, reject) => {
    getCategories()
      .then((resp) => {
        setAllCategories(resp.data);
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        setAllCategories([]);
        setError(true);
        reject();
        throw err;
      });
  });

export const initializeApp = () => Promise.all([loadCategories(), updateProductList(0,true)]);
