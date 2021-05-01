import React, { Component } from "react"
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { withStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import SelectInput from "../MicroComponents/selectInput";

class SortComponent extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
                <SelectInput style={{ width: "200px" }} label={"Select Types"} options={this.props.optionSort}>
                </SelectInput>
            </div>
        );
    }
}

export default SortComponent