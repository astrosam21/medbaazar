import React, { Component, Fragment } from "react";
import CompanyCard from "./card";
import { connect } from "react-redux";
import { getCompanyCardData } from "../../../../../../Action/Contact/rightSideBarAction";
import SearchForm from "../../../../../../Alphacomponents/ActivityPageComponents/ActivityRightBar/SearchForm";

class CompanyCardSample extends Component {
    constructor() {
        super();
        this.state = {
            modalOpen: false
        };
    }

    componentDidMount() {
        //this.props.getCompanyCardData();
    }
    handleModalOpen = () => {
        this.setState({ modalOpen: true });
    };
    handleModalClose = () => {
        this.setState({ modalOpen: false });
        this.props.getCompanyCardData();
    };
    _handleRemoveCompany = () => {
        console.log("removed");
    };
    render() {
        const { companyData, companyLoading } = this.props;
        return (
            <Fragment>
                <CompanyCard
                    removeCompany={this._handleRemoveCompany}
                    handleClickOpen={this.handleModalOpen}
                    companyData={companyData.CompanyData}
                    companyLoading={companyLoading}
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
    companyData: state.companyCard.companyData,
    companyLoading: state.companyCard.companyLoading
});
const mapDispatchToProps = {
    getCompanyCardData
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyCardSample);
