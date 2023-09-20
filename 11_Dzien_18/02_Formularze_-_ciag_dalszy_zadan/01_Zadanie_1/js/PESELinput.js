import React, {useState} from 'react';
import useInput from "../../../01_Custom_Hooks/01_Zadanie_1/js/hooks/useInput";

const PeseLinput = () => {
    const[value, setValue]=useState(" ");
    const[verify, setVerify]=useState(false);

    const handleChange = (e) => {
        if (e.target.value.length>10 && !isNaN(parseInt(e.target.value))){
            setVerify(true);
        }
        setValue(e.target.value);
    }

    return (
        <div>
            <form>
            <input type="text" name="value" value={value} onChange={e=>handleChange(e)}/>
            <div>{verify ? <input type="submit" value ="prześlij"/> : "Niepoprawny pesel"}</div>
            </form>
        </div>
    );
};

export default PeseLinput;