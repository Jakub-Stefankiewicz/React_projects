import React, {Component} from 'react';

class LifeCyclesTester extends Component {
    render() {
        console.log("Render")
        return (
            <div>

            </div>
        );
    }
    constructor(props) {
        super(props);
        console.log("constructor")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("aktualizacja")
    }

    componentDidMount() {
        console.log("gotowe, zamontowan")
    }

    componentWillUnmount() {
        console.log("odmontowany")
    }

}

export default LifeCyclesTester;