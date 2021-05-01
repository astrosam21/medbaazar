import React, { Component, Fragment } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import AddAlert from "@material-ui/icons/AddAlert";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";


const styles = theme => ({
  lineStyles: {
    position: "absolute",
    bottom: -55,
    height: "100%",
    width: 3,
    background: "#a0a0a0"
  },
  iconStyles: {
    display: "flex",
    width: 42,
    height: 42,
    position: "relative",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginLeft: "-18px",
    zIndex: 10,
    backgroundColor: "#e34"
  },
  eventContainer: {
    marginLeft: "50px",
    display: "grid"
  },
  iconMoreStyles: {
    float: "right",
    marginTop: "-35px",
    marginRight: "10px",
    display: "flex",
    width: 42,
    height: 42,
    position: "relative",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginLeft: "-18px",
    zIndex: 10,
    
  }
});

class TimelineItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, data } = this.props;
    
    return (
      <Fragment>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
                  <br />
                <SnackbarContent
                  message={this.props.title}
                  close
                  icon={AddAlert}
                  style={{color:"#fafafa", backgroundColor:"#fafafa"}}
                />
          </GridItem>
        </GridContainer>
      </Fragment>
    );
  }
}
export default withStyles(styles)(TimelineItem)
