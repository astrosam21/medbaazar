import React, { Component } from "react";
import { connect } from "react-redux";
import { getFilters } from "../../../../Action/Contact/SidebarAction";
import SideBarList from "../../../../Alphacomponents/Sidebar/SideBarList";
import { getStaticData } from "./sideBarStaticData";

class SideBarSample extends Component {
    state = {};

    async componentDidMount() {
        await this.props.getFilters();
    }

    render() {
        const { filters, loading } = this.props;
        const staticData = getStaticData();
        return (
            <div>
                <SideBarList
                    open={this.props.open}
                    handleDrawerToggle={this.props.handleDrawerToggle}
                    loading={loading}
                    routesList={staticData.list}
                    filtersList={filters.list}
                    rootRoute={"/all"}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    filters: state.Sidebar.filterList,
    loading: state.Sidebar.loading
});

const mapDispatchToProps = {
    getFilters
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBarSample);
