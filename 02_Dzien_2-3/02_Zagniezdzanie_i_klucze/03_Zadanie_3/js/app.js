import React, {Fragment} from "react";
import {createRoot} from "react-dom/client";
import people from "./data/people";

// const element = (el) => el.forEach(element => {
//     return <div className="person">
//         <img src={element.avatar}/>
//         <div className="info">
//             <h1>{element.title + " " + element.name + " " + element.surname}</h1>
//             <p>{element.bio}</p>
//         </div>
//     </div>
// })

const test = () =>{
    return <>
        {
            people.map(el=> {
                return <div key={el.id} className="person">
                    <img src={el.avatar}/>
                    <div className="info">
                        <h1>{el.title + " " + el.name + " " + el.surname}</h1>
                        <p>{el.bio}</p>
                    </div>
                </div>
            })
        }
    </>;
}

console.log(test());


const container = document.getElementById("app");
const root = createRoot(container);
root.render( test() );
