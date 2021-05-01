import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const TASK_LIMIT = 8;

const styles = {
  root: {
    float: "right",
    marginTop: 3,
    marginRight: 50
  }
};

class TableFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBackButtonClick = () => {
    this.props.onChangePageBack(this.props.rangeStart);
  };

  handleNextButtonClick = () => {
    this.props.onChangePageNext(this.props.rangeStart, this.props.totalCount);
  };

  render() {
    const { classes, count, page, rowsPerPage } = this.props;
    //  console.log(this.props.rangeEnd)
    return (
      <div style={styles.root}>
        <strong>
          {this.props.rangeStart} - {this.props.rangeEnd}
        </strong>
        <span> of </span>
        <strong>{"  " + this.props.totalCount + " "}</strong>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={this.props.page === 0}
          aria-label="Previous Page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={() => this.handleNextButtonClick()}
          disabled={this.props.totalCount <= this.props.rangeEnd}
          aria-label="Next Page"
        >
          <KeyboardArrowRight />
        </IconButton>
      </div>
    );
  }
}

TableFooter.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePageNext: PropTypes.func.isRequired,
  onChangePageBack: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

export default TableFooter;
