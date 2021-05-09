import {
  GET_USER_DATA,
  LOG_OUT,
  UPDATE_USER_DATA,
} from "../../Action/Application/User/UserActionTypes";

const INITIAL_STATES = {
  isLoggedIn: true,
  userData: {
    userId: "",

    account: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      profilePic: "",
    },
    Cart: [
      { name: "", price: "", discount: "", quantity: "" },
      { name: "", price: "", discount: "", quantity: "" },
      { name: "", price: "", discount: "", quantity: "" },
      { name: "", price: "", discount: "", quantity: "" },
      { name: "", price: "", discount: "", quantity: "" },
    ],
    DeliveryAddresses: [{}, {}, {}],
    currentDeliveryAddress: {},
    prescriptions: [{ date: "", img: "", valid: false }, {}],
    Orders: [
      {
        orderId: "order1",
        ordereDateTime: "",
        shippingAddress: {},
        status: "delivered",
        whyFailed: "invalidOrder",
        shopName: "",
        expectedDeliveryDate: "",
        paymentMethod: "COD",
        referenceNumber: "",

        products: [{ name: "", price: "", discount: "", quantity: 5 }, {}, {}],
      },
    ],
    wallet: { accountBalance: "", transactions: [{}, {}, {}] },
    savedCards: [{ cardNumber: "", nameOnCard: "", cvv: "" }, {}],
  },
};
export const mainReducer = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case LOG_OUT:
      return (state = { ...state, isLoggedIn: action.payload });
    case GET_USER_DATA:
      return (state = { ...state, userData: action.products });
    case UPDATE_USER_DATA:
      return (state = { ...state, userData: action.products });
    // case GET_CART_ITEMS:
    //   return (state = { ...state, cartItems: action.cartItems });

    default:
      return state;
  }
};
