import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import sidebarStyle from "assets/jss/material-dashboard-pro-react/components/sidebarStyle.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import List from "@material-ui/core/List";
import Popover from "@material-ui/core/Popover";
import ListSubheader from "@material-ui/core/ListSubheader";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import { compose } from "recompose";
import { withRouter } from "react-router"

import AutoCompleteInput from "../MicroComponents/autoCompleteInput"
import DateInput from "../MicroComponents/dateInput"
import NumberInput from "../MicroComponents/numberInput"
import SelectInput from "../MicroComponents/selectInput"
import Drawer from "@material-ui/core/Drawer";
const drawerWidth = 240
const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 300,

    },
    item: {
        paddingLeft: theme.spacing.unit
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
        borderRadius: 5
    },
    drawerPaper: {
        border: "none",
        bottom: "0",
        transitionProperty: "top, bottom, width",
        transitionDuration: ".2s, .2s, .35s",
        transitionTimingFunction: "linear, linear, ease",
        width: drawerWidth,
        paddingRight: 30
    }
});




class FiltersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            anchorEl: null,
            type: "",
            item: ""
        }
        this.handleClickBox = this.handleClickBox.bind(this)
    }
    isSelected(pathname, path) {
        const isRootPath = path === this.props.rootRoute && pathname === "/";
        return path === pathname || isRootPath
    }
    handleClickLink = item => {
        console.log(item);
    };

    handleClickBox = (event, item, type) => {
        this.setState({
            anchorEl: event.currentTarget,
        });
        this.setState({ type: type, item: item });

    }
    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };

    handleClickPopOver = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };

    renderFilterList() {
        return
    }
    toggleMenu = () => {
        console.log("headerSample")
        this.props.handleDrawerToggle()
    }
    render() {
        const { classes, filtersList, routesList, loading } = this.props;
        const { pathname } = this.props.location;
        const { anchorEl, type, item } = this.state
        const open = Boolean(anchorEl);
        let displaySearch;
        if (type === "text") {
            displaySearch =
                <div style={{ display: "flex", flexDirection: "column", padding: 10, alignContent: "center", justifyContent: "center" }}>

                    <h4>{item}</h4>
                    <AutoCompleteInput />

                    <Button
                        style={{ width: 150, alignSelf: "center" }}
                        round
                        contained
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="primary"
                        onClick={this.handleClose}
                    >
                        Search
                </Button>

                </div>

        }
        if (type === "date") {
            displaySearch = <div style={{ display: "flex", flexDirection: "column", padding: 10, alignContent: "center", justifyContent: "flex-start" }}>

                <h4>{item}</h4>
                <DateInput timeformat={false} />

                <Button
                    style={{ alignSelf: "center" }}
                    round
                    contained
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="primary"
                    onClick={this.handleClose}
                >
                    Search
               </Button>

            </div>

        }
        if (type === "number") {
            displaySearch = <div style={{ display: "flex", flexDirection: "column", padding: 10, alignContent: "center", justifyContent: "center" }}>

                <h4>{item}</h4>
                <NumberInput />

                <Button
                    style={{ width: 150, alignSelf: "center" }}
                    round
                    contained
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="primary"
                    onClick={this.handleClose}
                >
                    Search
        </Button>

            </div>

        }
        if (type === "array") {
            displaySearch = <div style={{ display: "flex", flexDirection: "column", padding: 10, alignContent: "center", justifyContent: "center" }}>

                <h4>{item}</h4>
                <SelectInput options={["Appointment Scheduled", "Presentation Scheduled", "Decision Maker Bought in", "CLosed Won", "Closed Lost"]} />

                <Button
                    style={{ width: 150, alignSelf: "center" }}
                    round
                    contained
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="primary"
                    onClick={this.handleClose}
                >
                    Search
        </Button>

            </div>
        }
        if (type === "boolean") {
            displaySearch =
                <div style={{ display: "flex", flexDirection: "column", padding: 10, alignContent: "center", justifyContent: "center" }}>

                    <h4>{item}</h4>
                    <SelectInput options={["Appointment Scheduled", "Presentation Scheduled", "Decision Maker Bought in", "CLosed Won", "Closed Lost"]} />

                    <Button
                        style={{ width: 150, alignSelf: "center" }}
                        round
                        contained
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="primary"
                        onClick={this.handleClose}
                    >
                        Search
                   </Button>

                </div>
        }
        else {

        }
        var list =
            <Fragment>
                
                {filtersList.length > 0 ? (
                    <Fragment>
                        {filtersList.map(list => {
                            return (
                                <List
                                    className={classes.root}
                                    key={list.id}
                                    subheader={
                                        <ListSubheader>{list.title}</ListSubheader>
                                    }
                                >
                                    {list.items.map(item => {
                                        return (
                                            <div key={item.id}>
                                                {item.subitems != null ? (
                                                    <div key={item.id}>
                                                        <ListItem
                                                            button
                                                            key={item.id}
                                                            onClick={this.handleClick.bind(
                                                                this,
                                                                item.name
                                                            )}
                                                        >
                                                            <ListItemText primary={item.name} />
                                                            {this.state[item.name] ? (
                                                                <ExpandLess />
                                                            ) : (
                                                                    <ExpandMore />
                                                                )}
                                                        </ListItem>
                                                        <Collapse
                                                            key={list.items.id}
                                                            component="li"
                                                            in={this.state[item.name]}
                                                            timeout="auto"
                                                            unmountOnExit
                                                        >
                                                            <List
                                                                style={{
                                                                    overflow: "scroll",
                                                                    height: "350px",
                                                                    overflowX: "hidden"
                                                                }}
                                                                disablePadding
                                                            >
                                                                {item.subitems.map(sitem => {
                                                                    return (
                                                                        <ListItem
                                                                            button
                                                                            key={sitem.id}
                                                                            onClick={event =>
                                                                                this.handleClickBox(
                                                                                    event,
                                                                                    sitem.name,
                                                                                    sitem.type
                                                                                )
                                                                            }
                                                                            className={classes.nested}
                                                                        >
                                                                            <ListItemText
                                                                                key={sitem.id}
                                                                                primary={sitem.name}
                                                                            />
                                                                        </ListItem>
                                                                    );
                                                                })}
                                                            </List>
                                                        </Collapse>{" "}
                                                    </div>
                                                ) : (
                                                        <ListItem
                                                            button
                                                            onClick={this.handleClickLink.bind(
                                                                this,
                                                                item.name
                                                            )}
                                                            key={item.id}
                                                        >
                                                            <ListItemText primary={item.name} />
                                                        </ListItem>
                                                    )}
                                                <Popover
                                                    id="simple-popper"
                                                    open={open}
                                                    anchorEl={anchorEl}
                                                    onClose={this.handleClose}
                                                    anchorOrigin={{
                                                        vertical: "bottom",
                                                        horizontal: "center"
                                                    }}
                                                    transformOrigin={{
                                                        vertical: "top",
                                                        horizontal: "center"
                                                    }}
                                                >
                                                    <formModal modalTitle="Associated">
                                                        <forms>{displaySearch}</forms>
                                                    </formModal>
                                                </Popover>
                                                {/* <filterPopOver open={open} anchorEl={this.state.anchorEl} type={this.state.type} item={this.state.item}/> */}
                                            </div>
                                        );
                                    })}
                                    <Divider key={list.id} absolute />
                                </List>
                            );
                        })}
                    </Fragment>
                ) : null}
            </Fragment>
        return (
            <div>
                <br />
                <Hidden smDown implementation="css">
                    <Hidden smDown>
                        {list}
                    </Hidden>
                </Hidden>
                <Hidden mdUp implementation="css">
                    <Hidden mdUp>
                        <Drawer
                            variant="temporary"
                            anchor={"left"}
                            open={this.props.open}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            onClose={this.toggleMenu}
                            ModalProps={{
                                keepMounted: false// Better open performance on mobile.
                            }}
                        >
                            {list}
                        </Drawer>
                    </Hidden>
                </Hidden>
            </div>
        );
    }
}

FiltersList.defaultProps = {
    routesList: [],
    filtersList: [],
}

FiltersList.propTypes = {
    classes: PropTypes.object.isRequired,
    filtersList: PropTypes.array,
    routesList: PropTypes.array,
    loading: PropTypes.bool,
    handleDrawerToggle: PropTypes.func
};



export default compose(withRouter, withStyles(styles))(FiltersList);