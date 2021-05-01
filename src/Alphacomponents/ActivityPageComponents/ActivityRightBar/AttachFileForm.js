import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import Close from "@material-ui/icons/Close";
import AutoCompleteInput from "../../MicroComponents/autoCompleteInput";
import AutoSuggest from "../../MicroComponents/autoSuggest";
import { Link } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";

function Transition(props) {
	return <Slide direction="down" {...props} />;
}

class AttachFileForm extends Component {
	state = {
		attachedFile: null
	};

	handleClose = () => {
		this.props.handleCloseModal();
	};
	uploadFile = () => {
		const data = new FormData();
		data.append("file", this.state.attachedFile);
		console.log(data);
	};
	onChangeHandler = (event) => {
		this.setState({
			attachedFile: event.target.files[0],
			loaded: 0
		});
		console.log(event.target.files[0]);
	};
	render() {
		const { classes, modalOpen } = this.props;
		return (
			<Fragment>
				<Dialog
					classes={{
						root: classes.center,
						paper: classes.modal
					}}
					open={modalOpen}
					transition={Transition}
					keepMounted
					onClose={() => this.handleClose("modal")}
					aria-labelledby="modal-slide-title"
					aria-describedby="modal-slide-description">
					<DialogTitle id="classic-modal-slide-title" disableTypography className={classes.modalHeader}>
						<Button
							justIcon
							className={classes.modalCloseButton}
							key="close"
							aria-label="Close"
							color="transparent"
							onClick={this.handleClose}>
							<Close className={classes.modalClose} />
						</Button>
						<h4 className={classes.modalTitle}>Add File to this Lead</h4>
					</DialogTitle>
					<DialogContent id="modal-slide-description" className={classes.modalBody}>
						<GridContainer>
							<GridItem md={12}>
								<input type="file" name="file" onChange={this.onChangeHandler} />
							</GridItem>
						</GridContainer>
					</DialogContent>
					<DialogActions className={classes.modalFooter + " " + classes.modalFooterCenter}>
						<Button onClick={() => this.handleClose("modal")} color="primary">
							Cancel
						</Button>
						<Button onClick={this.uploadFile} color="primary">
							Upload
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}

AttachFileForm.propTypes = {
	formTitle: PropTypes.string,
	handleCloseModal: PropTypes.func
};
export default withStyles(modalStyle)(withStyles(validationFormsStyle)(AttachFileForm));
