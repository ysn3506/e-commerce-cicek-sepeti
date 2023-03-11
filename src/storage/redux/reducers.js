import constants from "./contants";

const INITIAL_STATE = {
    loading: false,
    error: false,
    categoryId: 0,
    products:[]
    
}

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case constants.SET_LODING:
      return {
        ...state,
        loading: action.payload,
      };
    case constants.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case constants.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case constants.SET_CATEGORY:
      return {
        ...state,
        categoryId: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;