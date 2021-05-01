import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";

import { CssBaseline } from "@material-ui/core";

class TopMenu extends React.Component {
	constructor() {
		super();
		this._openModal = this._openModal.bind(this);
	}
	state = {
		anchorEl: null
	};

	handleClick = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	_openModal = () => {
		this.refs.moreInfoModal.openModal();
		this.handleClose();
	};
	handleEditAction = () => {
		this.props.handleEditAction();
		this.handleClose();
	};
	handleUnfollowAction = () => {
		this.props.handleUnfollowAction();
		this.handleClose();
	};
	handleViewAllAction = () => {
		this.props.handleViewAllAction();
		this.handleClose();
	};
	handleHistoryAction = () => {
		this.props.handleHistoryAction();
		this.handleClose();
	};
	handleDeleteAction = () => {
		this.props.handleDeleteAction();
		this.handleClose();
	};

	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		return (
			<div>
				<CssBaseline />
				<div>
					<h3 style={{ float: "left" }}>Lead Title</h3>
					<Button
						style={{
							float: "right",
							top: "-5px",
							marginRight: "5px"
						}}
						justIcon
						simple
						round
						color="primary"
						aria-label="More"
						aria-owns={open ? "long-menu" : undefined}
						aria-haspopup="true"
						onClick={this.handleClick}>
						<MoreVertIcon />
					</Button>

					<Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
						<MenuItem onClick={this.handleUnfollowAction}>unFollow</MenuItem>
						<MenuItem onClick={this.handleViewAllAction}>View All Properties</MenuItem>
						<Divider />
						<MenuItem onClick={this.handleDeleteAction}>Delete</MenuItem>
					</Menu>
				</div>
				<br />
			</div>
		);
	}
}
export default TopMenu;
