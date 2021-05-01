import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import withStyles from "@material-ui/core/styles/withStyles";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";

import Button from "components/CustomButtons/Button.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Close from "@material-ui/icons/Close";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import TextField from "@material-ui/core/TextField";
import {compose} from 'recompose'
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";
import { CssBaseline } from "@material-ui/core";


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const btnStyle = {
  right: 0,
  marginTop: -5,
  color: "#47708f",
  backgroundColor: "#EEEEEE",
  border: "1px solid #BDBDBD",
  padding: 8,
  borderRadius: 3,
  fontSize: 16,
  cursor: "pointer",
  outline: "none"
};

const btnStyles = {
  padding: "9px 20px 9px 20px",
  outline: "none"
};

const customStyles = {
  content: {
    top: "50%",
    left: "auto",
    right: "50%",
    bottom: "auto",
    marginRight: "auto",
    transform: "translate(50%, -50%)",
    width: "80%",
    zIndex: 10
  }
};
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: "50%",
    left: "50%",
    transform: `translate(-${top}%, -${left}%)`
  };
}
const styles = theme => ({
  paper: {
    position: "absolute",
    // width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class EditActivity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      create: true,
      cancel: false,
      delete: true
    };

    this.closeModal = this.closeModal.bind(this);
    this.create = this.create.bind(this);
  }

  

  closeModal() {
    this.props.hideModal();
  }

  create(event) {
    this.setState({ create: this.state.create });
    console.log("created leads:", this.state.create);
  }

  render() {
    const { classes, fullScreen,isOpen , typeID} = this.props;
    return (
      <Fragment>
        <CssBaseline />
       
        <Dialog
          ref={"editRef"}
         aria-labelledby="responsive-dialog-title"
         fullScreen={this.props.fullScreen}
          open={isOpen}
          onClose={this.closeModal}
        >
                <DialogTitle id="responsive-dialog-title">{"Lead Title"}</DialogTitle>
         <DialogContent>
          <div>
            <span style={{ fontSize: 25 }}>{}</span>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <TextField
                      id="standard-read-only-input"
                      label="Lead's Stage"
                      defaultValue="Appointment Scheduled"
                      style={{ padding: 10 }}
                      margin="normal"
                      InputProps={{
                        readOnly: false
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <TextField
                      id="standard-read-only-input"
                      style={{ padding: 10 }}
                      label="Lead's Closing Date"
                      defaultValue="12-11-2018"
                      // className={classes.textField}
                      margin="normal"
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <TextField
                      id="standard-read-only-input"
                      label="Lead's Owner"
                      defaultValue="Deepak"
                      // className={classes.textField}
                      style={{ padding: 10 }}
                      margin="normal"
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <TextField
                      id="standard-read-only-input"
                      label="Lead's Value"
                      defaultValue="12000 $"
                      // className={classes.textField}
                      margin="normal"
                      style={{ padding: 10 }}
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <TextField
                      id="standard-read-only-input"
                      label="Company"
                      style={{ padding: 10 }}
                      defaultValue="Dell"
                      // className={classes.textField}
                      margin="normal"
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <TextField
                      id="standard-read-only-input"
                      label="Lead's Person"
                      defaultValue="Rahul"
                      style={{ padding: 10 }}
                      // className={classes.textField}
                      margin="normal"
                      InputProps={{
                        readOnly: true
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridItem xs={12} sm={12} md={12}>
                  <TextField
                    style={{ width: "100%" }}
                    multiline
                    id="standard-read-only-input"
                    label="Lead's Description"
                    defaultValue="The input label   state always correct
                                                          The input label is supposed to shrink as soon as the input is displaying something 
                                                          In some circumstances we cant determine the 
                                                          shrink state number input datetime input Stripe You might notice an overlap"
                    // className={classes.textField}
                    margin="normal"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </GridItem>
              </GridItem>
            </GridContainer>
          </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.closeModal} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.closeModal} color="primary" autoFocus>
                        Done
                     </Button>
                </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}


const EditActivityHoC =compose(withStyles(styles),
    withMobileDialog({ breakpoint: 'xs' }))(EditActivity)

export default EditActivityHoC