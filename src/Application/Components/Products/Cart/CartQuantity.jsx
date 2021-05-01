import React, { Component } from "react";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import { withRouter } from "react-router-dom";

class CartQuantity extends Component {
  state = {};
  render() {
    return (
      <Card style={{ padding: 15 }}>
        <div style={{ color: "#808080" }}>{"IN CART"}</div>
        <div style={{ fontSize: 20 }}>{1 + " items"}</div>
        <div
          style={{ borderTop: "solid 1px #d3d3d3", margin: "20px 0 10px" }}
        ></div>
        <Button
          simple
          color="info"
          size="lg"
          style={{ padding: 0, fontSize: 16 }}
          onClick={() => {
            this.props.history.push("/mycart");
          }}
        >
          Proceed To Checkout
        </Button>
      </Card>
    );
  }
}

export default withRouter(CartQuantity);
