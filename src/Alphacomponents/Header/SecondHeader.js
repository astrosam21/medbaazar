import React, { Component } from "react";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Search from "@material-ui/icons/Search";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Grow from "@material-ui/core/Grow";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import headerLinksStyle from "assets/jss/material-dashboard-pro-react/components/headerLinksStyle";
const drawerWidth = 240;
const styles = (theme) => ({
	root: {
		width: "100%",
		zIndex: theme.zIndex.drawer + 1,
		background: "#eee",
		boxShadow: "none"
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		background: "#eee"
	},
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	title: {
		fontSize: "20px",
		color: "black",
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		display: "flex",
		"flex-direction": "row-reverse",
		position: "relative",
		borderWidth: 5,
		borderColor: "black",
		// borderRadius: theme.shape.borderRadius,
		marginRight: theme.spacing.unit,
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing.unit * 23,
			width: "auto",
			display: "flex",
			"flex-direction": "row-reverse"
		}
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		color: "gray",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "gray",
		width: "100%"
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit * 10,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit,
		// transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: 200
		}
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
			justifyContent: "flex-end",
			paddingRight: theme.spacing.unit * 5
		}
	},
	sectionMobile: {
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},

	toolbar: theme.mixins.toolbar
});

class SecondHeader extends Component {
	state = {};
	render() {
		const { classes, headerTitle, buttons } = this.props;
		return (
			<GridContainer>
				<GridItem xs={12} sm={12} md={6} lg={6}>
					<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
						<h3
							style={{
								fontSize: "25px",
								color: "black"
							}}>
							{headerTitle}
						</h3>
						<div>
							<form onSubmit={this._onSubmit} className={classes.search}>
								<div className="search-link">
									<CustomInput
										placeholder="Search here"
										className={classes.inputInput}
										inputProps={{ placeholder: "Search...", name: "search" }}
									/>
									<Button color="white" aria-label="edit" justIcon round style={{ marginTop: 20 }} type="submit">
										<Search className={classes.headerLinksSvg + " " + classes.searchIcon} />
									</Button>
								</div>
							</form>
						</div>
					</div>
				</GridItem>
				<GridItem xs={12} sm={12} md={6} lg={6}>
					<div className={classes.sectionDesktop}>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "flex-end",
								marginTop: 10
							}}>
							{buttons}
						</div>
					</div>
					<div className={classes.sectionMobile}>
						<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", left: 10, marginTop: 10 }}>
							<Button color="rose" aria-label="Open drawer" onClick={this.props.handleDrawerToggle} justIcon>
								<MenuIcon />
							</Button>
							<div style={{}}>{buttons}</div>
						</div>
					</div>
				</GridItem>
			</GridContainer>
		);
	}
}

SecondHeader.defaultProps = {};

SecondHeader.propTypes = {
	classes: PropTypes.object.isRequired,
	headerTitle: PropTypes.string.isRequired,
	buttons: PropTypes.node
};

export default withStyles(styles)(SecondHeader);
