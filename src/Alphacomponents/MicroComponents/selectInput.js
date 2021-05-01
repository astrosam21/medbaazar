import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";
import "./formComponentStyle/atoms.css";

class SelectInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			simpleSelect: ""
		};
	}
	handleSimple = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleChange = (name) => (event) => {
		this.setState({ [name]: event.target.checked });
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<div>
					<FormControl fullWidth className={classes.selectFormControl}>
						<InputLabel htmlFor="simple-select" className={classes.selectLabel}>
							{this.props.label}
						</InputLabel>
						<Select
							style={this.props.style}
							MenuProps={{
								className: classes.selectMenu
							}}
							classes={{
								select: classes.select
							}}
							value={this.props.selectedOption}
							onChange={this.props.controlFunc}
							inputProps={{
								name: this.props.name,
								id: "simple-select"
							}}>
							<MenuItem
								disabled
								classes={{
									root: classes.selectMenuItem
								}}>
								Select
							</MenuItem>
							{this.props.options.map((opt) => {
								return (
									<MenuItem
										key={opt}
										classes={{
											root: classes.selectMenuItem,
											selected: classes.selectMenuItemSelected
										}}
										value={opt}>
										{opt}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</div>
			</div>
		);
	}
}

SelectInput.propTypes = {
	label: PropTypes.string.isRequired,
	disabledText: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	selectedOption: PropTypes.string,
	controlFunc: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

export default withStyles(extendedFormsStyle)(SelectInput);
