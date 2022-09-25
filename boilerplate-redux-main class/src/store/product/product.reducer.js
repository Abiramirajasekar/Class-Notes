// Note: Do not update/change the initial state
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (
  state = productInitalState,
  { type, payload }
) => {
  switch (type) {
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        data: payload,
      };
    }

    default: {
      return state;
    }
  }
};
