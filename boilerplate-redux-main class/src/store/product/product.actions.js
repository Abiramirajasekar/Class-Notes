// Product actions here
import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
} from "./product.types";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let r = await axios.get("http://localhost:8080/products");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: r.data });
    return r.data;
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};
