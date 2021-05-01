import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomInput from "components/CustomInput/CustomInput.jsx";

const NumberInput = (props) => (
	<div className="form-group">
		<CustomInput
			labelText={props.label}
			style={props.style}
			id="schedule_title"
			formControlProps={{
				fullWidth: props.fullWidth
			}}
			inputProps={{
				onChange: (event) => props.controlFunc(event, "required", "length", 0),
				type: "number",
				placeholder: props.placeholder,
				value: props.content,
				name: props.name
			}}
		/>
	</div>
);

NumberInput.propTypes = {
	inputType: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	controlFunc: PropTypes.func.isRequired,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	placeholder: PropTypes.string,
	fullWidth: PropTypes.bool
};

export default NumberInput;
