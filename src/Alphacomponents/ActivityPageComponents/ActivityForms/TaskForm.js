import React from "react";
import DraftInput from "../../MicroComponents/draftInput";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "./forms.css";
import { TextField } from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import DateInput from "../../MicroComponents/dateInput";
import SelectInput from "../../MicroComponents/selectInput.js";
import TitleInput from "../../MicroComponents/titleInput.js";
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.jsx";
import { connect } from "react-redux";
import { compose } from "recompose";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";
import AutoCompleteInput from "../../MicroComponents/autoCompleteInput";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
const btnSize = {
	width: 100
};
function Transition(props) {
	return <Slide direction="down" {...props} />;
}

class TaskForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			save: true,
			open: this.props.isTaskOpen,
			modal: false,
			cancel: true,
			options: ["Deepak", "Rahul", "Anish"],
			companies: ["HCL", "TCS"],
			types: ["Call", "Mail", "ToDo"],
			simpleSelect: "",
			selectCompany: "",
			selectType: "",
			date: "",
			editorState: EditorState.createEmpty()
		};

		this.save = this.save.bind(this);
		this.cancel = this.cancel.bind(this);
		this.verifyLength = this.verifyLength.bind(this);
		this.handleClickOpen = this.handleClickOpen.bind(this);
	}

	handleClickOpen(modal) {
		var x = [];
		x[modal] = true;
		this.setState({ modal: true });
		console.log("modal");
	}
	handleClose(modal) {
		var x = [];
		x[modal] = false;
		this.setState(x);
		this.props.handleClose();
	}

	save(event) {
		this.setState({ save: this.state.save });
		this.props.close();
	}
	cancel(event) {
		this.setState({ cancel: this.state.cancel });
		this.props.close();
	}
	_myDate = (moment) => {
		console.log(moment);
	};
	verifyLength(value, length) {
		if (value.length >= length) {
			return true;
		}
		return false;
	}
	change = (event, stateName, type, stateNameEqualTo, maxValue) => {
		switch (type) {
			case "length":
				if (this.verifyLength(event.target.value, stateNameEqualTo)) {
					this.setState({ [stateName + "State"]: "success" });
					this.setState({ title: event.target.value });
				} else {
					this.setState({ [stateName + "State"]: "error" });
				}
				break;
			default:
				break;
		}
		console.log(this.state.title);
	};

	onEditorStateChange = (editorState) => {
		this.setState({
			editorState: editorState
		});
		console.log(this.state.editorState);
	};

	handleSimpleSelect = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		console.log(event.target.name);
	};
	_handleDate = (date) => {
		console.log(date);
		this.setState({ date: date });
		console.log(this.state.date);
	};
	render() {
		const { classes } = this.props;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={12}>
							<TitleInput
								controlFunc={this.change}
								inputType={"text"}
								placeholder={"Input here"}
								label={"Title "}
								content={this.state.title}
								fullWidth={true}
							/>
						</GridItem>
						<GridItem xs={6} sm={6} md={6} style={styles.midDiv}>
							<DateInput handleDate={this._handleDate} date={this.state.date} fullWidth={true} labelText={"Choose a Date"} />
						</GridItem>
						<GridItem sm={6} md={6}>
							<SelectInput
								label={"Assign To"}
								name={"simpleSelect"}
								selectedOption={this.state.simpleSelect}
								options={this.state.options}
								controlFunc={this.handleSimpleSelect}
								placeholder={"Assign To"}
							/>
						</GridItem>
						<GridItem xs={6} sm={6} md={6}>
							<SelectInput
								label={"Company"}
								name={"selectCompany"}
								selectedOption={this.state.selectCompany}
								options={this.state.companies}
								controlFunc={this.handleSimpleSelect}
								placeholder={"Company"}
							/>
						</GridItem>
						<GridItem xs={6} sm={6} md={6}>
							<SelectInput
								label={"Type"}
								name={"selectType"}
								selectedOption={this.state.selectType}
								options={this.state.types}
								controlFunc={this.handleSimpleSelect}
								placeholder={"Type"}
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={12}>
							<DraftInput editorState={this.state.editorState} controlFunc={this.onEditorStateChange} />
						</GridItem>
                        <GridItem md={12}>
                            <GridContainer justify="flex-end">
                                <GridItem>
                                    <Button color="rose" onClick={this.save} style={{ width: 120 }}>
                                        Add
						    </Button>

                                    <Button color="rose" onClick={this.cancel} style={{ width: 120 }}>
                                        cancel
						</Button>
                                </GridItem>

                            </GridContainer>


                        </GridItem>
					</GridContainer>
				</form>
			</div>
		);
	}
}
const styles = {
	midDiv: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center"
	}
};

const mapStateToProps = (state) => {
	return {
		
	};
};
const mapDispatchToProps = (state) => {};
export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withStyles(modalStyle)
)(TaskForm);
