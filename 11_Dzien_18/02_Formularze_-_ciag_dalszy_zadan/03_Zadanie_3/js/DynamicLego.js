import React, {useState} from 'react';

const DynamicLego = () => {
    const [lego, addLego] = useState(1)

    const changeHandler = (e) => {
        addLego(e.target.value);
        e.preventDefault();
    }

    const legoBuilder = (number) => {
        const arr = [];
        for (let i = 1; i <= number; i++) {
            arr.push(
                <li key={i} style={{
                    backgroundColor: "red",
                    height: "50px",
                    width: `${50*i}px`
                }}></li>
            )
        }
        return arr;
    }

    return (
        <div>
            <form>
                <input type="number" onChange={e => changeHandler(e)}/>
            </form>
            <ul>{legoBuilder(lego)}</ul>
        </div>
    );
};

export default DynamicLego;