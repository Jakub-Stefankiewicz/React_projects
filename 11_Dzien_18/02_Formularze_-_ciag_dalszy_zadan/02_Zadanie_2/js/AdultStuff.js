import React from 'react';
import AdultStuffBox from "./AdultStuffBox";
import useInput from "./useInput";


const AdultStuff = () => {

    const [age, setAge] = useInput(0)
    return (
        <>
            <form>
                <input type="number" {...setAge}/>
            </form>
            <AdultStuffBox age={age}/>
        </>
    );
};

export default AdultStuff;