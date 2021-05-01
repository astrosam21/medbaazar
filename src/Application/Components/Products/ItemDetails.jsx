import React, { useRef, Component } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import { withStyles } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import image1 from "../../flickimg1.jpg";
import image2 from "../../flickimg2.jpg";
import image3 from "../../flickimg3.jpg";
import image4 from "../../flickimg4.jpg";
import { Link } from "react-router-dom";
import CheckAvailability from "./CheckAvailability";
import CartQuantity from "./Cart/CartQuantity";
class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.slider = null;
    this.state = {
      index: 0,
      arr: [image1, image2, image3, image4],
      quantity: [1, 2, 3, 4, 5],
      selectedQuantity: 1,
    };
    this.inputRef = null;
  }
  getNext = () => {
    const { index, arr } = this.state;
    if (index < arr.length - 1) {
      this.setState({ index: index + 1 });
    }
  };
  getPrev = () => {
    const { index, arr } = this.state;
    if (index > 0) {
      this.setState({ index: index - 1 });
    }
  };
  selectQuantity = (e) => {
    this.setState({ selectedQuantity: e.target.value });
  };
  render() {
    const { arr, index, quantity, selectedQuantity } = this.state;
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem md={6}>
          <Card
            style={{
              padding: 10,
              paddingBottom: 20,
              // paddingBottom: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: 10,
              }}
            >
              <div style={{ width: "60%" }}>
                <h3>
                  Wildcraft Hypashield W95 Reusable Outdoor Protection Face Mask
                  - Large
                </h3>
                <span>Fitness</span>
                <span>Health Food and Drinks</span>
              </div>
              <div style={{ width: "40%", marginLeft: "10%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <ArrowBackIosIcon
                    onClick={() => {
                      this.getPrev();
                    }}
                  />
                  <img
                    style={{ margin: "0 40px" }}
                    src={arr[index]}
                    alt=""
                    height="120px"
                    width="80px"
                  />
                  <ArrowForwardIosIcon
                    onClick={() => {
                      this.getNext();
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
              }}
            >
              <div style={{ fontFamily: "Lato", fontStyle: "italic" }}>
                Mfr:Eliph Nutrition Pvt Ltd
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    fontSize: 16,
                    color: "#dd2c00",
                    fontWeight: 600,
                    marginLeft: "5%",
                  }}
                >
                  Rs.170.00
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color: "#79d70f",
                    marginRight: 5,
                  }}
                >
                  15% off
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "	#808080",
                    marginRight: 5,
                  }}
                >
                  M.R.P.
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "	#808080",
                    textDecoration: "line-through",
                  }}
                >
                  Rs.200.00
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-around",
              }}
            >
              <Button color="info">Add to cart</Button>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "solid 1px grey",
                  borderRadius: 5,
                  padding: "0 10px",
                }}
              >
                <div style={{ alignSelf: "center", marginRight: 10 }}>
                  <p>Qty: </p>
                </div>
                <FormControl fullWidth className={classes.selectFormControl}>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu,
                    }}
                    classes={{
                      select: classes.select,
                    }}
                    value={selectedQuantity}
                    onChange={(e) => {
                      this.selectQuantity(e);
                    }}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select",
                    }}
                  >
                    {quantity.map((item) => (
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value={item}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    color: "	#808080",
                  }}
                >
                  TOTAL AMOUNT
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                >
                  {"Rs." + selectedQuantity * 170.0}
                </div>
              </div>
            </div>
          </Card>
        </GridItem>

        <GridItem md={3}>
          <CartQuantity />
          <CheckAvailability />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles()(ItemDetails);
