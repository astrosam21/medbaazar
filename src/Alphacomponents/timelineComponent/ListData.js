import React, { Component } from "react";
import TimelineMain from "../timelineComponent/TimelineMain";
function List(props) {
	return (
		<div>
			<div className="list">
				<TimelineMain handleEditButton={(id,type) => props.handleEditButton(id,type)} handleDeleteButton={(id)=>props.handleDeleteButton(id)} data={props.list} />
			</div>
		</div>
	);
}

export default List;
