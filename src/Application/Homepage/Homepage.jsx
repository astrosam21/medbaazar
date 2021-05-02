import React, { Component } from "react";
import Carousel from "../Carousel";
import ProductPage from "../Components/Products/ProductPage";
import Tabs from "../../MedComponents/Pictures/Tabs.png";
import Wellness1 from "../../MedComponents/Pictures/Wellness1.png";
import Diagno from "../../MedComponents/Pictures/Diagno.png";
import Health from "../../MedComponents/Pictures/Health.png";
import Button from "components/CustomButtons/Button";
import SecondNav from "../Categories/SecondNav";
import BrandList from "../Components/Brands/BrandsList";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Carousel></Carousel>
        // this is homepage
        <BrandList />
        <ProductPage />
      </div>
    );
  }
}

export default Homepage;
