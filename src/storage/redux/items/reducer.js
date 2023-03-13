import constants from "./constants";

const INITIAL_STATE = {
    loading: false,
    error: false,
    categoryId: 0,
    products: [],
    categories: [],
    searchedKeyword: "",
  paginationIndex: 1,
    totalProductAmount:0,
    
}

export const itemsReducer = (state = INITIAL_STATE, action = {}) => {
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
    case constants.SET_TOTAL_PRODUCT_AMOUNT:
      return {
        ...state,
        totalProductAmount: action.payload,
      }
    case constants.SET_SEARCH_KEYWORD:
      return {
        ...state,
        searchedKeyword: action.payload,
      };
    case constants.SET_CATEGORY:
      return {
        ...state,
        categoryId: action.payload,
      };
    case constants.SET_PAGINATION_INDEX:
      return {
        ...state,
        paginationIndex:action.payload,
      }
    default:
      return state;
  }
};

