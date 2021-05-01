import React from "react";

import TableComponent from "./TableComponent";
import SideBar from "./sideBar";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "./Header";
import { Route } from "react-router-dom";

class SampleFirstPage extends React.Component {
    state = {
        open: false
    };

    handleDrawerToggle = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };

    render() {
        return (
            <div className="App">
                <GridContainer>
                    <GridItem md={12}>
                        <Header handleDrawerToggle={this.handleDrawerToggle} />
                    </GridItem>
                    <GridItem md={2} sm={12}>
                        <SideBar
                            handleDrawerToggle={this.handleDrawerToggle}
                            open={this.state.open}
                        />
                    </GridItem>
                    <GridItem md={10} sm={12}>
                        <Route path="/all" component={TableComponent} />
                        <Route path="/important" component={TableComponent} />
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default SampleFirstPage;
