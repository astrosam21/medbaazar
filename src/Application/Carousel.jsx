import React, { Component } from "react";

import "antd/dist/antd.css";
import "./Carousel.css";
import { Carousel } from "antd";
import image1 from "./flickimg1.jpg";
import image2 from "./flickimg2.jpg";
import image3 from "./flickimg3.jpg";
import image4 from "./flickimg4.jpg";

class Carousel1 extends Component {
  state = {};
  render() {
    return (
      <div style={{ margin: 20 }}>
        <Carousel autoplay effect="fade">
          <img src={image1} height="400px" />
          <img src={image2} height="400px" />
          <img src={image3} height="400px" />
          <img src={image4} height="400px" />
        </Carousel>
      </div>
    );
  }
}

export default Carousel1;
