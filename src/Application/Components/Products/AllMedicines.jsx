import React, { Component } from "react";
import { connect } from "react-redux";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";

class AllMedicine extends Component {
  state = {
    product: ["Aqarile", "Antibiotics", "Behadjkvd", "Bddjkycmd", "Hkkdvdf"],
  };
  getChar = (a, b) => {
    var arr = [];
    for (var i = a; i <= b; i++) {
      arr.push(String.fromCharCode(i));
    }
    return arr;
  };
  handleClick = (ch) => {
    if (ch === "ALL") {
      this.setState({ product: this.state.product });
    } else {
      let data = this.state.product.filter((p) => p.charAt(0) === ch);
      this.setState({ product: data });
    }
  };
  render() {
    const { product } = this.state;
    return (
      <GridItem
        md={8}
        style={{
          margin: "auto",
        }}
      >
        <h2 style={{ marginBottom: 0, paddingBottom: 0, color: "blue" }}>
          Find Your Prescription Medicines
        </h2>
        <h4
          style={{
            marginTop: 0,
            paddingTop: 0,
            fontStyle: "italic",
            color: "blue",
          }}
        >
          Shop by Category
        </h4>
        <div
          style={{
            display: "flex",
            border: "solid 1px grey",
            background: "#fafafa",
            padding: 2,
            marginTop: 40,
          }}
        >
          {this.getChar(65, 90).map((item) => (
            <div
              style={{
                margin: 2,
                padding: "4px 11px",
                borderRight: "solid 1px grey",
                color: product.filter((p) => p.charAt(0) === item).length
                  ? "black"
                  : "grey",
                cursor: "pointer",
              }}
              onClick={() => {
                this.handleClick(item);
              }}
            >
              {item}
            </div>
          ))}
          <div
            style={{
              margin: 2,
              padding: "4px 8px",
              color: "blue",
              cursor: "pointer",
            }}
            onClick={() => {
              this.handleClick("ALL");
            }}
          >
            {"ALL"}
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.getChar(65, 90).map((ch) => {
            let pr = product.filter((p) => p.charAt(0) === ch);
            if (pr.length !== 0) {
              return (
                <div style={{ width: 200 }}>
                  <h3>{ch}</h3>
                  {pr.map((pro) => (
                    <p>{pro}</p>
                  ))}
                </div>
              );
            }
          })}
        </div>
      </GridItem>
    );
  }
}

export default AllMedicine;
