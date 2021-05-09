import "./App.css";
import { Route, Switch } from "react-router-dom";
import ContactList from "./Application/Contacts/Contact/ContactListPage/ContactList";
import Homepage from "./Application/Homepage/Homepage";
import SectionNavbars from "./Alphacomponents/TopLevelHeader/SectionNavbars";
import withStyles from "@material-ui/core/styles/withStyles";

import React from "react";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import MySelect from "./Application/Marketing/Blog/Select";
import "assets/scss/material-dashboard-pro-react.scss";

import ErrorAlert from "./Alphacomponents/Alert/ErrorAlert";
import SecondNav from "./Application/Categories/SecondNav";
import Covid from "./Application/Categories/Covid/Covid";
import MomBaby from "./Application/Categories/MomBaby/MomBaby";
import Eyewear from "./Application/Categories/Eyewear/EyeWear";
import Ayush from "./Application/Categories/Ayush/Ayush";
import Fitness from "./Application/Categories/Fitness/Fitness";
import PersonalCare from "./Application/Categories/PersonalCare/PersonalCare";
import Devices from "./Application/Categories/Devices/Devices";
import Surgical from "./Application/Categories/Surgicals/Surgical";
import SexualWellness from "./Application/Categories/SexualWellness/SexualWellness";
import Treatments from "./Application/Categories/Treatments/Treatments";
import ItemDetails from "./Application/Components/Products/ItemDetails";
import Cart from "./Application/Components/Products/Cart/Cart";
import TopHeader from "./Application/Homepage/Menu/TopHeader";
import LoginSignup from "./Application/User/LoginSignup";
import Accordian from "./MedComponents/Accordian";
import Categories from "./Application/Categories/Categories";
const styles = () => ({
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
  },
});

class App extends React.Component {
  state = {
    open: false,
  };
  handleDrawerToggle = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className={classes.container}>
          <TopHeader />
          <Route exact path="/LoginSignup/:userId" component={LoginSignup} />
          <Route
            exact
            path="/chooseCategory/:category"
            component={Categories}
          />
        </div>
        <ErrorAlert />
      </div>
    );
  }
}

export default withStyles(styles)(App);
