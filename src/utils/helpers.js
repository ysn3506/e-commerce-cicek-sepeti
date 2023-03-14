import {
  getCategories,
  getItems,
  searchQuery,
  findItem,
} from "../services/APIS";
import {
  setItems,
  setAllCategories,
  setError,
  setLoading,
  setPaginationIndex,
  setTotalProductAmount,
} from "../storage/redux/items/actions";
import { store } from "../storage/store";

export const updateProductList = (page = 1, initial = false) =>
  new Promise((resolve, reject) => {
    if (!initial) setLoading(true);
    if (page === -1) resolve();
    getItems(page)
      .then((resp) => {
        setTotalProductAmount(Number(resp.headers["x-total-count"]));
        const { products, totalProductAmount } = store.getState().items;
        let items = [...products];
        if (products.length < totalProductAmount && page !== 1) {
          items = [...products, ...resp.data];
        } else if (page === 1) {
          items = [...resp.data];
        }
        if (resp.data.length === 0) setPaginationIndex(-1);
        setItems(items);
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

export const findProductFromSearch = (id) =>
  new Promise((resolve, reject) => {
    setLoading(true);
    findItem(id)
      .then((resp) => {
        setTotalProductAmount(Number(resp.headers["x-total-count"]));
        setItems(resp.data);
      })
      .then(() => {
        setLoading(false);
        resolve();
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        reject();
        throw err;
      });
  });

export const querySearchResults = (keyword, page = 1) =>
  new Promise((resolve, reject) => {
    setLoading(true);
    searchQuery(keyword, page)
      .then((resp) => {
        setTotalProductAmount(Number(resp.headers["x-total-count"]));
        const { products, totalProductAmount } = store.getState().items;
        let items = [...products];
        if (products.length < totalProductAmount && page !== 1) {
          items = [...products, ...resp.data];
        } else if (page === 1) {
          items = [...resp.data];
        }
        if (resp.data.length === 0) setPaginationIndex(-1);
        setItems(items);
      })
      .then(() => {
        setLoading(false);
        resolve();
      })
      .catch((err) => {
        setLoading(false);
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

export const initializeApp = () =>
  Promise.all([loadCategories(), updateProductList(1, true)]);

export const calculateBasketTotalCost = () => {
  const basketItems = store.getState().basket.basketItems;
  const priceList = basketItems.map((item) => item.quantity * item.price);
  return priceList.reduce((a, b) => a + b, 0).toFixed(2);
};
