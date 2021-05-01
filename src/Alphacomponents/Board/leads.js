/*
  card data and edit button used here
*/
import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { NavLink, Link, Route } from "react-router-dom";
import Card from "components/Card/Card.jsx";


const Container = styled.div`
  border: 1px solid #EEEEEE;
  padding: 10px;
  border-radius: 2px;
  min-height:100px;
  display: border-box;
  background-color:${(props) => (props.isDragging ? "#F5F5F5" : "white")}
  display:flex;
  justify-content:flex-start;
  align-content:center;
  align-items:center;
 
   `;

const userIcons = {
	height: 24,
	width: 24,
	borderRadius: "50%",
	border: "1px solid grey"
};

export default class LeadsSomponents extends React.Component {
	render() {
		return (
			<div style={{
				marginTop: "10px", border: "0",
				borderRadius: "6px",
				color: "rgba(0, 0, 0, 0.87)",
				background: "#fff",
				width: "100%",
				boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
				position: "relative",
				display: "flex",
				flexDirection: "column",
				minWidth: "0",
				wordWrap: "break-word",
				fontSize: ".875rem"}}>
				<Draggable draggableId={this.props.task.id} index={this.props.index}>
					{(provided, snapshot) => (
						<Container
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							ref={provided.innerRef}
							isDragging={snapshot.isDragging}>
							<div style={{ display: "flex", flexDirection: "column", alignContent: "flex-start", alignItems: "flex-start" }}>
								<div style={{ marginBottom: 5 }}>
									<Link to="/timeline/${this.props.index}" style={{ fontSize: 15 }}>
										{this.props.task.content}
									</Link>
								</div>
								<br />
								<div>Due : {this.props.task.day}</div>
							</div>
						</Container>
					)}
				</Draggable>
			</div>
		);
	}
}
