import React, { Component, Fragment } from "react";
import LeadCard from "./card";
import { connect } from "react-redux";
import { getLeadCardData } from "../../../../../../Action/Contact/rightSideBarAction";
import SearchForm from "../../../../../../Alphacomponents/ActivityPageComponents/ActivityRightBar/SearchForm";

class LeadCardSample extends Component {
    state = {
        modalOpen: false
    };
    componentDidMount() {
        // this.props.getLeadCardData();
    }
    handleModalOpen = () => {
        this.setState({ modalOpen: true });
    };
    handleModalClose = () => {
        this.setState({ modalOpen: false });
        this.props.getLeadCardData();
    };
    _handleRemoveLead = () => {
        console.log("removed");
    };
    render() {
        const { leadData, leadLoading } = this.props;
        return (
            <Fragment>
                <LeadCard
                    removeLead={this._handleRemoveLead}
                    handleClickOpen={this.handleModalOpen}
                    leadData={leadData.data}
                    leadLoading={leadLoading}
                    routePath={"/"}
                />
                <SearchForm
                    modalOpen={this.state.modalOpen}
                    handleCloseModal={this.handleModalClose}
                />
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    leadData: state.leadCard.leadData,
    leadLoading: state.leadCard.leadLoading
});
const mapDispatchToProps = {
    getLeadCardData
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeadCardSample);
