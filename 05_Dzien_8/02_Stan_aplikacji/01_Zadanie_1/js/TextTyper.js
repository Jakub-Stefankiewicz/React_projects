import React, {Component} from 'react';

class TextTyper extends Component {
    state = {
        index: 1
    }

    addIndex = () => {
        this.setState((prev) => {
                if (prev.index + 1 <= this.props.text.length) {
                    return {
                        index: prev.index + 1
                    }
                } else {
                    return {
                        index: prev.index
                    }
                }
            }
        )
    }

    removeIndex = () => {
        this.setState((prev) => {
            if (prev.index - 1 >= 1) {
                return {
                    index: prev.index - 1
                }
            } else {
                return {
                    index: prev.index
                }
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.text.slice(0, this.state.index)}</h1>
                <button onClick={this.addIndex}>+</button>
                <button onClick={this.removeIndex}>-</button>
            </div>
        );
    }
}

export default TextTyper;