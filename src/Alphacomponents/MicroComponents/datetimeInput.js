import React, { Component, Fragment } from "react";
import Datetime from "react-datetime";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import { FormHelperText } from "@material-ui/core";
import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
var tempDate = new Date();
const dateCurrent = tempDate.getFullYear() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getDate();

const datestyles = {
	label: {
		cursor: "pointer",
		paddingLeft: "0",
		color: "rgba(0, 0, 0, 0.26)",
		fontSize: "14px",

		fontWeight: "400",
		display: "inline-flex"
	}
};

class TimeInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenDate: ""
		};
	}
	componentDidMount() {
		const { date } = this.props;
		const dateForDisplay = date ? date : dateCurrent;
		this.setState({ chosenDate: dateForDisplay });
	}
	handleDateTimeChange = (moment) => {
		this.setState({ chosenDate: moment });
		// this.props.handleDate(moment)
		console.log(moment);
	};

	render() {
		const { labelText, placeholder, timeformat, dateformat, value, date, time, dateTime, onHandle, classes } = this.props;
		var yesterday = Datetime.moment().subtract(1, "day");
		var valid = function(current) {
			return current.isAfter(yesterday);
		};

		return (
			<Fragment>
				<InputLabel className={classes.label}>{labelText}</InputLabel>
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<FormControl>
						{/* <Datetime
						onChange={this.handleChangeDate}
						closeOnSelect={true}
						timeFormat={timeformat}
						dateFormat={dateformat}
						inputProps={{ placeholder: { placeholder } }}
						defaultValue={dateCurrent}
						isValidDate={valid}
						value={this.state.chosenDate}
					/> */}
						<DateTimePicker
							variant="inline"
							label="Basic example"
							value={this.state.chosenDate}
							disablePast
							onChange={this.handleDateTimeChange}
						/>
					</FormControl>
				</MuiPickersUtilsProvider>
			</Fragment>
		);
	}
}
export default withStyles(extendedFormsStyle)(TimeInput);
