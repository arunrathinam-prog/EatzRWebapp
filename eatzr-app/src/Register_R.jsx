import React, { useState } from "react";
import {Routes, Route, useNavigate,Link} from 'react-router-dom';

export const Register_R = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [Restaurant, setR] = useState('');
    const [Address, setAddr] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <>
            <img src= "/favicon.ico" alt= "Food" height={50} width={50}  />

            <h2>Welcome to EatzR</h2>

            <img src= "/Food3.jpg" alt= "Food" height={200} width={270}  />
            <h2>Register here</h2>

        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />

            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="Email" />

            <label htmlFor="Restaurant's Name">Restaurant</label>
            <input value={Restaurant} onChange={(e) => setR(e.target.value)}type="Restaurant" placeholder="Your Restaurant's Name" id="Restaurant" name="Restaurant" />

            <label htmlFor="Restaurant's Address">Restaurant's Address</label>
            <input value={Address} onChange={(e) => setAddr(e.target.value)}type="Address" placeholder="Your Restaurant's Address" id="Address" name="Address" />

            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Should be more than 6 characters" id="password" name="Password" />

            <button type="submit">Register</button>
        </form>
        </>
       
        <Link to="/Register">Are you a customer? Click here</Link>
    </div>
    )
}