import React, { Component } from "react";
import { connect } from "react-redux";
import Mask from "./masks.jpg";
import Item from "./Item";
import Card from "components/Card/Card";
import { getProducts } from "../../../Action/Application/Products/ProductsAction";
class ProductPage extends Component {
  state = {
    category: "covid_essentials",
    categoryName: "Covid Essentials",
    currentNeed: "SHOP NOW",
  };
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { category, categoryName, currentNeed } = this.state;
    const { products } = this.props;
    console.log(products);
    return (
      <Card style={{ padding: 10, margin: 20 }}>
        <div style={{ color: "#808080" }}>{currentNeed} </div>
        <div style={{ fontSize: 20 }}> {categoryName} </div>
        <div
          style={{
            background: "#fafafa",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {products.map((product) => (
            <Item product={product} />
          ))}
        </div>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
    accountId: state.authReducer.auth.account.accountId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => getProducts(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
