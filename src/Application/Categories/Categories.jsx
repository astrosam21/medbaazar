import React, { Component } from "react";

import Accordian from "../../MedComponents/Accordian";
class Categories extends Component {
  data = [
    {
      id: "ayush",
      title: "Ayush",
      content: [
        {
          id: "55",
          title: "Homeopathy",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Ayurvedic",
          info: {},
        },
        {
          id: "12",
          title: "Unani",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Siddha",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "fitness",
      title: "Fitness",
      content: [
        {
          id: "55",
          title: "Vitamins And Supplements",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Family Nutrition",
          info: {},
        },
        {
          id: "12",
          title: "Health Food And Drinks",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Ayurvedic Supplements",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Sports Supplements",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Smoking Cessation",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Weight Management",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "personal_care",
      title: "Personal Care",
      content: [
        {
          id: "55",
          title: "Body Care",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Eye Care",
          info: {},
        },
        {
          id: "12",
          title: "Home Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Face Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Fragrances",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Senior Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Hair Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Hands And Feet",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Lip Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Oral Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Skin Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Men's Care",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "mom_baby",
      title: "Mom & Baby",
      content: [
        {
          id: "55",
          title: "Baby Care",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Feminine Hygiene",
          info: {},
        },
        {
          id: "12",
          title: "Maternity Care",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "sexual_wellness",
      title: "Sexual Wellness",
      content: [
        {
          id: "55",
          title: "Condoms",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Lubricants",
          info: {},
        },
        {
          id: "12",
          title: "Massagers/Vibrators",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Sexual Health Supplements",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "treatments",
      title: "Treatments",
      content: [
        {
          id: "55",
          title: "Diabetes Care",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "First Aid",
          info: {},
        },
        {
          id: "12",
          title: "Pain Relief",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Skin Treatment",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Usual Symptoms",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "General Discomfort",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Cough & Cold",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "General Health Supplements",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Smoking Cessation (T)",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "devices",
      title: "Devices",
      content: [
        {
          id: "55",
          title: "Orthopaedics",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Breathe Easy",
          info: {},
        },
        {
          id: "12",
          title: "Measurements",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "health_conditions",
      title: "Health Conditions",
      content: [
        {
          id: "55",
          title: "Bone And Joint Pain",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Liver Care",
          info: {},
        },
        {
          id: "12",
          title: "Kidney Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Stomach Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Diabetic Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Lung Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Piles Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Mental Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Cold And Fever",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Women'S Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Weight Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "De-Addiction",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Cardiac Care",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "eyewear",
      title: "Eyewear",
      content: [
        {
          id: "55",
          title: "Contact Lenses (EW)",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Eye Glasses",
          info: {},
        },
        {
          id: "12",
          title: "Reading Glasses",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Sunglasses",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Computer Glasses",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "covid_essentials",
      title: "Covid Essentials",
      content: [
        {
          id: "55",
          title: "Personal & Home Essentials",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Mask, Gloves & Protective Equipment",
          info: {},
        },
        {
          id: "12",
          title: "Immunity Booster",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Business Essentials",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Travel Essentials",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "surgical",
      title: "Surgical",
      content: [
        {
          id: "55",
          title: "Dressing",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Respiratory Supplies",
          info: {},
        },
        {
          id: "12",
          title: "Surgical Consumables",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Surgical Instrument",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "diabetes",
      title: "Diabetes",
      content: [
        {
          id: "55",
          title: "Diabetes Care - Ayurveda",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Glucometers",
          info: {},
        },
        {
          id: "12",
          title: "Lancets & Test Strips",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Classical Medicines",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Sugar Substitutes",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Diabetes Management Supplements",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Syringes & Pens",
          img: "",
          info: {},
        },
      ],
    },
  ];
  state = {};

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Accordian
          active={this.data.findIndex(
            (i) => i.id === this.props.match.params.category
          )}
          handleSelect={(id) => {
            this.handleSelect(id);
          }}
          collapses={this.data}
        />
      </div>
    );
  }
}

export default Categories;
