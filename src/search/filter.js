import React, { Component } from 'react';
import axios from 'axios';

import TypeAhead from '../components/typeahead-cogoport';

class Filter extends Component {
    
    state = {
        error: false,
        query: '',
        results: [],
        helpText: ''
    }

    getData = async () => {
        await axios.get(`https://restcountries.eu/rest/v2/name/${this.state.query}`)
            .then(({ data }) => {
                this.setState({
                    results: data
                })
                console.log(this.state.results);
            })
            .catch(() => this.setState({ error: true, helpText: "No Results Found" }))

    }

    handleChange = () => {
        this.setState({
            query: this.search.value,
            helpText: ''
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                    this.getData()
            }
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search here"
                    ref={input => this.search = input}
                    onChange={this.handleChange}
                    list="countryList"
                    className="cogoport-input"
                />
                <TypeAhead results={this.state.results}/>
                <p className="cogoport-no-results">{this.state.helpText}</p>
            </form>
        )
    }
}

export default Filter;