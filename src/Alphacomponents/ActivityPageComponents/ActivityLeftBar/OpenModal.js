import React from "react";
import PropTypes from "prop-types";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Close from "@material-ui/icons/Close";
import Button from "components/CustomButtons/Button.jsx";
import TaskForm from "../ActivityForms/TaskForm";
import NoteForm from "../ActivityForms/NoteForm";
import ScheduleForm from "../ActivityForms/ScheduleForm";
import MailForm from "../ActivityForms/MailForm";
import LogCallForm from "../ActivityForms/LogCallForm";
import LogMailForm from "../ActivityForms/LogMailForm";
import LogMeetingForm from "../ActivityForms/LogMeetingForm";

class OpenModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderModal() {
		switch (this.props.type) {
			case "Note":
			case "note":
				return <NoteForm close={this.props.close} />;
			case "Mail":
				return <MailForm close={this.props.close} />;
			case "LogCall":
				return <LogCallForm close={this.props.close} />;
			case "LogMail":
				return <LogMailForm close={this.props.close} />;
			case "LogMeeting":
				return <LogMeetingForm close={this.props.close} />;
			case "Task":
			case "today":
				return <TaskForm close={this.props.close} />;
			case "schedule":
			case "Schedule":
				return <ScheduleForm close={this.props.close} />;
			default:
				return (
					<div>
						<p>Default</p>
					</div>
				);
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				<Dialog
					classes={{
						root: classes.center,
						paper: classes.modal
					}}
					open={this.props.visible}
					keepMounted
					onClose={this.props.close}>
					<DialogTitle id="classic-modal-slide-title" disableTypography className={classes.modalHeader}>
						<Button
							justIcon
							className={classes.modalCloseButton}
							key="close"
							aria-label="Close"
							color="transparent"
							onClick={this.props.close}>
							<Close className={classes.modalClose} />
						</Button>
						<h4 className={classes.modalTitle}>{this.props.type}</h4>
					</DialogTitle>
					<DialogContent id="modal-slide-description" className={classes.modalBody}>
						{this.renderModal()}
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

OpenModal.propTypes = {
	classes: PropTypes.object.isRequired,
	visible: PropTypes.bool.isRequired,
	type: PropTypes.string,
	close: PropTypes.func
};
export default withStyles(modalStyle)(OpenModal);
