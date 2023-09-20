import React, {useState} from 'react';

const WhoIsPresent = () => {
    const[name, setName]=useState(
        ['Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa']
)
    const[item, setItem]=useState([])

    const clickHandler = (e) => {
        setItem(prevState => [...prevState, e.target.value])
        const index=name.indexOf(e.target.value);
        name.splice(index,1);
        setName(name)
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <select>
                    {name.map(el => {
                        return <option key={el} onClick={e => clickHandler(e)}>{el}</option>
                    })}
                </select>
                <ul>
                    {item.map(item => {
                        return <li>{item}</li>
                    })}
                </ul>
            </form>
        </div>
    );
};

export default WhoIsPresent;