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
import Typography from "@material-ui/core/Typography";
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
import CustomDropdown from "v1Components/CustomDropdown";
import selectStyles from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import customizedTableStyle from "./customizedTableStyle.jsx";
import { CircularProgress } from "@material-ui/core";

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

class CustomTable extends React.Component {
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
        className={classes.positionAbsolute}
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
        className={classes.positionAbsolute}
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
      tableBodyLoading
    } = this.props;
    const { headArray, checked, rowsPerPage, isHovering } = this.state;
    const { buttonName, buttonMode, onRowButtonClick, page } = this.props;

    let toolBar;
    if (checked.length > 0) {
      toolBar = (
        <TableToolbar
          deleteButtonAction={() => {this.props.deleteButtonAction(checked);
          this.setState({checked:[]})}}
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
                      {this.props.checkboxes && this.checkBoxHead(classes, key)}
                      <div
                        style={{
                          marginLeft: this.props.checkboxes ? "40px" : "0px"
                        }}
                      >
                        {prop}
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
          {tableBodyLoading ? (
            <GridContainer justify="center">
              <GridItem>
                <div
                  style={{
                    display: "flex",
                    height: "350px",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center"
                  }}
                >
                  <CircularProgress style={{ alignSelf: "center" }} />
                </div>
              </GridItem>
            </GridContainer>
          ) : (
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
                        <TableCell className={tableCellClasses} key={skey}>
                          {this.props.checkboxes &&
                            this.checkBoxes(classes, key)}

                          <Typography
                            onClick={() => this.props.onTitleClick(key)}
                            style={{
                              cursor: "pointer",
                              marginLeft: this.props.checkboxes ? "40px" : "0px"
                            }}
                          >
                            {prop}
                          </Typography>
                          {this.state.isHovering &&
                          key === this.state.indexRow ? (
                            <div
                              style={{
                                position: "absolute",
                                right: "10px",
                                marginLeft: "10px",
                                bottom: "5px"
                              }}
                            >
                              {this.renderButton(key)}
                            </div>
                          ) : null}
                        </TableCell>
                      ) : (                  
                        <TableCell className={tableCellClasses} key={skey}>
                          {prop}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
        <TableFooter
          colSpan={6}
          totalCount={this.props.totalItem}
          rowsPerPage={rowsPerPage}
          page={page}
          pageEnd={this.props.pageEnd}
          rangeStart={this.props.rangeStart}
          rangeEnd={this.props.rangeEnd}
          onChangePageNext={(rangeStart, totalCount) =>
            this.props.handleChangePageNext(rangeStart, totalCount)
          }
          onChangePageBack={rangeStart =>
            this.props.handleChangePageBack(rangeStart)
          }
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </div>
    );
  }
}

CustomTable.defaultProps = {
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
  customHeadClassesForCells: [],
  onTitleClick:()=>{}
};

CustomTable.propTypes = {
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
  editButtonAction: PropTypes.func,
  checkboxes: PropTypes.bool,
  handleChangePageNext: PropTypes.func,
  handleChangePageBack: PropTypes.func,
  handleRowClick: PropTypes.func,
  onTitleClick: PropTypes.func,
  tableBodyLoading:PropTypes.bool,
  rangeStart:PropTypes.number,
  rangeEnd:PropTypes.number,
  page:PropTypes.number,
  totalItems:PropTypes.number
};

export default withStyles(extendedTablesStyle)(
  withStyles(selectStyles)(
    compose(
      withStyles(tableStyle),
      withRouter
    )(CustomTable)
  )
);
