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
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
    lineStyles: {
        position: "absolute",
        bottom: -25,
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
        marginLeft: "50px"
    }
});

class TimelineItemAction extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes, data } = this.props;
        return (
            <Fragment>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12} lg={12}>
                                <div>
                                    <div className={classes.lineStyles} />
                                    <span>
                                        <Avatar className={classes.iconStyles}>
                                            <Icon color="#fff">tab</Icon>
                                        </Avatar>
                                    </span>
                                    <div className={classes.eventContainer}>
                                        <Typography variant="overline" gutterBottom>
                                            {data.time}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {data.description}
                                        </Typography>
                                    </div>
                                    <Avatar className={classes.iconStyles}>
                                        <Icon color="#fff">expand_more</Icon>
                                    </Avatar>
                                    
                                </div>
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </Fragment>
        );
    }
}
export default withStyles(styles)(TimelineItemAction)
