import React, {useState} from "react";
import "./App.css";

function Dropdown()

{

    
    const [selects, setSelects]=useState();
    return (

        <div>
            
            <p>{selects}</p>
            <select value={selects} onChange={e=>setSelects(e.target.value)}>
           <option>Choose Role</option>
               <option>User</option>
               <option>Restaurant Owner</option>
            </select>
        </div>
      );
};
export default Dropdown;