import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import notificationsStyle from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.jsx";
function SuccessAlert(props) {
  return (
    <Snackbar
      place={props.place}
      color={props.snackColor}
      icon={props.icon}
      message={props.errorMessage}
      open={props.opentc}
      closeNotification={() => props.closeNotification()}
      close
    />
  );
}

export default withStyles(notificationsStyle)(SuccessAlert);
