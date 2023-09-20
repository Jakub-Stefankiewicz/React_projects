import React, {useState} from 'react';
import useInput from './useInput';

const Register = () => {

    const[user, setUser]=useInput({
        name: "",
        email: "",
        password: "",
        sex: "",
        adress: "",
        postalCode: "",
        city: ""
    })

    console.log(user);


    return (
        <div>
            <form>
                Dane osobowe: <br/>
                <input type="text" placeholder="Imię i nazwisko" {...setUser}/> <br/>
                <input type="email" placeholder="email" {...setUser}/> <br/>
                <input type="password" placeholder="hasło" {...setUser}/> <br/>
                <input type="password" placeholder="powtórz hasło" {...setUser}/> <br/>
                <select >
                    <option value="M">Mężczyzna</option>
                    <option value="K">Kobieta</option>
                </select> <br/>
                Dane do wysyłki: <br/>
                <input type="text" placeholder="adres" {...setUser}/> <br/>
                <input type="kod pocztowy" placeholder="kod pocztowy" {...setUser}/> <br/>
                <input type="miasto" placeholder="miasto" {...setUser}/> <br/>
                <input type="submit" value="Zapisz"/> <br/>
            </form>
        </div>
    );
};

export default Register;