import React, { Component } from "react";
import { connect } from "react-redux";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import AddedItem from "./AddedItem";
import PaymentPage from "./PaymentPage";
import { getCartItems } from "../../../../Action/Application/Products/ProductsAction";

class Cart extends Component {
  state = {};
  componentDidMount() {
    this.props.getCartItems();
  }
  render() {
    const { cartItems } = this.props;
    console.log(this.props.cartItems);
    return (
      <div style={{ marginTop: 20 }}>
        <GridContainer>
          <GridItem md={2}> </GridItem>
          <GridItem>
            <span style={{ fontSize: 24, fontWeight: 600 }}>
              Cart &mdash; {cartItems.length}
            </span>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem md={6}>
            {cartItems.map((product) => (
              <AddedItem item={product} />
            ))}

            <GridContainer justify="center">
              <Button
                simple
                color="info"
                size="lg"
                style={{
                  padding: 0,
                  textTransform: "capitalize",
                  fontSize: 16,
                }}
              >
                Continue Shopping
              </Button>
            </GridContainer>
          </GridItem>
          <GridItem md={3}>
            <PaymentPage />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.productsReducer.cartItems,
    accountId: state.authReducer.auth.account.accountId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCartItems: () => getCartItems(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
