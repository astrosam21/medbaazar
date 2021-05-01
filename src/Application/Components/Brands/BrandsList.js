import React, { Component } from "react";
import BrandComponent from "./BrandComponent";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

class BrandList extends Component {
  state = {
    brands: [
      {
        url:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/img/nivea.jpg?v=39",
        companyUrl:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/logos/nivea.jpg?v=39",
        flat: false,
        discount: 25,
      },
      {
        url:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/img/nivea.jpg?v=39",
        companyUrl:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/logos/nivea.jpg?v=39",
        flat: false,
        discount: 25,
      },
      {
        url:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/img/nivea.jpg?v=39",
        companyUrl:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/logos/nivea.jpg?v=39",
        flat: false,
        discount: 25,
      },
      {
        url:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/img/nivea.jpg?v=39",
        companyUrl:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/logos/nivea.jpg?v=39",
        flat: false,
        discount: 25,
      },
      {
        url:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/img/nivea.jpg?v=39",
        companyUrl:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/logos/nivea.jpg?v=39",
        flat: false,
        discount: 25,
      },
      {
        url:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/img/nivea.jpg?v=39",
        companyUrl:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/logos/nivea.jpg?v=39",
        flat: false,
        discount: 25,
      },
      {
        url:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/img/nivea.jpg?v=39",
        companyUrl:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/logos/nivea.jpg?v=39",
        flat: false,
        discount: 25,
      },
      {
        url:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/img/nivea.jpg?v=39",
        companyUrl:
          "https://www.netmeds.com/images/cms/wysiwyg/brand/v2/logos/nivea.jpg?v=39",
        flat: false,
        discount: 25,
      },
    ],
  };
  render() {
    const { brands } = this.state;
    return (
      <div>
        <div>EXPLORE</div>
        <h3>Top Brands</h3>
        <GridContainer justify="center">
          {brands.map((item) => (
            <GridItem>
              <BrandComponent item={item} />
            </GridItem>
          ))}
        </GridContainer>
      </div>
    );
  }
}

export default BrandList;
