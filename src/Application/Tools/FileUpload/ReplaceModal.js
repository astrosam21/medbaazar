import React, { Fragment, Component, useState } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
// core components
import Button from "components/CustomButtons/Button.jsx";

import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function ReplaceModal(props) {
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
          <h3 className={classes.modalTitle}>Replace File</h3>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
          style={{ marginTop: -10 }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <p>
                To replace the contents of <strong>{props.data.name}</strong>,
                either drag a file here or choose a file to replace it.
              </p>
              <p>
                All existing usages will refer to the new content. However, it
                may take a short time to update to the new image.
              </p>
              <p>
                Note: your new file must be a{" "}
                <strong>{props.data.extension.toUpperCase()}</strong> file.
              </p>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                  <div>
                    <div>
                      <input
                        style={{ display: "none" }}
                        accept="/*"
                        className={classes.input}
                        id="contained-button-replace"
                        type="file"
                        onAbort={() => {}}
                        onChange={event => {
                          var val = {
                            id: props.data.id,
                            name: props.data.name,
                            file: event.target.files[0]
                          };
                          props.onSave(val);
                          props.onClose();
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="contained-button-replace">
                        <Button
                          color={"rose"}
                          variant="contained"
                          component="span"
                          style={{ marginRight: 20 }}
                        >
                          Upload a File
                        </Button>
                      </label>
                    </div>
                  </div>
                  )
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
export default withStyles(validationFormsStyle)(
  withStyles(modalStyle)(ReplaceModal)
);
