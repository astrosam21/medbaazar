import React, { Component, Fragment } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Close from "@material-ui/icons/Close";
import AttachMoney from "@material-ui/icons/AttachMoney";
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

class ActivityLeadCards extends Component {
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
		this.addLead = this.addLead.bind(this);
	}
	componentDidMount() {}
	handleNameClick = (id) => {
		console.log("Change Router" + id);
	};
	addLead() {
		this.props.handleClickOpen("modal");
	}

	deleteFunction = () => {
		this.props.removeCompany();
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
		console.log(data);
		let displayCard;
		let displayButton;
		if (data.length > 0) {
			displayCard = (
				<div style={{ width: "100%" }}>
					{data.map((data) => {
						return (
						
							<div>
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
													<AttachMoney />
												</Button>

												<Link to={this.props.path} underline="none">
													<h4
														style={{
															paddingTop: 0,
															paddingLeft: 10
														}}>
														{"  " + data.leadTitle + " "}
													</h4>
												</Link>
												<h4 style={{ marginLeft: 10 }}>{"$" + data.price}</h4>
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
										<div
											style={{
												display: "flex",
												paddingLeft: "40px",
												flexDirection: "column",
												justifyContent: "flex-start",
												alignContent: "flex-start",
												alignItems: "flex-start",
												marginBottom:"5px"
											}}>
											<GridContainer>
												<GridItem md={12}>
													<SelectInput
														label={"Stage"}
														name={"simpleSelect"}
														selectedOption={"Appointment Scheduled"}
														options={["Appointment Scheduled", "PresentationScheduled"]}
														controlFunc={this.handleSimpleSelect}
														placeholder={"Stage"}
													/>
												</GridItem>
											</GridContainer>
											<div>
												<span>
													Close Date: <span style={{ fontWeight: "bold" }}>{data.dueDate}</span>
												</span>
											</div>
										</div>
										{this.state.deleteAlert ? (
											<ConfirmationDeleteAlert
												alertHide={this._hideDeleteAlert}
												checkedId={this.state.checkedId}
												deleteFunction={this.deleteFunction}
												warningMessage={"Are you sure?"}
												warningDescriptionMessage={"You are going to remove this Lead from this Contact!"}
												successMessage={"Lead is Removed from this Contact."}
											/>
										) : (
											""
										)}
								<Divider />
								</div>
								
						
						);
					})}
				</div>
			);

			displayButton = (
				<Button size="sm" color="rose" onClick={this.addLead}>
					Add More Lead
				</Button>
			);
		} else {
			displayCard = (
				<p>View all interactions with this contact’s Lead in one place. Add an existing contact from your CRM or create a new one.</p>
			);
			displayButton = (
				<Button size="sm" color="rose" onClick={this.addLead}>
					Add Lead
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
									<AttachMoney />
								</CardIcon>
								<h4 className={classes.cardIconTitle} style={{ float: "left" }}>
									Lead
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

ActivityLeadCards.defaultProps = {
	data: [],
	card: true
};

export default withStyles(modalStyle)(withStyles(validationFormsStyle)(ActivityLeadCards));
