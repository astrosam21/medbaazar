import React, { Component } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { withStyles } from "@material-ui/core";
import Gavel from "@material-ui/icons/Gavel";
import Schedule from "@material-ui/icons/Schedule";
import NoteAdd from "@material-ui/icons/NoteAdd";
import Mail from "@material-ui/icons/Mail";
import Timeline from "./Timeline";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import SweetAlert from "react-bootstrap-sweetalert";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import OpenModal from "../../../../../Alphacomponents/ActivityPageComponents/ActivityLeftBar/OpenModal";

class TimelineTabSample extends React.Component {
    constructor() {
        super();
        this.state = {
            successDeleteAlert: false,
            modal: false,
            type: ""
        };
    }

    _handleTimelineDeleteButton = id => {
        console.log("timeline element deleted" + id);
        this.successAlert();
    };
    handleEditButton = (id, type) => {
        this.setState({ type: type, modal: true });
    };
    hideAlert() {
        this.setState({
            successDeleteAlert: null
        });
    }
    successAlert() {
        this.setState({
            successDeleteAlert: (
                <SweetAlert
                    success
                    style={{ display: "block", marginTop: "-100px" }}
                    title="Deleted !"
                    onConfirm={() => this.hideAlert()}
                    onCancel={() => this.hideAlert()}
                    confirmBtnCssClass={
                        this.props.classes.button + " " + this.props.classes.success
                    }
                >
                    This activity Deleted From Contacts!
                </SweetAlert>
            )
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <OpenModal
                    visible={this.state.modal}
                    type={this.state.type}
                    close={() => this.setState({ modal: false, type: "" })}
                />
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                        <CustomTabs
                            title="Activity :"
                            headerColor="rose"
                            tabs={[
                                {
                                    tabName: "Activity",
                                    tabIcon: NoteAdd,
                                    tabContent: (
                                        <Timeline
                                            data={this.props.data}
                                            tab={"activity"}
                                            handleEditButton={this.handleEditButton}
                                            handleTimelineDeleteButton={
                                                this._handleTimelineDeleteButton
                                            }
                                        />
                                    )
                                },
                                {
                                    tabName: "Note",
                                    tabIcon: NoteAdd,
                                    tabContent: (
                                        <Timeline
                                            data={this.props.data}
                                            tab={"note"}
                                            handleEditButton={this.handleEditButton}
                                            handleTimelineDeleteButton={
                                                this._handleTimelineDeleteButton
                                            }
                                        />
                                    )
                                },
                                {
                                    tabName: "Email",
                                    tabIcon: Mail,
                                    tabContent: (
                                        <Timeline
                                            data={this.props.data}
                                            tab={"email"}
                                            handleEditButton={this.handleEditButton}
                                            handleTimelineDeleteButton={
                                                this._handleTimelineDeleteButton
                                            }
                                        />
                                    )
                                },
                                {
                                    tabName: "Tasks",
                                    tabIcon: Gavel,
                                    tabContent: (
                                        <Timeline
                                            data={this.props.data}
                                            tab={"task"}
                                            handleEditButton={this.handleEditButton}
                                            handleTimelineDeleteButton={
                                                this._handleTimelineDeleteButton
                                            }
                                        />
                                    )
                                },
                                {
                                    tabName: "Schedule",
                                    tabIcon: Schedule,
                                    tabContent: (
                                        <Timeline
                                            data={this.props.data}
                                            tab={"schedule"}
                                            handleEditButton={this.handleEditButton}
                                            handleTimelineDeleteButton={
                                                this._handleTimelineDeleteButton
                                            }
                                        />
                                    )
                                }
                            ]}
                        />
                        {this.state.successDeleteAlert}
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}
export default withStyles(sweetAlertStyle)(TimelineTabSample);
