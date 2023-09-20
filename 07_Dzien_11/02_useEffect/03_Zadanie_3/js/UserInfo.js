import React, {useEffect, useState} from 'react';

const UserInfo = () => {
    const[user, setUser]=useState({
        name: "Jan",
        secondName: "Kowalski"
    })

    useEffect(() => {
        setUser(prevState => {
            return {
                ...user,
                name: "Adam",
                secondName: "Nowak"
            }
        })
    }, []);

    return (
        <div>
<p>{user.name} {user.secondName}</p>
        </div>
    );
};

export default UserInfo;