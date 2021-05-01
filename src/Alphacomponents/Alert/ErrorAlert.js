import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import notificationsStyle from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.jsx";
import { CloseAlert } from "../../Action/AlphaAction/alertAction";
import { connect } from "react-redux";
const ErrorAlert = props => {
  setTimeout(() => {
    props.CloseAlert();
  }, 5000);

  console.log(props.text);
  console.log(props.open);

  return (
    <Snackbar
      place="tc"
      color="danger"
      icon={props.icon}
      message={`ERROR : ${props.text}`}
      open={props.open}
      closeNotification={() => props.CloseAlert()}
      close
    />
  );
};

const mapStateToProps = state => ({
  open: state.alphaReducer.open,
  text: state.alphaReducer.errorMessage
});
const mapDispatchToProps = {
  CloseAlert
};

export default withStyles(notificationsStyle)(
  connect(mapStateToProps, mapDispatchToProps)(ErrorAlert)
);
