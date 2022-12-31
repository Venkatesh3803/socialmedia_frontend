import React from 'react'
import "./Auth.css"
import { AiFillSkype } from "react-icons/ai";
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { registerUser } from "../../store/authSlice"
import { Link } from 'react-router-dom';

function Auth() {
    const dispatch = useDispatch();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "firstname") {
            setFirstname(e.target.value)
        } else if (e.target.name === "lastname") {
            setLastname(e.target.value)
        } else if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(registerUser({ firstname, lastname, username, password }))
    };
    

    return (
        <div className='Auth'>
            <div className="authLeft">
                <div className="logoName">
                    <AiFillSkype className='icon' />
                    <h2>Social Media.</h2>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="authRight">
                <form className="form" onSubmit={handleSubmit}>
                    <h3>Register</h3>
                    <div className="fristName">
                        <input type="text" placeholder='First Name' name='firstname' onChange={handleChange} value={firstname} />
                        <input type="text" placeholder='Last Name' name='lastname' onChange={handleChange} value={lastname} />
                    </div>
                    <div className="userName">
                        <input type="text" placeholder='user Name' name='username' onChange={handleChange} value={username} />
                    </div>
                    <div className="fristName">
                        <input type="Password" placeholder='Password' name='password' onChange={handleChange} value={password} />
                    </div>
                    <Link to={"/login"} style={{textDecoration :"none"}}>
                        <p >Already an account. LogIn! </p>
                    </Link>

                    <button type="Submit"> SighUp</button>
                </form>
            </div>
        </div>
    );
}




export default Auth


