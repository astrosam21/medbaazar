import React, { Component } from "react";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card";
import { withStyles } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
class CheckAvailability extends Component {
  state = {
    input: "155455",
  };
  handleChange = (e) => {
    if (e.target.value.length < 7) this.setState({ input: e.target.value });
  };
  render() {
    const { input } = this.state;
    return (
      <Card style={{ padding: 20 }}>
        <div
          style={{
            fontSize: 14,
            color: "#808080",
            fontWeight: 600,
          }}
        >
          CHECK AVAILABILITY
        </div>
        <div style={{ color: "#00acc1", fontSize: 12, fontWeight: 700 }}>
          PINCODE
        </div>
        <Input
          value={input}
          onChange={(e) => {
            this.handleChange(e);
          }}
          placeholder="Enter your Pincode"
          type="number"
          id="standard-basic"
        />
        <div style={{ textAlign: "center", marginTop: 15 }}>
          <Button onClick={() => {}} round color="info">
            Check
          </Button>
        </div>
      </Card>
    );
  }
}

export default CheckAvailability;
