/*
  colom list value and draggind card defined
*/
import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Button from "components/CustomButtons/Button.jsx";
import LeadsSomponents from "./leads";

import "./index.css";

const Container = styled.div`
	background-color:"#e0e0e0";
	margin: 3px;
	width: 300px;
	display: flex;
	flex-direction: column;
	margin-right: 15px;
`;

const TaskList = styled.div`
  padding: 8px;
  background-color:${(props) => (props.isDragging ? "#80DEEA" : "#fafafa")}
  flex-grow:1;
  transition: background-color 0.2s ease, opacity 0.1s ease;
  min-height:550px;
 
`;
const ScrollContainer = styled.div`
	overflow-x: hidden;
	overflow-y: auto;
	max-height: 550px;
`;

export default class Column extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			shareholders: [{ name: "" }]
		};
	}

	handleShareholderNameChange = (idx) => (evt) => {
		const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
			if (idx !== sidx) return shareholder;
			return { ...shareholder, name: evt.target.value };
		});
		console.log("created task ", evt.target.value);

		this.setState({ shareholders: newShareholders });
	};

	handleSubmit = (evt) => {
		this.setState({ value: evt.target.value });
		console.log(evt.target.value);
	};

	handleAddShareholder = () => {
		this.setState({ shareholders: this.state.shareholders.concat([{ name: "" }]) });
		console.log("add a card ", this.state.shareholders);
	};

	render() {
		return (
			<div>
				<Container>
					<Button color="rose" style={{ height: 49, borderRadius: 5 }}>
						{this.props.column.title}
					</Button>
					<Droppable droppableId={this.props.column.id}>
						{(provided, snapshot) => (
							<TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
								<ScrollContainer>
									{this.props.tasks.map((task, index) => (
										<LeadsSomponents key={task.id} task={task} index={index} />
									))}
									{provided.placeholder}
								</ScrollContainer>
							</TaskList>
						)}
					</Droppable>
				</Container>
			</div>
		);
	}
}
