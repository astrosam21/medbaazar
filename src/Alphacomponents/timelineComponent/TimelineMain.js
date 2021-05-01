import React, { Component } from "react";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import TimelineElement from "./TimelineElement";
import activityData from "./TimelineData";
import { CssBaseline } from "@material-ui/core";
import withTimelineHOC from "./TimelineHOC";

const WithConditionalRenderingTimeline = withTimelineHOC(TimelineElement);

function TimelineMain(props) {
	return <WithConditionalRenderingTimeline data={props.data} handleEditButton={(id, type) => props.handleEditButton(id, type)} handleDeleteButton={(id)=>props.handleDeleteButton(id)} />;
}
export default TimelineMain;
