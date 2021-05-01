/*
  board card drag(source) and drop(destination) defined 
*/

import React from "react";
// import '@atlaskit/css-reset';
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Column from "./lead_column";
import GridItem from "components/Grid/GridItem.jsx";
import media from "./media";

const Container = styled.div`
	display: flex;
	width: 100%;

	overflowx: scroll;

	${media.tablet`
      display:flex;
      padding-left:23px;`}

	${media.phone`
      display:block;
      padding-left:23px;
      padding-top:42px;`}
`;

const layoutdesign = {
	borderBottom: "1px solid lightGray",
	color: "#1a1e23",
	fontSize: "16px"
};

class BoardLeadComponent extends React.Component {
	state = this.props.data;

	onDragEnd = (result) => {
		document.body.style.color = "inherit";
		const { destination, source, draggableId } = result;
		console.log(result);

		if (!destination) {
			return;
		}
		if (destination.droppableId === source.droppableId && destination.index === source.index) {
			return;
		}

		const start = this.state.columns[source.droppableId];
		const finish = this.state.columns[destination.droppableId];

		if (start === finish) {
			const newTaskIds = Array.from(start.taskIds);
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...start,
				taskIds: newTaskIds
			};

			const newState = {
				...this.state,
				columns: {
					...this.state.columns,
					[newColumn.id]: newColumn
				}
			};
			this.setState(newState);
			return;
		}

		const startTaskIds = Array.from(start.taskIds);
		startTaskIds.splice(source.index, 1);
		const newStart = {
			...start,
			taskIds: startTaskIds
		};

		const finishTaskIds = Array.from(finish.taskIds);
		finishTaskIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...finish,
			taskIds: finishTaskIds
		};

		const newState = {
			...this.state,
			columns: {
				...this.state.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish
			}
		};

		this.setState(newState);
		console.log(newState);
	};

	render() {
		return (
			<div
				style={{
					overflow: "scroll",
					width: (window.getDimension) ,
					overflowY: "hidden"
				}}>
				<br />
				<br />
				<GridItem xs={12} sm={12} md={12} lg={12}>
					<DragDropContext onDragEnd={this.onDragEnd}>
						<Container>
							{this.state.columnOrder.map((columnId) => {
								const column = this.state.columns[columnId];
								const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);
								return <Column key={column.id} column={column} tasks={tasks} />;
							})}
						</Container>
					</DragDropContext>
				</GridItem>
			</div>
		);
	}
}

export default BoardLeadComponent;
