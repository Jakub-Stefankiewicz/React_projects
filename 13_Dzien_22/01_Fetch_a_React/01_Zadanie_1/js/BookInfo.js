import React, {useState, useEffect} from 'react';
import {fetch} from "whatwg-fetch";

const BookInfo = ({isbn}) => {
    const [book, setBook]=useState("");

    // useEffect(() => {
    //     fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setBook(data.items[0].volumeInfo.title)
    //         });
    // }, []);

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
                const books = await response.json();
                setBook(books.items[0].volumeInfo.title);
            } catch (e){
                console.log(e);
            }
        };
        fetchData();
    }, []);


    return (
        <div>
            {book ? <h1>{book}</h1> : <h2> Ładowanie danych </h2>}
        </div>
    );
};

export default BookInfo;