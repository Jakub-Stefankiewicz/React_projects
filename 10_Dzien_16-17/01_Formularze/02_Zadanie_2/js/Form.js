import React, {useState} from 'react';
import FakeAPI from "./data/fakeAPI";

const Form = () => {

    const [user, setUSer] = useState({
        user: " ",
        password: " "
    });
    const [verification, setVerification]=useState({
        sent:false,
        verified:false,
        user: {}
    });

    const handleSubmit = (e) => {
        FakeAPI.login({
            username: user.user,
            password: user.password
        }).then(user => {
            // return user;
            setVerification(verification.user=user);
            console.log(user);
        }).catch(err => {
            setVerification(verification.user=err);
            // return err;
            console.log(err);
        });
        e.preventDefault();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUSer((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const verifyLogin = (login) => {
        if (login.length < 3) {
            return "Login za krótki, musi mieć więcej niż 2 znaki"
        }
    }

    const verifyPassword = (password) => {
        if (password.length < 5) {
            return "Hasło za krótkie, musi mieć więcej niż 5 znaków"
        }
    }

    return (
        <div>
            <form onClick={handleSubmit}>
                Login:
                <input type="text" name="user" value={user.user} onChange={handleChange}/>
                Hasło:
                <input type="text" name="password" value={user.password} onChange={handleChange}/>
                <input type="submit" value="Wyślij"/>
            </form>
            <p style={{color: "red"}}>{verifyLogin(user.user)}</p>
            <p style={{color: "red"}}>{verifyPassword(user.password)}</p>
            <h1>{typeof verification.user==="object" ? "jest dobrze" : "jest źle"}</h1>
        </div>
    );
};

export default Form;