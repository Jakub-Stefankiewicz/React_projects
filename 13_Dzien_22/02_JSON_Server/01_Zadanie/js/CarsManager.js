import React, {useState, useEffect} from 'react';
import {fetch} from "whatwg-fetch";

const CarsManager = () => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/cars');
                const cars = await response.json();
                console.log(cars);
                console.log("poszło")
            } catch (e) {
                console.log(e);
                console.log("nie poszło");
            }
        }
        fetchData();
    }, []);
    return (
        <div>

        </div>
    );
};

export default CarsManager;