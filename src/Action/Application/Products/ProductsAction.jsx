import Axios from "axios";
import { GET_CART_ITEMS, GET_PRODUCTS } from "./ProductsActionTypes";
const endPoint = "http://localhost:8000";
export const getProducts = (dispatch) => {
  Axios.get(`${endPoint}/products`).then((res) =>
    dispatch({
      type: GET_PRODUCTS,
      products: res.data,
    })
  );
};
export const getCartItems = (dispatch) => {
  Axios.get(`${endPoint}/cartItems`).then((res) =>
    dispatch({
      type: GET_CART_ITEMS,
      cartItems: res.data,
    })
  );
};
