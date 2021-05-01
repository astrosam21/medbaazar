import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomInput from "components/CustomInput/CustomInput.jsx";

const TitleInput = (props) => (
	<div className="form-group">
		<CustomInput
			style={props.style}
			labelText={props.label}
			id="schedule_title"
			formControlProps={{
				fullWidth: props.fullWidth
			}}
			inputProps={{
				onChange: (event) => props.controlFunc(event, "required", "length", 0),
				type: props.inputType,
				placeholder: props.placeholder,
				value: props.content,
				name: props.name
			}}
		/>
	</div>
);

TitleInput.propTypes = {
	inputType: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	controlFunc: PropTypes.func.isRequired,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	placeholder: PropTypes.string,
	fullWidth: PropTypes.bool
};

export default TitleInput;
