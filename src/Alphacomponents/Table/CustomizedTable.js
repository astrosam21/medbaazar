import React, { Fragment } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Check from "@material-ui/icons/Check";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import Checkbox from "@material-ui/core/Checkbox";
import tableStyle from "assets/jss/material-dashboard-pro-react/components/tableStyle";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Button from "components/CustomButtons/Button.jsx";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import classNames from "classnames";
import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";
import TableFooter from "./TableFooter.js";
import { NavLink, Link, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { compose } from "recompose";
import TableToolbar from "./TableToolbar";
import CustomDropdown from "../../CTcomponents/v1Components/CustomDropdown";
import selectStyles from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

const styles = theme => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center"
    }
  },
  sectionMobile: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class CustomizedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      page: 0,
      rowsPerPage: 8,
      isHovering: false,
      indexRow: ""
    };
    this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.toggleHoverState = this.toggleHoverState.bind(this);
  }
  componentDidMount() {}

  isSelected = id => this.state.checked.indexOf(id) !== -1;

  checkBoxHead(classes, index) {
    return (
      <Checkbox
        tabIndex={-1}
        onClick={this.handleSelectAllClick}
        checkedIcon={<Check className={classes.checkedIcon} />}
        icon={<Check className={classes.uncheckedIcon} />}
        classes={{
          checked: classes.checked
        }}
      />
    );
  }
  checkBoxes(classes, index) {
    return (
      <Checkbox
        tabIndex={-1}
        checked={this.state.checked.indexOf(index) !== -1 ? true : false}
        onClick={() => {
          this.handleToggle(index);
        }}
        checkedIcon={<Check className={classes.checkedIcon} />}
        icon={<Check className={classes.uncheckedIcon} />}
        classes={{
          checked: classes.checked
        }}
      />
    );
  }

  handleSelectAllClick = event => {
    console.log("head");
    if (event.target.checked) {
      this.setState(state => ({
        checked: this.props.tableData.map((n, index) => index)
      }));
      return;
    }
    this.setState({ checked: [] });
  };

  handleToggle = value => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    let newChecked = [];

    if (currentIndex === -1) {
      newChecked = newChecked.concat(checked, value);
    } else if (currentIndex === 0) {
      newChecked = newChecked.concat(checked.slice(1));
    } else if (currentIndex === checked.length - 1) {
      newChecked = newChecked.concat(checked.slice(0, -1));
    } else if (currentIndex > 0) {
      newChecked = newChecked.concat(
        checked.slice(0, currentIndex),
        checked.slice(currentIndex + 1)
      );
    }

    this.setState({
      checked: newChecked
    });
  };
  handleMouseHover = index => {
    this.setState({ indexRow: index });
    this.setState(this.toggleHoverState);
  };

  
  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }
  handleClick = path => {
    this.props.history.push(path);
  };
  renderButton(key) {
    if (this.props.buttonMode === "button") {
      return (
        <Button
          color={"rose"}
          size="sm"
          onClick={() => this.props.onRowButtonClick(key)}
        >
          {this.props.buttonName}
        </Button>
      );
    }
    if (this.props.buttonMode === "dropdown") {
      return (
        <CustomDropdown
          buttonProps={{ size: "sm", color: "rose" }}
          buttonColor={"rose"}
          buttonText={this.props.buttonName}
          dropdownList={this.props.dropdownList}
          onSelect={prop => {
            this.props.onRowButtonClick(prop, key);
          }}
        ></CustomDropdown>
      );
    }
  }
  propValidate(prop) {
    var { classes } = this.props;
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);
    if (prop && prop.match(regex)) {
      return (
        <Fragment>
          <div className={classes.imgContainer}>
            <img
              src={prop}
              alt="..."
              className={classes.img}
              style={{ borderRadius: "5px" }}
            />
          </div>
        </Fragment>
      );
    } else return prop;
  }

  render() {
    const {
      classes,
      tableHead,
      tableData,
      tableHeaderColor,
      hover,
      colorsColls,
      coloredColls,
      customCellClasses,
      customClassesForCells,
      striped,
      tableShopping,
      customHeadCellClasses,
      customHeadClassesForCells,
      linkPath
    } = this.props;
    const { headArray, checked, rowsPerPage, page, isHovering } = this.state;
    const { buttonName, buttonMode, onRowButtonClick } = this.props;

    let toolBar;
    if (checked.length > 0) {
      toolBar = (
        <TableToolbar
          deleteButtonAction={() => this.props.deleteButtonAction(checked)}
          checked={checked}
          numSelected={checked.length}
          editButtonAction={() => this.props.editButtonAction(checked)}
        />
      );
    } else {
    }

    return (
      <div className={classes.tableResponsive}>
        {toolBar}
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor]}>
              <TableRow className={classes.tableRow}>
                {tableHead.map((prop, key) => {
                  const tableCellClasses =
                    classes.tableHeadCell +
                    " " +
                    classes.tableCell +
                    " " +
                    cx({
                      [customHeadCellClasses[
                        customHeadClassesForCells.indexOf(key)
                      ]]: customHeadClassesForCells.indexOf(key) !== -1,
                      [classes.tableShoppingHead]: tableShopping,
                      [classes.tableHeadFontSize]: !tableShopping
                    });
                  return key === 0 ? (
                    <TableCell className={tableCellClasses} key={key}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignContent: "center",
                          alignItems: "center",
                          padding: 5
                        }}
                      >
                        <div style={{marginLeft:"-20px"}}>
                          {this.props.checkboxes &&
                            this.checkBoxHead(classes, key)}
                        </div>

                        <div
                          style={{
                            marginLeft: this.props.checkboxes ? "40px" : "0px"
                          }}
                        >
                          {prop}
                        </div>
                      </div>
                    </TableCell>
                  ) : (
                    <TableCell className={tableCellClasses} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {tableData.map((prop, key) => {
              var rowColor = "";
              var rowColored = false;
              if (prop.color !== undefined) {
                rowColor = prop.color;
                rowColored = true;
                prop = prop.data;
              }
              const tableRowClasses = cx({
                [classes.tableRowHover]: hover,
                [classes[rowColor + "Row"]]: rowColored,
                [classes.tableStripedRow]: striped && key % 2 === 0
              });

              return (
                <TableRow
                  key={key}
                  hover={hover}
                  onMouseEnter={this.handleMouseHover.bind(this, key)}
                  onMouseLeave={this.handleMouseHover}
                  onClick={()=>this.props.handleRowClick(key)}
                  className={classes.tableRow + " " + tableRowClasses}
                >
                  {prop.map((prop, skey) => {
                    const tableCellClasses =
                      classes.tableCell +
                      " " +
                      cx({
                        [classes[colorsColls[coloredColls.indexOf(skey)]]]:
                          coloredColls.indexOf(skey) !== -1,
                        [customCellClasses[
                          customClassesForCells.indexOf(skey)
                        ]]: customClassesForCells.indexOf(skey) !== -1
                      });
                    return skey === 0 ? (
                      <TableCell
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignContent: "center",
                          alignItems: "center",
                          padding: 5,
                          minHeight: "100px"
                        }}
                        key={skey}
                      >
                        {this.props.checkboxes && this.checkBoxes(classes, key)}
                        {prop.map((propMail, pkey) => {
                          return (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignContent: "center",
                                alignItems: "center"
                              }}
                            >
                              <div>
                                {pkey === 0 ? (
                                  <div
                                    style={{
                                      marginLeft: this.props.checkboxes
                                        ? "40px"
                                        : "0px"
                                    }}
                                  >
                                    {this.propValidate(propMail)}
                                  </div>
                                ) : null}
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                {pkey === 1 ? <p>{propMail}</p> : null}
                              </div>
                            </div>
                          );
                        })}
                        {this.state.isHovering &&
                        key === this.state.indexRow ? (
                          <GridContainer
                            justify="flex-end"
                            style={{ position: "absolute" }}
                          >
                            <GridItem
                              style={{ marginRight: 50}}
                            >
                              {this.renderButton(key)}
                            </GridItem>
                          </GridContainer>
                        ) : null}
                      </TableCell>
                    ) : (
                      <TableCell
                        className={tableCellClasses}
                        style={{ minHeight: "100px" }}
                        key={skey}
                      >
                        {prop}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TableFooter
          colSpan={6}
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePageNext={() => this.props.handleChangePageNext()}
          onChangePageBack={() => this.props.handleChangePageBack()}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </div>
    );
  }
}

CustomizedTable.defaultProps = {
  tableHeaderColor: "gray",
  hover: false,
  colorsColls: [],
  coloredColls: [],
  striped: false,
  tableData: [],
  tableHead: [],
  customCellClasses: [],
  customClassesForCells: [],
  customHeadCellClasses: [],
  customHeadClassesForCells: []
};

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  // Of(PropTypes.arrayOf(PropTypes.node)) || Of(PropTypes.object),
  tableData: PropTypes.array,
  hover: PropTypes.bool,
  coloredColls: PropTypes.arrayOf(PropTypes.number),
  // Of(["warning","primary","danger","success","info","rose","gray"]) - colorsColls
  colorsColls: PropTypes.array,
  customCellClasses: PropTypes.arrayOf(PropTypes.string),
  customClassesForCells: PropTypes.arrayOf(PropTypes.number),
  customHeadCellClasses: PropTypes.arrayOf(PropTypes.string),
  customHeadClassesForCells: PropTypes.arrayOf(PropTypes.number),
  striped: PropTypes.bool,
  // this will cause some changes in font
  tableShopping: PropTypes.bool,
  buttonName: PropTypes.string,
  buttonMode: PropTypes.oneOf(["button", "dropdown"]),
  dropdownList: PropTypes.array,
  onRowButtonClick: PropTypes.func,
  deleteButtonAction: PropTypes.func,
  linkPath: PropTypes.string,
  checkboxes: PropTypes.bool,
  handleChangePageNext: PropTypes.func,
  handleChangePageBack: PropTypes.func
};

export default withStyles(selectStyles)(
  compose(
    withStyles(extendedTablesStyle),
    withRouter
  )(CustomizedTable)
);
