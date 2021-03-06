import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";

// core components
import Button from "components/CustomButtons/Button.jsx";

import customDropdownStyle from "./customDropdownStyle.jsx";

class CustomDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			clicks: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClick() {
		var x = (this.state.clicks + 1) % 2;
		this.setState({ open: true, clicks: x });
	}
	handleClose() {
		this.setState({ open: false, clicks: 0 });
	}
	handleSelection(prop) {
		this.props.onSelect(prop);
		this.handleClose();
	}
	render() {
		const { open } = this.state;
		const {
			classes,
			buttonText,
			buttonIcon,
			dropdownList,
			buttonProps,
			dropup,
			dropdownHeader,
			caret,
			hoverColor,
			dropPlacement,
			rtlActive,
			noLiPadding,
			innerDropDown,
			navDropdown
		} = this.props;
		const caretClasses = classNames({
			[classes.caret]: true,
			[classes.caretDropup]: dropup && !open,
			[classes.caretActive]: open && !dropup,
			[classes.caretRTL]: rtlActive
		});
		const dropdownItem = classNames({
			[classes.dropdownItem]: true,
			[classes[hoverColor + "Hover"]]: true,
			[classes.noLiPadding]: noLiPadding,
			[classes.dropdownItemRTL]: rtlActive
		});
		const dropDownMenu = (
			<Grow in={open} id="menu-list" style={dropup ? { transformOrigin: "0 100% 0" } : { transformOrigin: "0 0 0" }}>
				<Paper className={classes.dropdown}>
					<MenuList role="menu" className={classes.menuList}>
						{dropdownHeader !== undefined ? (
							<MenuItem onClick={this.handleClose} className={classes.dropdownHeader}>
								{dropdownHeader}
							</MenuItem>
						) : null}
						{dropdownList.map((prop, key) => {
							if (prop.divider) {
								return <Divider key={key} onClick={this.handleClose} className={classes.dropdownDividerItem} />;
							} else if (prop.ref === "multi") {
								return (
									<MenuItem key={key} className={dropdownItem} style={{ overflow: "visible", padding: 0 }}>
										{prop}
									</MenuItem>
								);
							}
							return (
								<MenuItem key={key} onClick={() => this.handleSelection(prop)} className={dropdownItem}>
									{prop}
								</MenuItem>
							);
						})}
					</MenuList>
				</Paper>
			</Grow>
		);
		return (
			<Manager className={innerDropDown ? classes.innerManager : classes.manager}>
				<Target className={buttonText !== undefined ? "" : classes.target}>
					<Button
						aria-label="Notifications"
						aria-owns={open ? "menu-list" : null}
						aria-haspopup="true"
						{...buttonProps}
						onClick={open ? this.handleClose : this.handleClick}>
						{buttonIcon !== undefined ? <this.props.buttonIcon className={classes.buttonIcon} /> : null}
						{buttonText !== undefined ? buttonText : null}
						{caret ? <b className={caretClasses} /> : null}
					</Button>
				</Target>
				<Popper
					placement={dropPlacement}
					eventsEnabled={open}
					className={classNames({
						[classes.popperClose]: !open,
						[classes.pooperResponsive]: true,
						[classes.pooperNav]: open && navDropdown
					})}>
					{innerDropDown ? (
						dropDownMenu
					) : (
						<ClickAwayListener onClickAway={this.handleClose} ref="cacat">
							{dropDownMenu}
						</ClickAwayListener>
					)}
				</Popper>
			</Manager>
		);
	}
}

CustomDropdown.defaultProps = {
	caret: true,
	dropup: false,
	hoverColor: "primary"
};

CustomDropdown.propTypes = {
	classes: PropTypes.object.isRequired,
	hoverColor: PropTypes.oneOf(["dark", "primary", "info", "success", "warning", "danger", "rose"]),
	buttonText: PropTypes.node,
	buttonIcon: PropTypes.func,
	dropdownList: PropTypes.array,
	buttonProps: PropTypes.object,
	dropup: PropTypes.bool,
	dropdownHeader: PropTypes.node,
	rtlActive: PropTypes.bool,
	caret: PropTypes.bool,
	dropPlacement: PropTypes.string,
	noLiPadding: PropTypes.bool,
	innerDropDown: PropTypes.bool,
	navDropdown: PropTypes.bool,
	onSelect:PropTypes.func
};

export default withStyles(customDropdownStyle)(CustomDropdown);
