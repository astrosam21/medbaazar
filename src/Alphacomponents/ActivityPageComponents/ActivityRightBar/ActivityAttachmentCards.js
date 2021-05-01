import React, { Component, Fragment } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Close from "@material-ui/icons/Close";
import AttachFile from "@material-ui/icons/AttachFile";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Menu from "@material-ui/core/Menu";
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import Axios from "axios";
import { Link } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";
import ConfirmationDeleteAlert from "../../Alert/ConfirmationDeleteAlert";
import SelectInput from "../../MicroComponents/selectInput";
import Divider from "@material-ui/core/Divider";

function Transition(props) {
	return <Slide direction="down" {...props} />;
}

class ActivityAttachmentCards extends Component {
	constructor(props) {
		super();
		this.state = {
			data: [],
			deleteAlert: false,
			completeAlert: false,
			modal: false
		};
		this._deleteAlert = this._deleteAlert.bind(this);
		this._hideDeleteAlert = this._hideDeleteAlert.bind(this);
		this.addFile = this.addFile.bind(this);
	}
	componentDidMount() {}
	handleNameClick = (id) => {
		console.log("Change Router" + id);
	};
	addFile() {
		this.props.handleClickOpen("modal");
	}

	deleteFunction = () => {
		this.props.removeFile();
	};

	_deleteAlert() {
		console.log("Alert");
		this.setState({ deleteAlert: !this.state.deleteAlert });
	}
	_hideDeleteAlert() {
		this.setState({ deleteAlert: !this.state.deleteAlert });
	}

	render() {
		const { classes } = this.props;
		const { data } = this.props;
	
		let displayCard;
		let displayButton;
		if (data.length > 0) {
			displayCard = (
				<div style={{ width: "100%" }}>
					{data.map((data) => {
						return (
							<Fragment>
								
										<div
											style={{
												display: "flex",
												flexDirection: "row",
												justifyContent: "space-between"
											}}>
											<div
												style={{
													display: "flex",
													flexDirection: "row",
													justifyContent: "space-around",
													alignContent: "center",
													alignItems: "center"
												}}>
												<Button justIcon round>
													<AttachFile />
												</Button>

												<Link to={this.props.path} underline="none">
													<h4
														style={{
															paddingTop: 0,
															paddingLeft: 10
														}}>
														{"  " + data.fileName + " "}
													</h4>
												</Link>
												<h4 style={{ marginLeft: 10 }}>{"Size : " + data.fileSize}</h4>
											</div>

											<Button
												onClick={this._deleteAlert}
												justIcon
												simple
												style={{
													color: "#a0a0a0",
													alignSelf: "flex-end"
												}}>
												<Close />
											</Button>
										</div>

										{this.state.deleteAlert ? (
											<ConfirmationDeleteAlert
												alertHide={this._hideDeleteAlert}
												checkedId={this.state.checkedId}
												deleteFunction={this.deleteFunction}
												warningMessage={"Are you sure?"}
												warningDescriptionMessage={"You are going to remove this File from this Lead!"}
												successMessage={"File is Removed from this Lead."}
											/>
										) : (
											""
										)}
									<Divider/>
							</Fragment>
						);
					})}
				</div>
			);

			displayButton = (
				<Button size="sm" color="rose" onClick={this.addFile}>
					Add More File
				</Button>
			);
		} else {
			displayCard = <p>View all interactions with this File’s Lead in one place. Add an existing File from your CRM or create a new one.</p>;
			displayButton = (
				<Button size="sm" color="rose" onClick={this.addFile}>
					Add File
				</Button>
			);
		}
		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={12}>
					{this.props.card ? (
						<Card>
							<CardHeader color="rose" icon>
								<CardIcon color="rose">
									<AttachFile />
								</CardIcon>
								<h4 className={classes.cardIconTitle} style={{ float: "left" }}>
									Attachment
								</h4>
							</CardHeader>

							<CardBody>
								<GridContainer>
									<GridItem xs={12} sm={12} md={12}>
										{displayCard}
									</GridItem>
								</GridContainer>
							</CardBody>
							<CardFooter className={classes.justifyContentCenter}>{displayButton}</CardFooter>
						</Card>
					) : null}
					{!this.props.card ? (
						<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
							{displayCard}
							<div>{displayButton}</div>
						</div>
					) : null}
				</GridItem>
			</GridContainer>
		);
	}
}

ActivityAttachmentCards.defaultProps = {
	data: [],
	cardHeader: true,
	card: true
};

export default withStyles(modalStyle)(withStyles(validationFormsStyle)(ActivityAttachmentCards));
