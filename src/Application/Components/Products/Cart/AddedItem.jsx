import React, { Component } from "react";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import { withStyles } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayArrow from "@material-ui/icons/PlayArrow";

class AddedItem extends Component {
  state = {
    index: 0,
    quantity: [1, 2, 3, 4, 5],
    selectedQuantity: 1,
  };
  render() {
    const { quantity, selectedQuantity } = this.state;
    const { classes, item } = this.props;
    console.log(item.selectedQuantity);
    return (
      <Card
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <PlayArrow />
        <div
          style={{
            marginLeft: "2%",
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: "#808080",
            }}
          >
            ORDER SUMMARY
          </div>
          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{item.productName}</h3>
            <div style={{ marginLeft: "10%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  fontSize: 16,
                  color: "#dd2c00",
                  fontWeight: 600,
                  // marginLeft: "5%",
                }}
              >
                {"Rs " + item.productDiscountedPrice}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  fontSize: 12,
                  color: "#808080",
                  textDecoration: "line-through",
                }}
              >
                {"Rs " + item.productPrice}
              </div>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: 15,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontFamily: "Lato", fontStyle: "italic" }}>
              {item.productDescription}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                border: "solid 1px grey",
                borderRadius: 5,
                padding: "0 10px",
                height: 35,
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
                  value={item.selectedQuantity}
                  onChange={(e) => {
                    this.selectQuantity(e);
                  }}
                  inputProps={{
                    name: "simpleSelect",
                    id: "simple-select",
                  }}
                >
                  {quantity.map((q) => (
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value={q}
                    >
                      {q}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>Delivery between 2pm-6pm.</div>
            <Button
              simple
              onClick={() => {}}
              round
              color="transparent"
              size="sm"
            >
              <DeleteIcon /> Remove
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

export default withStyles()(AddedItem);
