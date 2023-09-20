import React, {Component} from 'react';
import {createRoot} from "react-dom/client";

class StrobeLight extends Component {
    state = {
        color: "white",
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            if (this.state.color === "white") {
                this.setState({color: this.props.color})
            } else {
                this.setState({color: "white"})
            }
        }, this.props.freq);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }


    render() {
        return (
            <div style={{width: "500px", height: "50px", backgroundColor: this.state.color}}>
            </div>
        );
    }
}

export default StrobeLight;