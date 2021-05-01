import React, { Component, Fragment } from "react";
import Datetime from "react-datetime";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import { FormHelperText } from "@material-ui/core";
import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";
import MomentUtils from "@date-io/moment";
import DatePicker from "material-ui/DatePicker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

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

class DateInput extends Component {
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
	handleDateChange = (event, moment) => {
		this.setState({ chosenDate: moment });
		// this.props.handleDate(moment)
		console.log(moment);
		//this.props.handleChangeDate(moment);
	};

	render() {
		const { labelText, placeholder, inputLabelText, timeformat, dateformat, value, date, time, dateTime, onHandle, classes } = this.props;
		var yesterday = Datetime.moment().subtract(1, "day");
		var valid = function(current) {
			return current.isAfter(yesterday);
		};

		return (
			<Fragment>
				<FormControl>
					{/* <Datetime
						style={this.props.style}
						label={labelText}
						variant="inline"
						value={this.state.chosenDate}
						disablePast
						onChange={this.handleDateChange}
					/> */}

					<MuiThemeProvider>
						<DatePicker
							onChange={this.handleDateChange}
							value={this.state.chosenDate}
							style={this.props.style}
							floatingLabelText={labelText}
							//hintText={placeholder}
						/>
					</MuiThemeProvider>
				</FormControl>
			</Fragment>
		);
	}
}
export default withStyles(extendedFormsStyle)(DateInput);
