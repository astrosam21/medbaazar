import React, { Component, Fragment } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTable from "../../../../Alphacomponents/Table/Table";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Assignment from "@material-ui/icons/Assignment";
import extendedTablesStyle from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.jsx";
import { compose } from "recompose";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { getTableDataArray } from "../../../../Action/Contact/TableAction";
import { withRouter } from "react-router-dom";
import ConfirmationDeleteAlert from "../../../../Alphacomponents/Alert/ConfirmationDeleteAlert";
import PreviewContainer from "./PreviewContainer";

var tableHeadData = ["Email", "First Name", "Last Name", "Job Title", "Phone Number"];

class TableComponent extends Component {
    state = {
        page: 0,
        rowsPerPage: 8,
        checkedId: "",
        deleteAlert: false,
        visible: false,
        currentkey: ""
    };

    componentDidMount() {
        const { pathname } = this.props.location;
        this.props.getTableDataArray(pathname);
    }
    previewClick = index => {
        console.log(index + "  PREVIEW");
    };

    editClick = index => {
        console.log(index + "  edit");
    };
    _deleteButtonActionCall = checked => {
        this.setState({ deleteAlert: !this.state.deleteAlert });
        this.setState({ checkedId: checked });
    };
    _hideDeleteAlert = () => {
        this.setState({ deleteAlert: !this.state.deleteAlert });
    };
    deleteFunction(Ids) {
        console.log(Ids + " : deleted");
    }

    onrowButtonClick = key => {
        this.setState({ currentkey: key, visible: true });
    };

    render() {
        const { classes, tableBodyData } = this.props;
        return (
            <Fragment>
                <GridContainer>
                    <PreviewContainer
                        visible={this.state.visible}
                        onClose={() => this.setState({ visible: false })}
                        resetKey={() => this.setState({ currentkey: "" })}
                        data={tableBodyData}
                        key={this.state.currentkey}
                    />
                    <GridItem md={12}>
                        <Card>
                            <CardHeader color="rose" icon>
                                <CardIcon color="rose">
                                    <Assignment />
                                </CardIcon>
                                <h3 className={classes.cardIconTitle}>Contact Table</h3>
                            </CardHeader>
                            <CardBody>
                                <CustomTable
                                    hover
                                    buttonMode={"button"}
                                    buttonName={"Preview"}
                                    onRowButtonClick={key => this.onrowButtonClick(key)}
                                    deleteButtonAction={checked =>
                                        this._deleteButtonActionCall(checked)
                                    }
                                    linkPath={"/timeline/"}
                                    checkboxes={true}
                                    handleChangePageNext={() => this.handleChangePageNext()}
                                    handleChangePageBack={() => this.handleChangePageBack()}
                                    tableHead={tableHeadData}
                                    tableData={Array.isArray(tableBodyData) ? tableBodyData : []}
                                    customCellClasses={[
                                        classes.left,
                                        classes.center,
                                        classes.center,
                                        classes.center,
                                        classes.center
                                    ]}
                                    customClassesForCells={[0, 1, 2, 3, 4]}
                                    customHeadCellClasses={[
                                        classes.left,
                                        classes.center,
                                        classes.center,
                                        classes.center,
                                        classes.center
                                    ]}
                                    customHeadClassesForCells={[0, 1, 2, 3, 4]}
                                />
                            </CardBody>
                        </Card>
                    </GridItem>
                    {this.state.deleteAlert ? (
                        <ConfirmationDeleteAlert
                            alertHide={this._hideDeleteAlert}
                            checkedId={this.state.checkedId}
                            deleteFunction={this.deleteFunction}
                            warningMessage={"Are you sure?"}
                            warningDescriptionMessage={"You will not be able to recover this File!"}
                            successMessage={"Your Leads has been deleted."}
                        />
                    ) : (
                        ""
                    )}
                </GridContainer>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    tableBodyData: state.Table.tableBodyData,
    loading: state.Table.loading
});
const mapDispatchToProps = {
    getTableDataArray
};

export default compose(
    withRouter,
    withStyles(extendedTablesStyle),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(TableComponent);
