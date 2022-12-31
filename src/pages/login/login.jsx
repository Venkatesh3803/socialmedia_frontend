import React from 'react'
import "./Login.css"
import { AiFillSkype } from "react-icons/ai";
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { loginUser } from "../../store/authSlice"
import { Link } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleChange = (e) => {
     if(e.target.name === "username"){
        setUsername(e.target.value)
     }else if(e.target.name === "password"){
        setPassword(e.target.value)
     }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({username, password}))
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
                    <h3> Log In</h3>
                    <div className="userName">
                        <input type="text" placeholder='user Name' name='username' onChange={handleChange} value={username} />
                    </div>
                    <div className="fristName">
                        <input type="Password" placeholder='Password' name='password' onChange={handleChange} value={password} />
                    </div>
                    <Link to={"../auth"} style={{textDecoration :"none"}}>
                        <p >Don't have an account? Signup</p>
                    </Link>
                    <button type="Submit"> Log In</button>
                </form>
            </div>
        </div>
    );
}




export default Login


