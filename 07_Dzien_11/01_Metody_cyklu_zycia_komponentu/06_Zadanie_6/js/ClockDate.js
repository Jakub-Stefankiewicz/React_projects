import React, {Component} from 'react';

class ClockDate extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.date.toLocaleDateString()}</h1>
            </div>
        );
    }
}

export default ClockDate;