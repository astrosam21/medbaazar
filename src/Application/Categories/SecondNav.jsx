import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SecondNav extends Component {
  state = {
    categories: [
      {
        id: "covid_essentials",
        name: "Covid Essentials",
        link: "covid_essentials",
      },
      { id: "mom_baby", name: "Mom & Baby", link: "mom_baby" },
      { id: "eyewear", name: "EyeWear", link: "eyewear" },
      { id: "ayush", name: "Ayush", link: "ayush" },
      { id: "fitness", name: "Fitness", link: "fitness" },
      { id: "personal_care", name: "Personal Care", link: "personal_care" },
      { id: "devices", name: "Devices", link: "devices" },
      { id: "surgical", name: "Surgicals", link: "surgical" },
      {
        id: "sexual_wellness",
        name: "Sexual Wellness",
        link: "sexual_wellness",
      },
      {
        id: "treatments",
        name: "Treatments",
        link: "treatments",
      },
    ],
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          background: "#fafafa",
        }}
      >
        {this.state.categories.map((item) => (
          <div
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              padding: 15,
            }}
            onClick={() =>
              this.props.history.push(`/chooseCategory/${item.link}`)
            }
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(SecondNav);
