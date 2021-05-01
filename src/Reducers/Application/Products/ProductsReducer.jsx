const {
  GET_CART_ITEMS,
  GET_PRODUCTS,
} = require("../../../Action/Application/Products/ProductsActionTypes");

const INITIAL_STATES = {
  products: [],
  cartItems: [],
};
export const productsReducer = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return (state = { ...state, products: action.products });
    case GET_CART_ITEMS:
      return (state = { ...state, cartItems: action.cartItems });

    default:
      return state;
  }
};
