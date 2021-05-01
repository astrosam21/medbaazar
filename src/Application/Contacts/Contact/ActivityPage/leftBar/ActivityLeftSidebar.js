import React, { Component } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";
import Contacts from "@material-ui/icons/Contacts";
import Accordion from "components/Accordion/Accordion.jsx";
import ButtonGroup from "../../../../../Alphacomponents/ActivityPageComponents/ActivityLeftBar/buttonAction";
import TopMenu from "../../../../../Alphacomponents/ActivityPageComponents/ActivityLeftBar/menu";
// import AccordianViewProperty from "../../../../../Alphacomponents/ActivityPageComponents/ActivityLeftBar/viewProperty";
import { connect } from "react-redux";
import { compose } from "recompose";
import { getContactInfo, getContactView } from "../../../../../Action/Contact/leftSideBarAction";
import ContactTopInfoCard from "./contactTopInfoCard";

import { Typography } from "@material-ui/core";
import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";
import ContactViewProperty from "./ContactViewProperty";

class ActivityLeftSidebarSample extends Component {
    state = {
        firstname: "",
        lastname: "",
        owner: "",
        phone: "",
        email: "",
        leadstatus: ""
    };

    componentWillReceiveProps(newProps) {
        this.setState({
            firstname: newProps.contactview.firstname,
            lastname: newProps.contactview.lastname,
            owner: newProps.contactview.owner,
            phone: newProps.contactview.phone,
            email: newProps.contactview.email
        });
    }
    componentDidMount() {
        this.props.getContactInfo();
        this.props.getContactView();
    }
    render() {
        const { classes, contactinfo, contactview } = this.props;
        console.log(contactview);
        return (
            <GridContainer>
                <GridItem md={12}>
                    <Card>
                        <CardHeader color="rose" icon>
                            <CardIcon color="rose">
                                <Contacts />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle} style={{ float: "left" }}>
                                contact
                            </h4>
                            <div>
                                <TopMenu />
                            </div>
                        </CardHeader>

                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <ContactTopInfoCard details={contactview} />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter className={classes.justifyContentCenter}>
                            <ButtonGroup />
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader color="rose" icon>
                            <CardIcon color="rose">
                                <Contacts />
                            </CardIcon>
                            <h4 className={classes.cardIconTitle} style={{ float: "left" }}>
                                Contact's Information
                            </h4>
                        </CardHeader>

                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <Accordion
                                        active={0}
                                        collapses={[
                                            {
                                                title: "About this contact",
                                                content: (
                                                    <ContactViewProperty
                                                        {...this.props}
                                                        {...this.state}
                                                    />
                                                )
                                            },
                                            {
                                                title: "Website activity",
                                                content: (
                                                    <div>
                                                        <Typography>
                                                            Website activity shows you how many
                                                            times a contact has visited your site
                                                            and viewed your pages.
                                                        </Typography>
                                                    </div>
                                                )
                                            }
                                        ]}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter className={classes.justifyContentCenter}>
                            <div>
                                <Button color={"rose"}>View All Property</Button>
                                <Button color={"rose"}>View History</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}
const mapStateToProps = state => ({
    contactview: state.Info.contactview,
    contactinfo: state.Info.contactInfo,
    loading: state.Info.loading
});
const mapDispatchToProps = {
    getContactInfo,
    getContactView
};

export default withStyles(modalStyle)(
    compose(
        connect(
            mapStateToProps,
            mapDispatchToProps
        ),
        withStyles(validationFormsStyle)
    )(withStyles(extendedFormsStyle)(ActivityLeftSidebarSample))
);
