import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Settings from "@material-ui/icons/Settings";
import Header from "./Header/Header";
import CustomInput from "./CustomInput.jsx";
import CustomDropdown from "./CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "./navbarsStyle.jsx";

import profileImage from "assets/img/faces/avatar.jpg";

class HeaderLinks extends React.Component {
	render() {
		const { classes, dropdownHoverColor } = this.props;
		return (
			<div className={classes.collapse}>
				<List className={classes.list + " " + classes.mrAuto}>
					<ListItem className={classes.listItem}>
						<img src={profileImage} style={{ width: 60, height: 60, borderRadius: "50%" }} />
					</ListItem>

					<ListItem className={classes.listItem}>
						<CustomDropdown
							noLiPadding
							navDropdown
							hoverColor={dropdownHoverColor}
							buttonText="Contacts"
							buttonProps={{
								className: classes.navLink,
								color: "transparent"
							}}
							dropdownList={[
								<Link to="/contacts/tablelist/all" className={classes.dropdownLink}>
									Contacts
								</Link>,
								<Link to="/company/tablelist/all" className={classes.dropdownLink}>
									Companies
								</Link>,
								<Link to="/list" className={classes.dropdownLink}>
								Lists
								</Link>
							]}
						/>
					</ListItem>
					<ListItem className={classes.listItem} style={{ paddingLeft: 50 }}>
						<CustomDropdown
							noLiPadding
							navDropdown
							hoverColor={dropdownHoverColor}
							buttonText="Marketing"
							buttonProps={{
								className: classes.navLink,
								color: "transparent"
							}}
							dropdownList={[
								<Link to="/mail/tablelist/all_mail" className={classes.dropdownLink}>
									Email
								</Link>,

								<Link to="/landingPage" className={classes.dropdownLink}>
									Landing Page
								</Link>,
								<Link to="/forms" className={classes.dropdownLink}>
									Forms
								</Link>,
								<Link to="/social" className={classes.dropdownLink}>
									Social
								</Link>,
								<Link to="/Blog" className={classes.dropdownLink}>
								Blog
							</Link>
							]}
						/>
					</ListItem>
					<ListItem className={classes.listItem} style={{ paddingLeft: 50 }}>
						<CustomDropdown
							noLiPadding
							navDropdown
							hoverColor={dropdownHoverColor}
							buttonText="Sales"
							buttonProps={{
								className: classes.navLink,
								color: "transparent"
							}}
							dropdownList={[
								<Link to="/leads/tablelist/all" className={classes.dropdownLink}>
									Deals
								</Link>,

								<Link to="/task/tablelist/open_task" className={classes.dropdownLink}>
									Tasks
								</Link>,
								<Link to="/documents" className={classes.dropdownLink}>
									Documents
								</Link>
							]}
						/>
					</ListItem>
				</List>

				<div className={classes.mlAuto}>
					<CustomInput
						white
						inputRootCustomClasses={classes.inputRootCustomClasses}
						formControlProps={{
							className: classes.formControl
						}}
						inputProps={{
							placeholder: "Search",
							inputProps: {
								"aria-label": "Search",
								className: classes.searchInput
							}
						}}
					/>
					<Button color="white" justIcon round>
						<Search className={classes.searchIcon} />
					</Button>
				</div>

				<ListItem className={classes.listItem} style={{ paddingLeft: "10%" }}>
					<Link to="/settings" style={{ textDecoration: "none", color: "white" }}>
						<Settings />
					</Link>
				</ListItem>
			</div>
		);
	}
}
HeaderLinks = withStyles(navbarsStyle)(HeaderLinks);
class SectionNavbars extends React.Component {
	render() {
		return (
			<div>
				<Header color="dark" links={<HeaderLinks dropdownHoverColor="rose" />} fixed />
			</div>
		);
	}
}

export default withStyles(navbarsStyle)(SectionNavbars);
