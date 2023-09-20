import React, {useState} from 'react';
import FakeAPI from "./data/fakeAPI.js";

const AccountData = () => {
    const [data, setState] = useState(false);

    FakeAPI.then(data => {
        setState(data);
    })

    console.log(data);

    if (data !== false) {
        return (
            <div>

                <table>
                    {data.map(el => {
                        return (<tr>
                                <td>{el.day}</td>
                                <td>{el.balance}</td>
                                <td>{el.change}</td>
                            </tr>)
                    })}
                </table>
            </div>
        );
    } else {
        return null;
    }


};

export default AccountData;