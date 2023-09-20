import React, {Component} from 'react';

class MagicBox extends Component {
    state ={
        color: "#000"
    }
    clickHandler=()=>{
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.setState((prev)=>{
            return{
                color: randomColor
            }
        })
    }
    render() {
        return (
            <div onMouseEnter={this.clickHandler} style={{width: 200, height: 200, backgroundColor: this.state.color}}>
            </div>
        );
    }
}

export default MagicBox;