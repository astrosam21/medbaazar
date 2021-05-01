import React, { Component, Fragment } from "react";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Search from "@material-ui/icons/Search";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Grow from "@material-ui/core/Grow";
import withStyles from "@material-ui/core/styles/withStyles";
import FilterList from "@material-ui/icons/FilterList";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import headerLinksStyle from "assets/jss/material-dashboard-pro-react/components/headerLinksStyle";
import SwapVert from "@material-ui/icons/SwapVert";
import DoneAll from "@material-ui/icons/DoneAll";
import Popper from "@material-ui/core/Popper";
import Popover from '@material-ui/core/Popover';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import FilterComponent from "../UtilityComponent/FilterComponent";
import TypesComponent from "../UtilityComponent/TypesComponent";
import SortComponent from "../UtilityComponent/SortComponent";

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        width: "100%",
        zIndex: theme.zIndex.drawer + 1,
        background: "#eee",
        boxShadow: "none"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: "#eee"
    },

    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    title: {
        fontSize: "20px",
        color: "black",
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },

    search: {
        display: "flex",
        "flex-direction": "row-reverse",
        position: "relative",
        borderWidth: 5,
        borderColor: "black",
        // borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing.unit,
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit * 10,
            width: "auto",
            display: "flex",
            "flex-direction": "row-reverse"
        }
    },

    searchIcon: {
        width: theme.spacing.unit * 9,
        color: "gray",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    inputRoot: {
        color: "gray",
        width: "100%"
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit * 10,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit,
        // transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: 200
        }
    },

    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
            paddingRight: theme.spacing.unit * 10
        }
    },

    sectionMobile: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },

    toolbar: theme.mixins.toolbar
});


class SecondHeaderWithFiltered extends Component {
    state = {
        openSort: false,
        openType: false,
        anchorEl: null,
        anchorElType: null,
        anchorElFilter: null,
        anchorElSort: null,
        openType: false,
        openFilter: false,
        openSort: false
    };
    
    popperFilter = event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorElFilter: currentTarget,
            openFilter: !state.openFilter,
            openSort:false,
            openType:false
           
        }));
    };
    selectedTypeFunc = value => {
        console.log(value.target.value)

    }
    popperSort = event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorElSort: currentTarget,
            openSort: !state.openSort,
            openFilter: false,
            openType: false
        }));
    };
    selectedSortFunc = value => {
        console.log(value.target.value)
    }
    popperType = event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorElType: currentTarget,
            openType: !state.openType,
            openFilter: false,
            openSort: false
        }));
    };
    handleClick = event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            openPopper: !state.openPopper
        }));
    };
    handleCloseFilter=event=>{
        const {currentTarget}=event
        this.setState({
                anchorElFilter:currentTarget,
                openFilter:false
        })
    }
    handleCloseType = event => {
        const { currentTarget } = event
        this.setState(state=>({
            anchorElType: currentTarget,
            openType: !state.openType,
        }))
    }
    render() {
        const { classes, headerTitle, buttons, tabButtons, filterList , typeList, sortList} = this.props;
        const {
            anchorEl,
            anchorElFilter,
            anchorElSort,
            anchorElType,
            openPopper,
            openType,
            openFilter,
            openSort
        } = this.state;
        const id = openType ? "simple-type" : null;
        const id1 = openFilter ? "simple-filter" : null;
        const id2 = openSort ? "simple-sort" : null;
        return (
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <div className={classes.sectionDesktop}>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly"
                      }}
                    >
                      <h3>{headerTitle}</h3>
                      <div>
                        <form
                          onSubmit={this._onSubmit}
                          className={classes.search}
                        >
                          <div className="search-link">
                            <CustomInput
                              placeholder="Search here"
                              className={classes.inputInput}
                              inputProps={{
                                placeholder: "Search...",
                                name: "search"
                              }}
                            />
                            <Button
                              color="white"
                              aria-label="edit"
                              justIcon
                              round
                              style={{ marginTop: 20 }}
                              type="submit"
                            >
                              <Search
                                className={
                                  classes.headerLinksSvg +
                                  " " +
                                  classes.searchIcon
                                }
                              />
                            </Button>
                          </div>
                        </form>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          marginTop: 10
                        }}
                      >
                        {tabButtons}
                      </div>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end", flexDirection:"row" }}
                    >
                      <div style={{ marginRight: "10px", marginTop: "10px" }}>
                        {this.props.typeButton ? (
                          <Fragment>
                            <Button
                              simple
                              color="github"
                              onClick={this.popperType}
                            >
                              <DoneAll /> Types
                            </Button>
                            <ClickAwayListener
                              onClickAway={this.handleCloseType}
                            >
                              <Popper
                                id={id}
                                open={openType}
                                anchorEl={anchorElType}
                                transition
                              >
                                {({ TransitionProps }) => (
                                  <Fade {...TransitionProps} timeout={350}>
                                    <Paper>
                                      <TypesComponent
                                        selectedTypeFunc={this.selectedTypeFunc}
                                        optionType={typeList}
                                      />
                                    </Paper>
                                  </Fade>
                                )}
                              </Popper>
                            </ClickAwayListener>
                          </Fragment>
                        ) : (
                          ""
                        )}
                        {this.props.filterButton ? (
                          <Fragment>
                            <Button
                              simple
                              color="github"
                              onClick={this.popperFilter}
                            >
                              <FilterList /> Filters
                            </Button>
                            <ClickAwayListener
                              onClickAway={this.handleCloseFilter}
                            >
                              <Popper
                                id={id1}
                                open={openFilter}
                                anchorEl={anchorElFilter}
                                transition
                              >
                                {({ TransitionProps }) => (
                                  <Fade {...TransitionProps} timeout={350}>
                                    <Paper>
                                      <FilterComponent
                                        filterList={filterList}
                                      />
                                    </Paper>
                                  </Fade>
                                )}
                              </Popper>
                            </ClickAwayListener>
                          </Fragment>
                        ) : (
                          ""
                        )}
                        {this.props.sortButton ? (
                          <Fragment>
                            <Button
                              simple
                              color="github"
                              onClick={this.popperSort}
                            >
                              <SwapVert /> Sort
                            </Button>
                            <Popper
                              id={id2}
                              open={openSort}
                              anchorEl={anchorElSort}
                              transition
                            >
                              {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                  <Paper>
                                    <SortComponent
                                      selectedSortFunc={this.selectedSortFunc}
                                      optionSort={sortList}
                                    />
                                  </Paper>
                                </Fade>
                              )}
                            </Popper>
                          </Fragment>
                        ) : (
                          ""
                        )}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-end",
                          marginTop: 10
                        }}
                      >
                        {buttons}
                      </div>
                    </div>
                  </GridItem>
                </GridContainer>
              </div>
              <div className={classes.sectionMobile}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    left: 10,
                    marginTop: 10
                  }}
                >
                  <div>{tabButtons}</div>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        );
    }
}

SecondHeaderWithFiltered.defaultProps = {

};

SecondHeaderWithFiltered.propTypes = {
    classes: PropTypes.object.isRequired,
    headerTitle: PropTypes.string.isRequired,
    buttons: PropTypes.node,
    tabButtons: PropTypes.node,
    typeButton:PropTypes.bool,
    filterButton:PropTypes.bool,
    sortButton:PropTypes.bool,
    filterList:PropTypes.array,
    sortList:PropTypes.array,
    typeList:PropTypes.array
};

export default withStyles(styles)(SecondHeaderWithFiltered);