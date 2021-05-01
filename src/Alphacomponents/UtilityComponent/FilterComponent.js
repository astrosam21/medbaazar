import React, { Component } from "react"
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { withStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { connect } from "react-redux"
import SideBarList from "../Sidebar/SideBarList";

class FilterComponent extends Component {

    constructor() {
        super()
    }

    async componentDidMount() {
        
    }

    render() {
        const { loading, filterList } = this.props;
        console.log(this.props.data)
        return (
            <div style={{ display: "flex", flexDirection: "row", padding: "20px", width: "240px" }}>
                <SideBarList
                    open={this.props.open}
                    handleDrawerToggle={this.props.handleDrawerToggle}
                    loading={loading}
                    filtersList={filterList}>
                </SideBarList>
            </div>
        );
    }
}


export default FilterComponent