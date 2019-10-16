import React from 'react';
import guantlet from '../img/gauntlet.png';

class Splash extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="splash-img">
                {this.props.isLoading ? <h1>Loading</h1> : <img src={guantlet} alt="" />}
                <br />
                <span className="splash-sub">{this.props.isLoading ? null : 'snap!'}</span>
            </div>
        )
    }
}

export default Splash;