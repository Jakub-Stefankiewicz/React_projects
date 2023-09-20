import React, {useState, useEffect} from 'react';
import {fetch} from "whatwg-fetch";

const Holidays = ({keyId}) => {
    const URL = 'https://fer-api.coderslab.pl/v1/holidays';
    const [country, setCountry] = useState("PL");
    const [holidays, setHolidays]=useState([]);

    console.log(keyId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL + `?key=${keyId}&country=${country}`);
                const holidays = await response.json();
                console.log(holidays);
                setHolidays([]);
                holidays.holidays.forEach(holiday => {
                    setHolidays(prevState => [...prevState, holiday]);
                })
            } catch (e){
                console.log(e);
            }
        };
        fetchData();
    }, [country]);

    const handleChange = (e) =>{
        setCountry(e.target.value);
    }

    return (
        <div>
            {holidays.map(holiday => {
                return <li key={holiday.name}>
                    <h3 className="holiday-name" key={holiday.name}>{holiday.name}</h3>
                    <div className="holiday-date" key={holiday.date}>{holiday.date}</div>
                </li>
            })}
            <form>
                <h1>Wybierz kraj</h1>
                <select value={country} onChange={handleChange}>
                    <option value="PL">PL</option>
                    <option value="GB">GB</option>
                    <option value="US">US</option>
                </select>
            </form>
        </div>
    );
};

export default Holidays;