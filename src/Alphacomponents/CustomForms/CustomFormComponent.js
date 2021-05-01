import React, { Component, Fragment } from "react";
import TitleInput from "../MicroComponents/titleInput";
import MultiInput from "../MicroComponents/multiSelectInput";
import DateInput from "../MicroComponents/dateInput";
import SelectInput from "../MicroComponents/selectInput";
import AutoCompleteInput from "../MicroComponents/autoCompleteInput";
import AutoSuggest from "../MicroComponents/autoSuggest";
import NumberInput from "../MicroComponents/numberInput";
import purple from "@material-ui/core/colors/purple";
import checkBoxInput from "../MicroComponents/chechBoxInput";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { connect } from "react-redux";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import axios from "axios";
// import "myCustomComponents/taskComponent/styles/main.css";
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";

const btnStyles = {
	size: "small",
	width: 75,
	height: 33,
	padding: "1px 3px 0px"
};

const dropdownList = {
	display: "flex",
	paddingRight: 10
};

const styles = (theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},

	margin: {
		fontSize: 9,
		alignItems: "flex-end",
		marginLeft: theme.spacing.unit * 4
	},

	styleValue: {
		marginTop: theme.spacing.unit * 2,
		fontSize: 9,
		alignItems: "flex-end",
		marginLeft: theme.spacing.unit * 4
	},

	modalHeader: {
		backgroundColor: "#fafafa",
		fontSize: 18
	},
	
	cssLabel: {
		"&$cssFocused": {
			color: purple[500]
		}
	},
	cssFocused: {},
	cssUnderline: {
		"&:after": {
			borderBottomColor: purple[500]
		}
	}
});

const btnStyle = {
	right: 0,
	backgroundColor: "#FAFAFA",
	color: "#3C4858",
	padding: "16px",
	borderRadius: 3,
	fontSize: 18,
	marginLeft: -24,
	marginTop: -75,
	marginBottom: -20,
	marginRight: -24,
	outline: "none",
	height: 56
};

const createTask = {
	padding: "7px",
	marginTop: -5,
	border: 0,
	backgroundColor: "#e486",
	color: "#757575",
	fontSize: 17,
	borderRadius: 3,
	cursor: "pointer"
};

class CustomFormComponent extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}
	state = {};
	submitForm = (event) => {
		event.preventDefault();
		const { fields, ...inputFields } = this.state;
		console.log(this.state.fields);
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log([event.target.name]);
		console.log(event.target.value);
	};
	handleChangeSelect = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	renderItem() {
		let fields = this.props.fields;
		let defaultValues = this.props.defaultValues;
		let formUI = fields.map((form) => {
			let key = form.key;
			let type = form.type;
			let props = form.props || {};
			let name = form.key;
			let value = form.value;
			let placeholder = form.placeholder;
			let label = form.label;
			let options = form.options;
			if (form.type === "text") {
				return (
					<TitleInput
						{...props}
						content={value}
						inputType={type}
						style={{ width: "200px" }}
						name={name}
						key={key}
						fullWidth={true}
						placeholder={placeholder}
						label={label}
						controlFunc={this.handleChange}
					/>
				);
			}
			if (form.type === "multi_text") {
				return (
					<TitleInput
						title={value}
						inputType={type}
						name={name}
						key={key}
						fullWidth={true}
						placeholder={placeholder}
						label={label}
						controlFunc={this.handleChange}
					/>
				);
			}
			if (form.type === "number") {
				return (
					<NumberInput
						title={value}
						inputType={type}
						name={name}
						key={key}
						fullWidth={true}
						placeholder={placeholder}
						label={label}
						controlFunc={this.handleChange}
					/>
				);
			}
			if (form.type === "checkbox") {
				return <checkBoxInput handleToggle={this.handleChange} />;
			}
			if (form.type === "select") {
				return (
					<SelectInput
						label={label}
						name={name}
						style={{ width: window.innerWidth / 3.5 }}
						key={key}
						fullWidth={true}
						placeholder={placeholder}
						controlFunc={this.handleChangeSelect}
						options={options}
						selectedOption={value}
					/>
				);
			}
			if (form.type === "date") {
				return (
					<DateInput
						labelText={label}
						placeholder={placeholder}
						timeformat={false}
						classes={this.props.classes}
						onHandle={this.handleChange}
						value={value}
						style={{ width: window.innerWidth / 3.5 }}
					/>
				);
			} else {
				return (
					<TitleInput
						{...props}
						title={value}
						inputType={type}
						name={name}
						key={key}
						placeholder={placeholder}
						label={label}
						controlFunc={this.handleChange}
					/>
				);
			}
		});
		return formUI;
	}
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<form onSubmit={this.submitForm}>
				
		
					<div className={classes.container}>
						<div className={classes.margin}>
							<div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} noValidate autoComplete="off">
								<GridContainer justify="center">
									<GridItem md={12}>{this.renderItem()}</GridItem>
								</GridContainer>
							</div>
						</div>
						<div style={{ float: "right", marginRight: "50%", }}>
							<Button color="rose" onClick={this.submitForm} style={btnStyles} type="submit">
								Save
						</Button>
							<Button
								color="rose"
								onClick={() => this.props.onCancel(this.props.originalForm, this.props.form, this.props.pathname)}
								style={btnStyles}>
								Cancel
						</Button>
						</div>
					</div>

				
					
				</form>
			</Fragment>
		);
	}
}

export default compose(withStyles(styles, withStyles(extendedFormsStyle), withStyles(validationFormsStyle)))(CustomFormComponent);
