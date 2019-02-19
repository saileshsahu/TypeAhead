import React, { Component } from 'react';

class TypeAhead extends Component {

    options = () => this.props.results.map(q => (
        <option key={q.name}>
            {q.name}
        </option>
    ))

    render() {
        return (
            <div>
                <datalist id="countryList">{this.options()}</datalist>
            </div>
        );
    }
}

export default TypeAhead;