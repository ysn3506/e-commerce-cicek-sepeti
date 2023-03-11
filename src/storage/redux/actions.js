import constants from "./constants";
import { store } from "../store";


const callAction = (type, data) =>
  store.dispatch({ type: type, payload: data });

export const setItems = (data) => callAction(constants.SET_PRODUCTS, data);

export const setLoading = (bool) => callAction(constants.SET_LOADING, bool);

export const setError = (bool) => callAction(constants.SET_ERROR, bool);

export const setAllCategories = (data) => callAction(constants.SET_ALL_CATEGORIES, data);

export const setSelectedCategory = (data=0) =>callAction(constants.SET_CATEGORY, data);