import React, {Component} from 'react';

class ShowUserClass extends Component {

    clickHandler = () => {
        // console.log(this.props.name , this.props.surname)
        const {name, surname} =this.props;
        console.log(name, surname);
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Pokaż dane</button>
            </div>
        );
    }
}

export default ShowUserClass;