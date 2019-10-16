import React from 'react';
import Comic from './Comic';

class SearchResults extends React.Component {
    constructor() {
        super();
    }

    render() {
        if (this.props.comics.length < 1) {
            return (
                <h1>Loading</h1>
            )
        } else {
            return (
                <div className="comic-container">
                    {this.props.comics}
                </div>
            )
        }
    }
}


export default SearchResults;