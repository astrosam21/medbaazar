import React from "react";
// material-ui components
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
import CustomFormComponent from "./CustomFormComponent";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";

function Transition(props) {
	return <Slide direction="down" {...props} />;
}

class CustomForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
	}
	handleClickOpen(modal) {
		var x = [];
		x[modal] = true;
		this.setState(x);
	}
	handleClose(modal) {
		var x = [];
		x[modal] = false;
		this.setState(x);
	}
	render() {
		const { classes, data } = this.props;
		return (
			<div>
				<Dialog
					classes={{
						root: classes.center,
						paper: classes.modal
					}}
					open={this.props.visible}
					transition={Transition}
					maxWidth="md"
					fullWidth={true}
					keepMounted
					onClose={this.props.close}
					aria-labelledby="modal-slide-title"
					aria-describedby="modal-slide-description">
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
						<h4 className={classes.modalTitle}>{this.props.formTitle}</h4>
					</DialogTitle>
					<DialogContent
						className={classes.modalBody}
						style={{
							overflow: "scroll",
							height: window.innerHeight / 1.5,
							overflowX: "hidden",
						
						}}>
						<CustomFormComponent
							className="form"
							title="Registration"
							defaultValues={this.state.current}
							fields={data}
							onSubmit={(model) => {
								this.onSubmit(model);
							}}
							onCancel={this.props.close}
						/>
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}
export default withStyles(modalStyle)(CustomForm);
