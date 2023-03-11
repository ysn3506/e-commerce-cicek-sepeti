import constants from "./constants";

const INITIAL_STATE = {
    loading: false,
    error: false,
    categoryId: 0,
    products: [],
    categories: []
    
}

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case constants.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case constants.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case constants.SET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload
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