import React, { Fragment } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.jsx";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";
import {
    getLeadCardData,
    getAttachCardData,
    getCompanyCardData
} from "../../../../Action/Contact/rightSideBarAction";
import { getContactView, getContactInfo } from "../../../../Action/Contact/leftSideBarAction";
import { connect } from "react-redux";
import SearchForm from "../../../../Alphacomponents/ActivityPageComponents/ActivityRightBar/SearchForm";
import AttachFileForm from "../../../../Alphacomponents/ActivityPageComponents/ActivityRightBar/AttachFileForm";
import PreviewComponent from "./PreviewComponent";

class PreviewContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            attachmodalOpen: false,
            modalOpen: false,
            title: ""
        };
    }
    componentDidMount() {
        this.props.getContactInfo();
        this.props.getLeadCardData();
        this.props.getCompanyCardData();
        this.props.getAttachCardData();
        this.props.getContactView();
    }
    handleClickOpenAttachment = () => {
        this.setState({ attachmodalOpen: true });
    };
    removeFile = () => {
        console.log("removed");
    };
    handleClickOpenLead = () => {
        this.setState({ modalOpen: true });
        this.setState({ title: "Add Lead to this Contact" });
    };
    removeContact = () => {};
    handleClickOpenCompany = () => {
        this.setState({ modalOpen: true });
        this.setstate({ title: "Add Company to this Lead" });
    };
    removeCompany = () => {};
    handleModalClose = () => {
        this.setState({ modalOpen: false });
    };
    handleAttachModalClose = () => {
        this.setState({ attachmodalOpen: false });
    };
    render() {
        const { classes, key } = this.props;
        return (
            <Fragment>
                <Dialog
                    classes={{
                        root: classes.center,
                        paper: classes.modal
                    }}
                    open={this.props.visible}
                    keepMounted
                    onClose={() => this.props.onClose()}
                >
                    <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                    >
                        <Button
                            justIcon
                            className={classes.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            color="transparent"
                            onClick={() => this.props.onClose()}
                        >
                            <Close className={classes.modalClose} />
                        </Button>
                        <h4 className={classes.modalTitle}>Lead</h4>
                    </DialogTitle>
                    <DialogContent id="modal-slide-description" className={classes.modalBody}>
                        <div
                            style={{
                                overflow: "scroll",
                                height: "450px",
                                overflowX: "hidden"
                            }}
                        >
                            <PreviewComponent
                                {...this.props}
                                handleClickOpenAttachment={this.handleClickOpenAttachment}
                                removeFile={this.removeFile}
                                handleClickOpenLead={this.handleClickOpenLead}
                                removeContact={this.removeContact}
                                handleClickOpenCompany={this.handleClickOpenCompany}
                                removeCompany={this.removeCompany}
                            />
                        </div>
                        <SearchForm
                            formTitle={this.state.title}
                            modalOpen={this.state.modalOpen}
                            handleCloseModal={this.handleModalClose}
                        />
                        <AttachFileForm
                            modalOpen={this.state.attachmodalOpen}
                            handleCloseModal={this.handleAttachModalClose}
                        />
                    </DialogContent>
                    <DialogActions
                        className={classes.modalFooter + " " + classes.modalFooterCenter}
                    >
                        <Link
                            to={"/timeline/" + key}
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            <Button color={"rose"}>View Record</Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    companyData: state.companyCard.companyData,
    leadData: state.leadCard.leadData,
    fileData: state.attachCard.fileData,
    contactview: state.Info.contactview,
    contactinfo: state.Info.contactInfo
});

const mapDispatchToProps = {
    getLeadCardData,
    getAttachCardData,
    getCompanyCardData,
    getContactView,
    getContactInfo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(modalStyle)(PreviewContainer));
