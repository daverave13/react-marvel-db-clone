import React from 'react';

class Comic extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="comic-main">
                <a href={this.props.url}>
                    <span>{this.props.name}</span>
                    <img src={this.props.img} alt="" />
                </a>
            </div>
        )
    }
}


export default Comic;