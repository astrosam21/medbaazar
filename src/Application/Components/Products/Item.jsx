import React, { Component } from "react";
import Button from "components/CustomButtons/Button";
import { withRouter } from "react-router-dom";
class Item extends Component {
  state = {};
  render() {
    const { product } = this.props;
    return (
      <div
        style={{
          // height: 320,
          width: 200,
          borderRadius: 8,
          margin: 10,
          border: "solid 1px #e5e5e5",
          cursor: "pointer",
        }}
        onClick={() => {
          this.props.history.push(`/non/${product.productNameUrl}`);
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#79d70f",
            padding: "0 3px",
            borderRadius: 5,
            color: "#fafafa",
            textSize: 10,
            fontSize: 8,
            margin: 5,
            lineHeight: 2,
          }}
        >
          {product.productDiscount + "% OFF"}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            alignItems: "center",
          }}
        >
          <img
            style={{ margin: "10px 0" }}
            height="100"
            width="150"
            src={product.productPhoto}
            alt="product"
          />
          <div style={{ textAlign: "center" }}>
            <h5 style={{ fontWeight: 700 }}>{product.productName}</h5>
          </div>
          <div style={{ fontFamily: "Lato", fontStyle: "italic" }}>
            {product.productCompanyName}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                fontSize: 12,
                color: "#808080",
                textDecoration: "line-through",
              }}
            >
              {"Rs." + product.productPrice}
            </div>
            <div
              style={{
                fontSize: 16,
                color: "#dd2c00",
                fontWeight: 600,
                marginLeft: "5%",
              }}
            >
              {"Rs." + product.productDiscountedPrice}
            </div>
          </div>
          <div>
            <Button
              onClick={() => {}}
              block
              fullWidth={false}
              round
              color="info"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Item);
