import React from 'react';

const SecretStuff = ({password, secretPassword, secret}) => {
    if (password === secretPassword) {
        return (
            <div>
                <p>{secret}</p>
            </div>
        );
    } else {
        return null;
    }


};

export default SecretStuff;