import React, {Component} from 'react';

class HelloWorld extends Component {
    render() {
        console.log("Render")
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello world"
        }
        console.log("constructor");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("aktualizacja");
    }

    componentDidMount() {
        console.log("gotowe, zamontowan");
        this.timeoutID = setTimeout(() => {
            this.setState({text: "Hi, Everyone!" })
        }, 3000)
    }

    componentWillUnmount() {
        console.log("odmontowany")
    }
}

export default HelloWorld;