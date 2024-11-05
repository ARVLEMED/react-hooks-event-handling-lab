import React from "react";
import { useState } from "react";


function Keypad (){
    const[password, setPassword]= useState('1234')
    function handleChange(event){
        console.log('Entering password...');
        setPassword(event.target.value);
    };
    return (
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <input 
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
            />
        </div>
    )
}

export default Keypad;