import React, {Component} from 'react';

class Name2 extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name} {this.props.surname}</p>
            </div>
        );
    }
}

export default Name2;