import React, { Component, Fragment } from "react";
import ActivityLeadCards from "../../../../../../Alphacomponents/ActivityPageComponents/ActivityRightBar/ActivityLeadCards";

class LeadCard extends Component {
    state = {};
    componentDidMount() {}
    _handleClickOpen = () => {
        this.props.handleClickOpen();
    };
    _handleRemoveLead = () => {
        this.props.removeLead();
    };
    render() {
        const { leadData, leadLoading } = this.props;
        return (
            <Fragment>
                <ActivityLeadCards
                    handleClickOpen={this._handleClickOpen}
                    removeCompany={this._handleRemoveLead}
                    data={leadData}
                    loading={leadLoading}
                    path={"/"}
                />
            </Fragment>
        );
    }
}

export default LeadCard;
