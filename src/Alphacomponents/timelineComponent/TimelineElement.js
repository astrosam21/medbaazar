import React, { Component, Fragment } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Typography, CssBaseline } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import TimelineItem from "./TimelineItem";
import withIconItem from "./hoc/withIconItem";
import TimelineItemAction from "./TimelineItemAction";
import TimelineEvent from "./TimelineEvent";
const styles = (theme) => ({
	lineStyles: {
		position: "absolute",
		bottom: -25,
		height: "100%",
		width: 3,
		background: "#a0a0a0"
	},
	iconStyles: {
		display: "flex",
		width: 42,
		height: 42,
		position: "relative",
		justifyContent: "center",
		alignSelf: "center",
		alignItems: "center",
		marginLeft: "-18px",
		zIndex: 10,
		backgroundColor: "#e34"
	},
	eventContainer: {
		marginLeft: "50px"
	}
});

const WithItemComponent = withIconItem(TimelineEvent)(TimelineItemAction);

function TimelineElement(props) {
	return (
		<div
			style={{
				position: "relative",
				fontSize: "80%",
				fontWeight: 300,
				padding: "10px 0",
				width: "95%",
				margin: "0 auto"
			}}>
			<CssBaseline />
			<ul style={{ listStyle: "none" }}>
				{props.data.map((data, key) => {
					return (
						<li key={key}>
							<WithItemComponent handleDeleteButton={(id)=>props.handleDeleteButton(id)}
								handleEditButton={(id,type) => props.handleEditButton(id,type)} key={key} data={data} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}
export default TimelineElement;
