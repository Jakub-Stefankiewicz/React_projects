import React, {Component} from 'react';

class RandomNumbers extends Component {
    state ={
        arr: [1,2]
    }
    clickHandler = () => {
        const rand = Math.random();
        this.setState(prev => ({
            arr: [...prev.arr, rand]
        }));
        //ta też działa:
        // const arr = [...this.state.arr];
        // arr.push(rand);
        // this.setState({
        //     arr
        // })
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Wylosuj liczbę</button>
                {this.state.arr.map(el=>{
                   return <ul key={el}>{el}</ul>
                })}
            </div>
        );
    }
}

export default RandomNumbers;