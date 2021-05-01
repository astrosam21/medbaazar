import React, { Fragment } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.jsx";

import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function ArchiveModal(props) {
  const { classes } = props;
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
          <h3 className={classes.modalTitle}>
            Confirm {props.data.typo === "active" ? "Archive" : "Unarchive"}
          </h3>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
          style={{ marginTop: -10 }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              Are you sure you want to{" "}
              {props.data.typo === "active" ? "archive" : "unarchive"}{" "}
              <strong>{props.data.name}?</strong>
            </div>
          </div>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <Button onClick={() => props.onClose()} color="rose">
            Cancel
          </Button>
          <Button
            onClick={() => {
              console.log(props.kiki);
              console.log(props.kiki);
              var val = props.data;
              var kiki = props.kiki;
              var currentType = props.typo;
              props.onSave(val, currentType, kiki);
              props.onClose();
            }}
            color="rose"
          >
            {props.typo === "active" ? "archive" : "unarchive"}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default withStyles(modalStyle)(ArchiveModal);
