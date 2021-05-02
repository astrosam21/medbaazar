import Axios from "axios";
import { GET_CART_ITEMS, GET_PRODUCTS } from "./ProductsActionTypes";
const endPoint = "http://f5c4ebb40727.ngrok.io";

const endPoint111 = "http://f5c4ebb40727.ngrok.io";
const endpoint11 = `https://my-json-server.typicode.com/astrosam21/jsonserver/db`;
export const getProducts = (dispatch) => {
  // var headers = {
  //   Authorization: `${localStorage.getItem("token")}`,
  // };
  // Axios.defaults.headers = headers;
  Axios.get(`${endPoint}/searchProducts`).then((res) =>
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
