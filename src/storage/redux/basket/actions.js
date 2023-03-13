import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_BASKET,
  TOGGLE_BASKET_HIDDEN,
} from "./constants";

export const toggleBasketHidden = () => ({
  type: TOGGLE_BASKET_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});
export const clearItemFromBasket = (item) => ({
  type: CLEAR_ITEM_FROM_BASKET,
  payload: item,
});
