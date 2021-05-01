import React, { Component, Fragment } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import { Divider } from "@material-ui/core";
import ActivityCompanyCards from "../../../../Alphacomponents/ActivityPageComponents/ActivityRightBar/ActivityCompanyCards";
import ActivityAttachmentCards from "../../../../Alphacomponents/ActivityPageComponents/ActivityRightBar/ActivityAttachmentCards";
import ActivityLeadCards from "../../../../Alphacomponents/ActivityPageComponents/ActivityRightBar/ActivityLeadCards";
import ContactTopInfoCard from "../ActivityPage/leftBar/contactTopInfoCard";
import ContactViewProperty from "../ActivityPage/leftBar/ContactViewProperty";
import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
class PreviewComponent extends Component {
    constructor() {
        super();
    }
    _handleClickOpenAttachment = () => {
        this.props.handleClickOpenAttachment();
    };
    _handleRemoveAttachment = () => {
        this.props.removeFile();
    };
    _handleClickOpenLead = () => {
        this.props.handleClickOpenLead();
    };
    _handleRemoveLead = () => {
        this.props.removeLead();
    };
    _handleClickOpenCompany = () => {
        this.props.handleClickOpenCompany();
    };
    _handleRemoveCompany = () => {
        this.props.removeCompany();
    };
    render() {
        const {
            leadData,
            leadLoading,
            fileData,
            fileLoading,
            companyData,
            companyLoading,
            contactview,
            classes
        } = this.props;
        return (
            <Fragment>
                <GridContainer>
                    <GridItem md={12} xs={12} sm={12}>
                        <div>
                            <ContactTopInfoCard details={contactview} />
                        </div>
                    </GridItem>
                    <Divider />
                    <GridItem md={12} xs={12} sm={12}>
                        <Accordion
                            collapses={[
                                {
                                    title: "About this Contact",
                                    content: (
                                        <ContactViewProperty
                                            classes={classes}
                                            {...this.props}
                                            {...this.state}
                                        />
                                    )
                                },
                                {
                                    title: "Lead",
                                    content: (
                                        <ActivityLeadCards
                                            handleClickOpen={this._handleClickOpenLead}
                                            removeCompany={this._handleRemoveLead}
                                            data={leadData}
                                            loading={leadLoading}
                                            path={"/"}
                                            cardHeader={false}
                                            card={false}
                                        />
                                    )
                                },
                                {
                                    title: "Company",
                                    content: (
                                        <ActivityCompanyCards
                                            handleClickOpen={this._handleClickOpenCompany}
                                            removeCompany={this._handleRemoveCompany}
                                            data={companyData.CompanyData}
                                            loading={companyLoading}
                                            cardHeader={false}
                                            card={false}
                                        />
                                    )
                                },
                                {
                                    title: "Attachment",
                                    content: (
                                        <ActivityAttachmentCards
                                            handleClickOpen={this._handleClickOpenAttachment}
                                            removeFile={this._handleRemoveAttachment}
                                            data={fileData.data}
                                            loading={fileLoading}
                                            cardHeader={false}
                                            card={false}
                                        />
                                    )
                                }
                            ]}
                        />
                    </GridItem>
                </GridContainer>
            </Fragment>
        );
    }
}

export default withStyles(extendedFormsStyle)(withStyles(validationFormsStyle)(PreviewComponent));
