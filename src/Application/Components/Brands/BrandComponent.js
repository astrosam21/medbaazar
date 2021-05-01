import React, { Component } from "react";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";

class BrandComponent extends Component {
  state = {};
  render() {
    const { item } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Card style={{ height: 160, width: "100%" }}>
          <img src={item.url} alt="" />
        </Card>

        <Card
          style={{
            height: 110,
            width: "60%",
            marginTop: "-25%",
            alignItems: "center",
          }}
        >
          <img
            style={{ marginTop: "5%" }}
            width="40%"
            src={item.companyUrl}
            alt=""
          />
          <div
            style={{
              color: "#79d70f",
            }}
          >
            {item.flat
              ? `FLAT ${item.discount}% OFF.`
              : `UP TO ${item.discount}% OFF.`}
          </div>
        </Card>
      </div>
    );
  }
}

export default BrandComponent;
