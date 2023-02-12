import React from 'react';
import Hotels from './pages/Hotels'
import Orders from './pages/Orders'

import './App.css'
import { Login } from "./Login";
import { Register } from "./Register";
import { Register_R} from "./Register_R";
import {BrowserRouter as Router, Route,Routes,Switch, useNavigat} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App  bg-white">

      <Routes>
        <Route path="Hotels" element={<Hotels/>}/>
        <Route path="order/:id" element={<Orders/>}/>

        <Route path="/" element={<Login/>} />
  <Route path="Register_R" element={<Register_R/>} />
  <Route path ="Register" element={<Register/>} />
  </Routes>
        
      </div>
    </Router>
  );
}

export default App;
