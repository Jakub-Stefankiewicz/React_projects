import React, {useState, useEffect} from 'react';
import ShowInfo from "./ShowInfo";

const PropsToState = ({text}) => {
    const [state, setState] = useState(text);

    useEffect(() => {
        const interval = setInterval(() => {
            setState(prevState => prevState+".");
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div>
            <ShowInfo info={state}/>
        </div>
    );
};

export default PropsToState;