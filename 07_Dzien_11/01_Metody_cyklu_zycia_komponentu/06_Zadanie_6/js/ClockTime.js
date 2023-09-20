import React, {Component} from 'react';

class ClockTime extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default ClockTime;