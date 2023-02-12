import React, { useState } from "react";
import Dropdown from "./Dropdown";
import {Routes, Route,Link} from 'react-router-dom';
import "./App_Login.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { Register_R } from "./Register_R";






  

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [chooseRole, setchooseRole]= useState(true);
  

    

    const handleSubmit = (e) => {
        e.preventDefault();
        <Link to="/Hotel"></Link>
        console.log('You clicked Login');

        
    }

    

    return (
        <div className="auth-form-container">  
            <img src= "/favicon.ico" alt= "Food" height={50} width={50}  />
            <h2>Welcome to EatzR</h2>
            <img src= "/food.jpg" alt= "Food" height={250} width={250}  />
            
            <h2>Login</h2>
            <label htmlFor="Role">Role</label>
            
           <Dropdown />

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                
                    <button  onClick={handleSubmit}><Link to="Hotels" className="text-gray-500 text-lg">Submit</Link></button>
                    
                

                

            </form>

            <h1>

            </h1>

<Link to="/Register">New User?</Link>
           
        </div>
    )
}