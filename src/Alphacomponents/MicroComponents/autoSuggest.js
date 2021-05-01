import React from 'react'

import Autosuggest from 'react-autosuggest'
import axios from 'axios'
import { debounce } from 'throttle-debounce'

import "./formComponentStyle/autoSuggest.css";

class AutoSuggest extends React.Component {
    state = {
        value: '',
        suggestions: []
    }

    componentWillMount() {
        this.onSuggestionsFetchRequested = debounce(
            500,
            this.onSuggestionsFetchRequested
        )
    }

    renderSuggestion = suggestion => {
        return (
            <div className="result">
                <div>{suggestion.name}</div>
                <div className="otherFields">{suggestion.otherFields}</div>
            </div>
        )
    }

    onChange = (event, { newValue }) => {
        this.setState({ value: newValue })
    }

    onSuggestionsFetchRequested = ({ value }) => {
        axios
            .post('http://localhost:3003/data?q=', {
                "query": {
                    "match": {
                        "name":value
                    }
                }
            })
            .then(res => {
                const results = res.data.hits.map(r => r.name)
                this.setState({ suggestions: results })
            })
    }

    onSuggestionsClearRequested = () => {
        this.setState({ suggestions: [] })
    }

    render() {
        const { value, suggestions } = this.state

        const inputProps = {
            placeholder: 'input search query',
            value,
            onChange: this.onChange
        }

        return (
            <div className="main">
                
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={suggestion => suggestion.name}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                />
                
            </div>
        )
    }
}

export default AutoSuggest;