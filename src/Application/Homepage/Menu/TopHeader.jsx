import React from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import useReactRouter from "use-react-router";

import { connect } from "react-redux";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalMallIcon from "@material-ui/icons/LocalMall";

import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import SecondNav from "../../Categories/SecondNav";

import Tabs from "../../../MedComponents/Pictures/Tabs.png";
import Wellness1 from "../../../MedComponents/Pictures/Wellness1.png";
import Diagno from "../../../MedComponents/Pictures/Diagno.png";
import Health from "../../../MedComponents/Pictures/Health.png";
import Homepage from "../Homepage";
import Covid from "../../Categories/Covid/Covid";
import MomBaby from "../../Categories/MomBaby/MomBaby";
import Eyewear from "../../Categories/Eyewear/EyeWear";
import Ayush from "../../Categories/Ayush/Ayush";
import Fitness from "../../Categories/Fitness/Fitness";
import PersonalCare from "../../Categories/PersonalCare/PersonalCare";
import Devices from "../../Categories/Devices/Devices";
import Surgical from "../../Categories/Surgicals/Surgical";
import SexualWellness from "../../Categories/SexualWellness/SexualWellness";
import Treatments from "../../Categories/Treatments/Treatments";
import ItemDetails from "../../Components/Products/ItemDetails";
import Cart from "../../Components/Products/Cart/Cart";
import Accordian from "../../../MedComponents/Accordian";
import { logOut } from "../../../Action/Application/User/UserActions";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    alignItems: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    justifyContent: "center",
  },
  title: {
    display: "none",
    color: "#fafafa",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(0.75, 0),
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.95),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    marginTop: -5,
    padding: theme.spacing(0, 2),
    color: "grey",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputRoot: {
    color: "grey",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    // paddingRight: `calc(1em + ${theme.spacing(6)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "70ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  secondHeader: {
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: theme.spacing(2),
  },
}));

