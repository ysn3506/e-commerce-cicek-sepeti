import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_BASKET,
  TOGGLE_BASKET_HIDDEN,
} from "./constants";
import { addItemToBasket, removeItemFromBasket } from "./utils.js";

const initialState = {
  hidden: true,
  basketItems: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BASKET_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_ITEM:
      return {
        ...state,
        basketItems: addItemToBasket(state.basketItems, action.payload),
      };
    case CLEAR_ITEM_FROM_BASKET:
      return {
        ...state,
        basketItems: state.basketItems.filter(
          (basketItem) => basketItem.id !== action.payload.id
        ),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        basketItems: removeItemFromBasket(state.basketItems, action.payload),
      };
    default:
      return state;
  }
};


