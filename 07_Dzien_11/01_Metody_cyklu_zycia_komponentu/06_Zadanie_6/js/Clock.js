import React, {Component} from 'react';
import {createRoot} from "react-dom/client";
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";

class Clock extends Component {
    state = {
        date: new Date()
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.setState({date: new Date()});
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <div>
                <ClockTime date={this.state.date}/>
                <ClockDate date={this.state.date}/>
            </div>
        );
    }
}

export default Clock;