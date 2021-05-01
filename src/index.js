import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./rootredux/store";
import Item from "./Application/Components/Products/Item";
import ItemDetails from "./Application/Components/Products/ItemDetails";
import CheckAvailability from "./Application/Components/Products/CheckAvailability";
import PaymentPage from "./Application/Components/Products/Cart/PaymentPage";
import AddedItem from "./Application/Components/Products/Cart/AddedItem";
import ProductPage from "./Application/Components/Products/ProductPage";
import BrandList from "./Application/Components/Brands/BrandsList";
import Cart from "./Application/Components/Products/Cart/Cart";
import TopHeader from "./Application/Homepage/Menu/TopHeader";
import AllMedicine from "./Application/Components/Products/AllMedicines";
import UploadPx from "./Application/Homepage/Upload/UploadPx";
const hist = createBrowserHistory();

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <Router history={hist}>
        <App />
      </Router>
    </Provider>
  </Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
