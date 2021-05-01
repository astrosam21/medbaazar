import React, { Component, Fragment } from "react";

import ActivityCompanyCards from "../../../../../../Alphacomponents/ActivityPageComponents/ActivityRightBar/ActivityCompanyCards";

class CompanyCard extends Component {
    state = {};
    componentDidMount() {}
    _handleClickOpen = () => {
        this.props.handleClickOpen();
    };
    _handleRemoveCompany = () => {
        this.props.removeCompany();
    };
    render() {
        const { companyData, companyLoading } = this.props;
        return (
            <Fragment>
                <ActivityCompanyCards
                    handleClickOpen={this._handleClickOpen}
                    removeCompany={this._handleRemoveCompany}
                    data={companyData}
                    loading={companyLoading}
                />
            </Fragment>
        );
    }
}

export default CompanyCard;
