import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "components/CustomButtons/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// @material-ui/icons
import ExpandMore from "@material-ui/icons/ExpandMore";
import accordionStyle from "assets/jss/material-dashboard-pro-react/components/accordionStyle";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: -1,
      active: -1,
      prevProps: {},
    };
  }
  static getDerivedStateFromProps(nextProps, prevStates) {
    if (nextProps !== prevStates.prevProps) {
      console.log("clicked");
      return {
        active: nextProps.active,
        prevProps: nextProps,
      };
    }
  }
  handleChange = (panel) => (event, expanded) => {
    this.setState({
      active: expanded ? panel : -1,
    });
  };
  render() {
    const { index } = this.state;
    const { classes, collapses, handleSelect, handleHover } = this.props;
    return (
      <div className={classes.root}>
        <h2 style={{ marginLeft: 20 }}>Categories</h2>
        {collapses.map((prop, key) => {
          return (
            <ExpansionPanel
              expanded={this.state.active === key}
              onChange={this.handleChange(key)}
              key={key}
              classes={{
                root: classes.expansionPanel,
                expanded: classes.expansionPanelExpanded,
              }}
            >
              <ExpansionPanelSummary
                style={{
                  border: this.state.active === key ? "" : "none",
                }}
                expandIcon={<ExpandMore />}
                classes={{
                  root: classes.expansionPanelSummary,
                  expanded: classes.expansionPanelSummaryExpaned,
                  content: classes.expansionPanelSummaryContent,
                  expandIcon: classes.expansionPanelSummaryExpandIcon,
                }}
              >
                <div style={{ marginLeft: 10 }} className={classes.title}>
                  {prop.title}
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <List
                  style={{ width: "100%", paddingTop: 0, paddingBottom: 5 }}
                >
                  {prop.content.map((item, skey) => (
                    <div
                      onClick={() => {
                        handleSelect(item.templateId);
                      }}
                      onMouseEnter={() => this.setState({ index: skey })}
                      onMouseLeave={() => this.setState({ index: -1 })}
                      style={{
                        padding: "3px 0",
                        background: index === skey ? "#f5f5f5" : "",
                      }}
                    >
                      <ListItem
                        style={{
                          cursor: "pointer",
                          height: 30,
                          margin: 0,
                          padding: 0,
                          paddingLeft: 20,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 14,
                            color:
                              index === skey ? "#00acc1" : "rgba(0,0,0,0.87)",
                            width: "100%",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                          }}
                        >
                          {item.title}
                        </div>
                      </ListItem>
                    </div>
                  ))}
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

Accordion.defaultProps = {
  active: -1,
};

Accordion.propTypes = {
  classes: PropTypes.object.isRequired,
  // index of the default active collapse
  active: PropTypes.number,
  collapses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.array,
    })
  ).isRequired,
};

export default withStyles(accordionStyle)(Accordion);
