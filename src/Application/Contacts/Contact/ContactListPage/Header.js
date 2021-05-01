import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import SecondHeader from "../../../../Alphacomponents/Header/SecondHeader";
import Button from "components/CustomButtons/Button.jsx";
import CustomForm from "../../../../Alphacomponents/CustomForms/CustomFormContainer";

const data = [
    {
        key: "name",
        placeholder: "Please Input Here.. ",
        label: "Name",
        type: "text",
        props: { required: true }
    },
    {
        key: "amount",
        placeholder: "Please Input Here.. ",
        label: "Amount",
        type: "number"
    },
    {
        key: "date",
        placeholder: "Please Select Date.. ",
        label: "Closing Date",

        type: "date",
        props: { required: true }
    },
    {
        key: "Stage",
        placeholder: "Please Input Here.. ",
        label: "Stage",
        type: "select",

        props: { required: true },
        options: [
            "Appointment Scheduled",
            "Qualified To Buy",
            "Presentation Scheduled",
            "Decision Maker Bought In",
            "Contract Sent",
            "Closed Won",
            "Closed Lost"
        ]
    },
    {
        key: "description",
        placeholder: "Please Input Here.. ",
        label: "Description",
        type: "multi_text"
    },
    {
        key: "employees",
        placeholder: "Please Select Here.. ",
        label: "Number Of Employees",
        type: "number",
        props: { min: 0, max: 5 }
    },
    {
        key: "Closed",
        placeholder: "Please Select... ",
        label: "Closed",
        type: "checkbox",
        options: [
            { key: "won", label: "Won", value: "won" },
            { key: "lost", label: "Lost", value: "lost" }
        ]
    }
];

class HeaderSample extends Component {
    state = {
        visible: false
    };

    importClick() {
        console.log("Import Clicked");
    }

    addContactClick() {
        this.setState({ visible: true });
    }

    buttonGroup() {
        return (
            <Fragment>
                <Button color="rose" onClick={this.importClick.bind(this)}>
                    Import
                </Button>
                <Button color="rose" onClick={this.addContactClick.bind(this)}>
                    Create Contact
                </Button>
                <CustomForm
                    visible={this.state.visible}
                    close={() => this.setState({ visible: false })}
                    data={data}
                />
            </Fragment>
        );
    }
    render() {
        return (
            <Fragment>
                <SecondHeader
                    headerTitle={"Contact"}
                    buttons={this.buttonGroup()}
                    handleDrawerToggle={this.props.handleDrawerToggle}
                />
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderSample);
