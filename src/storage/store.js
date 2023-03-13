import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./redux/basket/reducer";
import { itemsReducer } from "./redux/items/reducer";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    basket: basketReducer,
  },
});
