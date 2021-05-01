import React from "react";
import { Link, Route, IndexRoute } from "react-router-dom";
import initialData from "./lead-initial-data";
import sideList from "../variables/SidebarList";
import BoardLeadComponent from "./BoardLeadComponent"
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "components/CustomButtons/Button.jsx";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar
});

class Board extends React.Component{
  constructor(props) {
    super(props)
  }
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  render() {
    const { classes} = this.props;
    const { match } = this.props
    console.log(match)
    const boardList = sideList;
    var linkList = boardList.map(board => {
      return (
        <Link to={`${match.url}/${board.id}`}>
          <ListItem button key={board.id}>

            <ListItemText primary={board.name} />

          </ListItem></Link>
      )
    });

    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={this.handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div style={{ display: "block", justifyContent: "space-between" }}>
          <div
            style={{
              float: "left",
              padding: "10px",
              width: "30%",
              background: "#f0f0f0",
              marginLeft: "auto"
            }}
          >
            <nav className={classes.drawer}>

              <Hidden smUp implementation="css">
                <Drawer
                  container={this.props.container}
                  variant="temporary"
                  anchor={"left"}
                  open={this.state.mobileOpen}
                  onClose={this.handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  ModalProps={{
                    keepMounted: true
                  }}
                >
                  {linkList}
                </Drawer>
              </Hidden>
              <Hidden xsDown implementation="css">
                <Drawer
                  className={classes.drawer}
                  variant="permanent"
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  open
                >
                  <div className={classes.toolbar} />
                  <List>
                    {linkList}
                  </List>

                  <Divider />
                </Drawer>
              </Hidden>
            </nav>
          </div>
        </div>
 
        <Route
           
          path={`${match.url}/:boardId`}
          render={props => <BoardLeadComponent dataNew={initialData} {...props} />}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Board);
