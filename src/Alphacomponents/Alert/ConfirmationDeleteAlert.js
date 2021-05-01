/*
  user delete tasks here
*/

import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import withStyles from "@material-ui/core/styles/withStyles";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import PropTypes from "prop-types";

class ConfirmationDeleteAlert extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			delete: true,
			okAlert: false
		};

		this.hideAlert = this.hideAlert.bind(this);
		this.successDelete = this.successDelete.bind(this);
	}

	successDelete() {
		this.props.deleteFunction(this.props.checkedId);
		this.setState({
			okAlert: !this.state.okAlert
		});
	}

	hideAlert() {
		this.props.alertHide();
	}
	deleteAlert() {
		this.hideAlert();
	}

	render() {
		const { warningMessage, warningDescriptionMessage, successMessage } = this.props;
		let display = (
			<SweetAlert
				warning
				style={{ marginTop: "-100px" }}
				title={warningMessage}
				onConfirm={this.successDelete}
				onCancel={() => this.hideAlert()}
				confirmBtnCssClass={this.props.classes.button + " " + this.props.classes.success}
				cancelBtnCssClass={this.props.classes.button + " " + this.props.classes.danger}
				confirmBtnText="Yes, delete it!"
				cancelBtnText="Cancel"
				showCancel>
				{warningDescriptionMessage}
			</SweetAlert>
		);

		return (
			<div>
				{display}
				{this.state.okAlert ? (
					<SweetAlert
						success
						style={{ marginTop: "-100px", outline: "none", boxShadow: "none" }}
						title="Deleted!"
						onConfirm={() => this.deleteAlert()}
						onCancel={() => this.hideAlert()}
						confirmBtnCssClass={this.props.classes.button + " " + this.props.classes.success}>
						{successMessage}
					</SweetAlert>
				) : (
					""
				)}
			</div>
		);
	}
}

ConfirmationDeleteAlert.defaultProps = {
	warningMessage: "Are you sure !"
};

ConfirmationDeleteAlert.propTypes = {
	classes: PropTypes.object.isRequired,
	warningMessage: PropTypes.string.isRequired,
	warningDescriptionMessage: PropTypes.string,
	successMessage: PropTypes.string,
	deleteFunction: PropTypes.func,
	alertHide: PropTypes.func
};

export default withStyles(sweetAlertStyle)(ConfirmationDeleteAlert);
