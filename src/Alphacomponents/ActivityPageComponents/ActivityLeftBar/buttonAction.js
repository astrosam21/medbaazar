import React, { Component } from "react";
import Button from "components/CustomButtons/Button.jsx";
import Note from "@material-ui/icons/Note";
import Mail from "@material-ui/icons/Mail";
import Add from "@material-ui/icons/Add";
import Gavel from "@material-ui/icons/Gavel";
import Schedule from "@material-ui/icons/Schedule";
import GridContainer from "components/Grid/GridContainer.jsx";
import Muted from "components/Typography/Muted.jsx";
import OpenModal from "./OpenModal";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
class ButtonGroup extends Component {
	constructor() {
		super();
		this.state = {
			modal: false,
			type: "",
			anchorEl: null
		};
	}
	handleClick = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		return (
			<GridContainer justify="space-around">
				<OpenModal visible={this.state.modal} type={this.state.type} close={() => this.setState({ modal: false })} />
				<div style={{ display: "flex", flexDirection: "column" }}>
					<Button justIcon round color={"default"} onClick={() => this.setState({ type: "Note", modal: true })}>
						<Note />
					</Button>
					<Muted>Note</Muted>
				</div>

				{/* <div style={{ display: "flex", flexDirection: "column" }}>
					<Button justIcon round color={"default"} onClick={() => this.setState({ type: "Mail", modal: true })}>
						<Mail />
					</Button>
					<Muted>Mail</Muted>
				</div> */}

				<div style={{ display: "flex", flexDirection: "column" }}>
					<Button justIcon round color={"default"} onClick={() => this.setState({ type: "Task", modal: true })}>
						<Gavel />
					</Button>
					<Muted>Task</Muted>
				</div>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<Button justIcon round color={"default"} onClick={this.handleClick}>
						<Add />
					</Button>
					<Muted>Log</Muted>
				</div>
				<Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
					<MenuItem onClick={() => this.setState({ type: "LogCall", modal: true })}>Log a Call</MenuItem>
					<MenuItem onClick={() => this.setState({ type: "LogMail", modal: true })}>Log a Mail</MenuItem>
					<MenuItem onClick={() => this.setState({ type: "LogMeeting", modal: true })}>Log a Meeting</MenuItem>
				</Menu>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<Button justIcon round color={"default"} onClick={() => this.setState({ type: "Schedule", modal: true })}>
						<Schedule />
					</Button>
					<Muted>Schedule</Muted>
				</div>
			</GridContainer>
		);
	}
}

export default ButtonGroup;
