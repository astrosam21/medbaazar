import React, { Component } from "react";
import classNames from "classnames";
import { compose } from "recompose";
import PropTypes from "prop-types";
import TimelineNew from "./TimelineNew";
import TimelineNewElement from "./TimelineNewElement";
import { Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ExpandMore from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import EditActivity from "./EditActivity";
import EditActivityHoC from "./EditActivity";
import TimelineItem from "./TimelineItem";
const styles = (theme) => ({
	lineStyles: {
		position: "absolute",
		bottom: -55,
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
		marginLeft: "20px",
		zIndex: 10,
		backgroundColor: "white",
		boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
	},
	eventContainer: {
		marginLeft: "50px",
		display: "grid"
	},
	iconMoreStyles: {
		float: "right",
		marginTop: "-35px",
		marginRight: "10px",
		display: "flex",
		width: 42,
		height: 42,
		position: "relative",
		justifyContent: "center",
		alignSelf: "center",
		alignItems: "center",
		marginLeft: "-18px",
		zIndex: 10
	},
	menuStyle: {
		width: "200px"
	}
});

class TimelineEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null,
			isOpen: false
		};
		this.editActivity = this.editActivity.bind(this);
		this.editRef = React.createRef();
	}
	componentDidMount() {}
	handleClick = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	};
	handleClose = () => {
		this.setState({ anchorEl: null });
	};
	editActivity = () => {
		this.setState({ isOpen: !this.state.isOpen });
		this.handleClose();
	};
	deleteActivity = (id) => {
		console.log(id);
		this.props.handleDeleteButton(id);
	};
	closeModal = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		const { classes, data } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		const id = data.id;
		return (
			<TimelineNew>
				<TimelineNewElement
					title={<h3 style={{ marginLeft: 40, color: "#000" }}>{data.title}</h3>}
					date={<h6 style={{ marginLeft: 60, fontSize: "10px", color: "#000" }}>{data.time}</h6>}
					subtitle={<h4 style={{ marginLeft: 40, color: "#000" }}>{data.description}</h4>}
					buttons={
						data.description && (
							<IconButton
								style={{
									float: "right",
									marginTop: "-40px",
									marginRight: "5px"
								}}
								aria-label="More"
								ExpandMore
								aria-owns={open ? "long-menu" : undefined}
								aria-haspopup="true">
								<ExpandMore />
							</IconButton>
						)
					}
					container="card"
					icon={
						<span>
							<Avatar className={classes.iconStyles}>
								<Icon style={{ color: "#e91e63" }}>{this.props.data.type}</Icon>
							</Avatar>
						</span>
					}
					buttonOnClick={this.handleClick}
				/>

				<Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
					<MenuItem
						onClick={() => {
							
							this.props.handleEditButton(data.id, data.type);
							this.handleClose();
						}}>
						Edit
					</MenuItem>
					<MenuItem
						onClick={() => {
							this.props.handleDeleteButton(data.id);
							this.handleClose();
						}}>
						Delete
					</MenuItem>
				</Menu>
				{/* <EditActivityHoC
          ref={this.editRef}
          isOpen={this.state.isOpen}
          typeID={data.typeID}
          hideModal={this.closeModal}
        /> */}
			</TimelineNew>
		);
	}
}

export default withStyles(styles)(TimelineEvent);
