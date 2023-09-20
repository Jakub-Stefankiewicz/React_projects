import React, {Component} from 'react';

class CurrentDate extends Component {
    state = {
        currentDate: new Date()
    };

    handleClick = () => {
        this.setState({currentDate: new Date()})
    }

    render() {
        return (
            <div>
                <h1>Data {this.state.currentDate.toLocaleTimeString()}</h1>
                <button onClick={this.handleClick}>przycisk</button>
            </div>
        );
    }
}

export default CurrentDate;