function TopHeader(props) {
  console.log(props);
  const data = [
    {
      id: "ayush",
      title: "Ayush",
      content: [
        {
          id: "55",
          title: "Homeopathy",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Ayurvedic",
          info: {},
        },
        {
          id: "12",
          title: "Unani",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Siddha",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "fitness",
      title: "Fitness",
      content: [
        {
          id: "55",
          title: "Vitamins And Supplements",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Family Nutrition",
          info: {},
        },
        {
          id: "12",
          title: "Health Food And Drinks",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Ayurvedic Supplements",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Sports Supplements",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Smoking Cessation",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Weight Management",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "personal_care",
      title: "Personal Care",
      content: [
        {
          id: "55",
          title: "Body Care",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Eye Care",
          info: {},
        },
        {
          id: "12",
          title: "Home Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Face Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Fragrances",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Senior Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Hair Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Hands And Feet",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Lip Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Oral Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Skin Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Men's Care",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "mom_baby",
      title: "Mom & Baby",
      content: [
        {
          id: "55",
          title: "Baby Care",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Feminine Hygiene",
          info: {},
        },
        {
          id: "12",
          title: "Maternity Care",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "sexual_wellness",
      title: "Sexual Wellness",
      content: [
        {
          id: "55",
          title: "Condoms",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Lubricants",
          info: {},
        },
        {
          id: "12",
          title: "Massagers/Vibrators",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Sexual Health Supplements",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "treatments",
      title: "Treatments",
      content: [
        {
          id: "55",
          title: "Diabetes Care",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "First Aid",
          info: {},
        },
        {
          id: "12",
          title: "Pain Relief",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Skin Treatment",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Usual Symptoms",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "General Discomfort",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Cough & Cold",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "General Health Supplements",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Smoking Cessation (T)",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "devices",
      title: "Devices",
      content: [
        {
          id: "55",
          title: "Orthopaedics",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Breathe Easy",
          info: {},
        },
        {
          id: "12",
          title: "Measurements",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "health_conditions",
      title: "Health Conditions",
      content: [
        {
          id: "55",
          title: "Bone And Joint Pain",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Liver Care",
          info: {},
        },
        {
          id: "12",
          title: "Kidney Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Stomach Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Diabetic Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Lung Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Piles Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Mental Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Cold And Fever",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Women'S Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Weight Care",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "De-Addiction",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Cardiac Care",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "eyewear",
      title: "Eyewear",
      content: [
        {
          id: "55",
          title: "Contact Lenses (EW)",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Eye Glasses",
          info: {},
        },
        {
          id: "12",
          title: "Reading Glasses",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Sunglasses",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Computer Glasses",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "covid_essentials",
      title: "Covid Essentials",
      content: [
        {
          id: "55",
          title: "Personal & Home Essentials",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Mask, Gloves & Protective Equipment",
          info: {},
        },
        {
          id: "12",
          title: "Immunity Booster",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Business Essentials",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Travel Essentials",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "surgical",
      title: "Surgical",
      content: [
        {
          id: "55",
          title: "Dressing",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Respiratory Supplies",
          info: {},
        },
        {
          id: "12",
          title: "Surgical Consumables",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Surgical Instrument",
          img: "",
          info: {},
        },
      ],
    },
    {
      id: "diabetes",
      title: "Diabetes",
      content: [
        {
          id: "55",
          title: "Diabetes Care - Ayurveda",
          img: "",
          info: {},
        },
        {
          id: "85",
          title: "Glucometers",
          info: {},
        },
        {
          id: "12",
          title: "Lancets & Test Strips",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Classical Medicines",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Sugar Substitutes",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Diabetes Management Supplements",
          img: "",
          info: {},
        },
        {
          id: "23",
          title: "Syringes & Pens",
          img: "",
          info: {},
        },
      ],
    },
  ];
  const classes = useStyles();
  const { history, location, match } = useReactRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [active, setActive] = React.useState(0);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  console.log(match, location, history, active);
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>

      <MenuItem
        onClick={() => {
          handleMenuClose();
          props.logOut();
        }}
      >
        Log Out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <LocalMallIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <div className={classes.grow}>
        <AppBar
          style={{ background: "#28df99", boxShadow: "none" }}
          position="sticky"
        >
          <Toolbar className={classes.toolbar}>
            <Link to="/">
              <Typography className={classes.title} variant="h1" noWrap>
                TheMedBazar
              </Typography>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <div style={{ borderRight: "solid 1px #e9e9e9" }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <LocationOnIcon
                  style={{ color: "grey", marginRight: 10, marginLeft: 10 }}
                />
                <div style={{ width: 100 }}>
                  <Typography
                    variant="h5"
                    style={{ color: "grey", marginRight: 10 }}
                  >
                    Delivering to
                  </Typography>
                  <InputBase
                    type="number"
                    value={"113046"}
                    style={{
                      paddingTop: 0,
                      marginTop: -10,
                      marginBottom: -10,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={classes.sectionDesktop}>
              <Button style={{ padding: 0 }} round simple size="lg">
                Upload
              </Button>
              <Link style={{ color: "#fafafa" }} to="/mycart">
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <LocalMallIcon />
                  </Badge>
                </IconButton>
              </Link>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Button
                style={{ padding: 0, textTransform: "capitalize" }}
                round
                simple
                size="lg"
                onClick={(e) => {
                  if (props.isLoggedIn) {
                    handleProfileMenuOpen(e);
                  } else history.push("/LoginSignup/refsgrfd243546");
                }}
              >
                <AccountCircle style={{ height: 40, width: 40 }} />
                Login / Sign up
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            background: "#28df99",
          }}
        >
          <Button
            simple
            round
            size="lg"
            style={{ padding: 0, textTransform: "capitalize" }}
          >
            <img
              src={Tabs}
              style={{
                background: "#fafafa",
                marginRight: 5,
                borderRadius: "50%",
              }}
              height="40"
              width="40"
              alt=""
            />
            Medicine
          </Button>
          <Button
            simple
            round
            size="lg"
            style={{ padding: 0, textTransform: "capitalize" }}
          >
            <img
              src={Wellness1}
              style={{
                background: "#fafafa",
                marginRight: 5,
                borderRadius: "50%",
              }}
              height="40"
              width="40"
              alt=""
            />
            Wellness
          </Button>
          <Button
            simple
            round
            size="lg"
            style={{ padding: 0, textTransform: "capitalize" }}
          >
            <img
              src={Diagno}
              style={{
                background: "#fafafa",
                marginRight: 5,
                borderRadius: "50%",
              }}
              height="40"
              width="40"
              alt=""
            />
            Diagnostic
          </Button>
          <Button
            simple
            round
            size="lg"
            style={{ padding: 0, textTransform: "capitalize" }}
          >
            <img
              src={Health}
              style={{
                background: "#fafafa",
                marginRight: 5,
                borderRadius: "50%",
              }}
              height="40"
              width="40"
              alt=""
            />
            Health Corner
          </Button>
        </div>
        <SecondNav
        // setActive={(p) => {
        //   console.log(p);
        //   setActive(p);
        // }}
        />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/non/:itemName" component={ItemDetails} />
          <Route exact path="/mycart" component={Cart} />
        </Switch>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.mainReducer.isLoggedIn,
    accountId: state.authReducer.auth.account.accountId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => logOut(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);

// {
//   console.log(active);
// }
// <Accordian
//   active={data.findIndex((i) => i.id === active)}
//   handleSelect={(id) => {
//     this.handleSelect(id);
//   }}
//   collapses={data}
// />;
