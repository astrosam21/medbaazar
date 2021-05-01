import React, { Component, Fragment } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import "./ContactActivityPage.css";
import Create from "@material-ui/icons/Create";
import Avatar from "../../../../../CTcomponents/assets/img/default-avatar.png";

class ContactTopInfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            modal: false,
            anchorEl: null,
            firstname: "",
            lastname: "",
            owner: "",
            phone: "",
            email: "",
            leadstatus: ""
        };
    }
    handleClickOpen() {
        this.setState({ modal: true });
    }
    modalClose() {
        this.setState({ modal: false });
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            firstname: newProps.details.firstname,
            lastname: newProps.details.lastname,
            owner: newProps.details.owner,
            phone: newProps.details.phone,
            email: newProps.details.email
        });
    }
    handleLeadStatus = event => {
        this.setState({ leadstatus: event.target.value });
    };
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    _openModal = () => {
        this.refs.moreInfoModal.openModal();
    };
    handleSimple = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    saveupdate() {
        var updateddata = {
            updatedfirstname: this.state.firstname,
            updatedlastname: this.state.lastname,
            updatedjobtitle: this.state.jobtitle,
            leadstatus: this.state.leadstatus
        };
        console.log(updateddata);
        this.setState({ edit: false });
    }
    cancel() {
        this.setState({
            edit: false,
            firstname: this.props.details.firstname,
            lastname: this.props.details.lastname,
            owner: this.props.details.owner,
            phone: this.props.details.phone,
            email: this.props.details.email
        });
    }
    editclick() {
        if (this.state.edit) {
            return (
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                                labelText="First Name"
                                id="float"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    onChange: event =>
                                        this.setState({ firstname: event.target.value }),
                                    value: this.state.firstname
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                            <CustomInput
                                labelText="Last Name"
                                id="float"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    onChange: event =>
                                        this.setState({ lastname: event.target.value }),
                                    value: this.state.lastname
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                            <CustomInput
                                labelText="JobTitle"
                                id="float"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    onChange: event =>
                                        this.setState({ jobtitle: event.target.value }),
                                    value: this.state.jobtitle
                                }}
                            />
                        </GridItem>
                        <GridItem md={12}>
                            <Button color="rose" onClick={() => this.saveupdate()}>
                                save
                            </Button>
                            <Button color="rose" onClick={() => this.cancel()}>
                                cancel
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
            );
        } else {
        }
    }
    render() {
        const { details } = this.props;
        return (
            <Fragment>
                <GridContainer>
                    <div className="circle" style={{ marginLeft: "40%" }}>
                        <img src={Avatar} className="circle" />
                        <div style={{ marginLeft: "-5%" }} className="editicon">
                            <Create onClick={() => this.handleClickOpen()} />
                            <Dialog
                                open={this.state.modal}
                                style={{ maxWidth: 400, marginTop: "-15%" }}
                                onClose={() => this.modalClose()}
                            >
                                <DialogContent id="modal-slide-description">
                                    <GridContainer>
                                        <GridItem md={12}>
                                            <Button simple style={{ color: "grey" }}>
                                                Upload Image
                                            </Button>
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem>
                                            <Button simple style={{ color: "grey" }}>
                                                Remove image
                                            </Button>
                                        </GridItem>
                                    </GridContainer>
                                </DialogContent>
                                <DialogActions>
                                    <Button
                                        onClick={() => this.modalClose()}
                                        color="successNoBackground"
                                    >
                                        cancel
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 style={{ float: "right" }}>
                            {details.firstname + " " + details.lastname}
                        </h2>
                    </GridItem>
                    <GridItem md={2}>
                        <div style={{ marginTop: 20, cursor: "pointer" }}>
                            <Create onClick={() => this.setState({ edit: true })} />
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        {this.editclick()}
                    </GridItem>
                </GridContainer>
            </Fragment>
        );
    }
}

export default ContactTopInfoCard;
