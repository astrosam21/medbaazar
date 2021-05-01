import React, { Component, Fragment } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import Accordion from "components/Accordion/Accordion.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

class AccordianViewProperty extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<Fragment>
				<GridContainer>
					<GridItem xs={12} sm={12} md={12}>
						<CustomInput
							labelText="Lead Name"
							id="float"
							formControlProps={{
								fullWidth: true
							}}
							inputProps={{
								onChange: (event) => this.setState({ firstname: event.target.value }),
								value: data.leadTitle
							}}
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={12}>
						<CustomInput
							labelText="Lead Stage"
							id="float"
							formControlProps={{
								fullWidth: true
							}}
							inputProps={{
								onChange: (event) => this.setState({ lastname: event.target.value }),
								value: data.leadstage
							}}
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={12}>
						<CustomInput
							labelText="Amount"
							id="float"
							formControlProps={{
								fullWidth: true
							}}
							inputProps={{
								onChange: (event) => this.setState({ email: event.target.value }),
								value: "$ " + data.price
							}}
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={12}>
						<CustomInput
							labelText="Closing Date"
							id="float"
							formControlProps={{
								fullWidth: true
							}}
							inputProps={{
								onChange: (event) => this.setState({ phone: event.target.value }),
								value: data.dueDate
							}}
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={12}>
						<CustomInput
							labelText="Owner Name"
							id="float"
							formControlProps={{
								fullWidth: true
							}}
							inputProps={{
								onChange: (event) => this.setState({ owner: event.target.value }),
								value: data.owner
							}}
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={12}>
						<CustomInput
							labelText="Company Name"
							id="float"
							formControlProps={{
								fullWidth: true
							}}
							inputProps={{
								onChange: (event) => this.setState({ owner: event.target.value }),
								value: data.company
							}}
						/>
					</GridItem>
				</GridContainer>
			</Fragment>
		);
	}
}

export default AccordianViewProperty;
