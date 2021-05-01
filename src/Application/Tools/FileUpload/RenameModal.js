import React, { Fragment, Component } from "react";
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

class RenameModal extends Component {
  state = {
    name: ""
  };

  componentWillReceiveProps(newprops) {
    this.setState({ name: newprops.data.name });
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Dialog
          maxWidth={"xs"}
          fullWidth={true}
          open={this.props.visible}
          transition={Transition}
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
            <h4 className={classes.modalTitle}>Rename File</h4>
          </DialogTitle>
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}
            style={{ marginTop: -10 }}
          >
            <CustomInput
              labelText="File Name"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                value: this.state.name,
                onChange: event => this.setState({ name: event.target.value }),
                inputProps: {
                  "aria-label": "Search",
                  className: classes.searchInput
                }
              }}
            />
          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button onClick={() => this.props.onClose()} color="rose">
              Cancel
            </Button>
            <Button
              disabled={this.state.name === ""}
              onClick={() => {
                this.props.onSave({
                  index: this.props.data.key,
                  name: this.state.name,
                  typo: this.props.data.typo
                });
                this.props.onClose();
              }}
              color="rose"
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(modalStyle)(RenameModal);
