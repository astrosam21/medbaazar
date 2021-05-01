import React, { Fragment, useState } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import CustomInput from "components/CustomInput/CustomInput.jsx";
// core components
import Button from "components/CustomButtons/Button.jsx";

import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

function CustomUrlModal(props) {
    const { classes } = props;
    const [url, setUrl] = useState("");
    return (
        <Fragment>
            <Dialog
                maxWidth={"xs"}
                fullWidth={true}
                open={props.visible}
                transition={Transition}
                keepMounted
                onClose={() => props.onClose()}
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
                        onClick={() => props.onClose()}
                    >
                        <Close className={classes.modalClose} />
                    </Button>
                    <h4 className={classes.modalTitle}>Enter a file URL below</h4>
                </DialogTitle>
                <DialogContent
                    id="modal-slide-description"
                    className={classes.modalBody}
                    style={{ marginTop: -10 }}
                >
                    <CustomInput
                        labelText="File URL"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            value: url,
                            onChange: event => setUrl(event.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                    <Button onClick={() => props.onClose()} color="rose">
                        Cancel
                    </Button>
                    <Button
                        disabled={url === ""}
                        onClick={() => {
                            props.onSave({
                                url: url
                            });
                            props.onClose();
                        }}
                        color="rose"
                    >
                        Get File
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default withStyles(modalStyle)(CustomUrlModal);
