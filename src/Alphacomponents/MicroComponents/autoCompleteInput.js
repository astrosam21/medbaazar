import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import { withStyles } from "@material-ui/core/styles";
import DraftsIcon from '@material-ui/icons/Drafts';
import "./formComponentStyle/autoComplete.css"


class AutoCompleteInput extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ""
        };
    }

    onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };


    onClick = e => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };

    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;       
        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        }
 
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion - 1 });
        }

        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        const {
            activeSuggestion,
            filteredSuggestions,
            showSuggestions,
            userInput }=this.state

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <List class="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }

                            return (
                                <ListItem
                                    className={className}
                                    key={suggestion}
                                    onClick={this.onClick}
                                >
                                    <ListItemText>{suggestion}</ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                );
            } else {
                suggestionsListComponent = (
                    <div class="no-suggestions">
                        <em>No suggestions</em>
                    </div>
                );
            }
        }

        return (
          <Fragment>
            {/* <input
                    type="text"
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    value={userInput}
                /> */}
            <CustomInput
              labelText={this.props.label}
              id="schedule_title"
              formControlProps={{
                  fullWidth: this.props.fullWidth
              }}
              inputProps={{
                onChange: this.onChange,
                onKeyDown:  this.onKeyDown,
                type: this.props.inputType,
                  placeholder: "Input Here....",
                  value: userInput,
                  name: this.props.name
              }}
            />
            {suggestionsListComponent}
          </Fragment>
        );
    }
}
AutoCompleteInput.defaultProps={
    suggestions: []
}
AutoCompleteInput.propTypes={
    suggestions: PropTypes.array
}
export default AutoCompleteInput;
