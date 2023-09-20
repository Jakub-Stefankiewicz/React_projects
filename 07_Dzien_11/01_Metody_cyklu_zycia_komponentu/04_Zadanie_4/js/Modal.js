import React, {Component} from 'react';
import {createRoot} from "react-dom/client";

class Modal extends Component {
    state = {
        modalOpen: false
    }

    componentDidMount() {
        this.setIntervalId=setInterval(()=>{
            this.setState((prevState) => {
                return {
                    modalOpen: true
                }
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                {this.state.modalOpen && <h2>{this.props.heading}</h2>}
            </div>
        );
    }
}

export default Modal;