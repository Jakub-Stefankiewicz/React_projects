import React, {useState} from 'react';

const SelectOrType = ({items}) => {
    const [cars, addCar] = useState(items);
    const [car, newCar] = useState(" ");
    const [hidden, changeHidden] = useState(true);

    const selectHandler = () => {
        changeHidden(false);
    }

    const carHandler = (e) => {
        newCar(e.target.value);
        e.preventDefault();
    }

    const addHandler = (e) => {
        e.preventDefault();
        addCar(prev => {
            return [...prev, car];
        })
    }

    return (
        <div>
            <form>
                <select>
                    {cars.map(el => {
                        return <option value={el}>{el}</option>
                    })}
                    <option onClick={selectHandler}>Inne</option>
                </select>
                <input type="text" hidden={hidden} name="car" placeholder="wpisz markę auta..." onChange={carHandler}/>
                <input type="submit" hidden={hidden} onClick={addHandler}/>
            </form>
        </div>
    );
};

export default SelectOrType;