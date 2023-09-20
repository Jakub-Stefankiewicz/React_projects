import React, {useEffect, useState} from 'react';

const CustomTitle = () => {
    const [counter, setCounter] = useState(1);
    const [fontSize, setFontSize] = useState(1.2);

    useEffect(() => {
        document.title=counter.toString();
    }, [counter]);

    useEffect(() => {
        setFontSize(fontSize*counter);
    }, [counter]);

    const handleClick = () => {
        setCounter(prevState => prevState + 1);
    }

    return (
        <div>
            <p
                onClick={handleClick}
                style={{fontSize:fontSize+"rem"}}
            >Kliknięto mnie już {counter} razy</p>
        </div>
    );
};

export default CustomTitle;