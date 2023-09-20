import React, {Component} from 'react';

class Box extends Component {
    render() {
        console.log("Render")
        return (
            <div style={{
                width: "500px",
                height: "500px",
                backgroundColor: `${this.state.text}`
            }}>
                Treść
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            text: "red"
        }
        console.log("constructor");
    }

    componentDidMount() {
        this.timeoutID = setInterval(() => {
            if (this.state.text === "red") {
                this.setState({text: "green"})
            } else {
                this.setState({text: "red"})
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeoutID);
    }
}

export default Box;