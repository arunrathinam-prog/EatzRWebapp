import React, { useState } from "react";
import {Routes, Route, useNavigate,Link} from 'react-router-dom';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        if (name === '' || email === '' || pass === '') {
            setError(true);


          } else {
            setSubmitted(true);
            setError(false);
          }
          console.log('User Registered');   
    }



    const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
            }}>
            <p>User {name} successfully registered!!</p>
          </div>
        );
      };




      const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
            <p>Please enter all the fields</p>
          </div>
        );
      };



    return (
        <div className="App1 auth-form-container">
            <img src= "/favicon.ico" alt= "Food" height={50} width={50}  />
            <h2>Welcome to EatzR</h2>
            <img src= "/Food1.jpg" alt= "Food" height={250} width={300}  />
            <h2>Register here</h2>

            <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>



        <form className="register-form" onSubmit={handleSubmit}>

            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />

            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="Email" />

            <label htmlFor="number">Mobile Number</label>
            <input value={number} onChange={(e) => setNumber(e.target.value)}type="number" placeholder="+91xxxxxxxxxx" id="number" name="number" />

            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Should be more than 6 characters" id="password" name="Password" />

            
            <button onClick={handleSubmit}>Register</button>

            <button onClick={handleSubmit} className="link-btn" type="submit"></button>
           
        </form>

       

        <Link to="/">Already have an account? Login here.</Link>
        <h1>
        </h1>
        <Link to="/Register_R">Are you a Restaurant Owner? Register here</Link>

    </div>
    )
}