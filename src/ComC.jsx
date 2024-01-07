import React, { useContext } from "react";
import {Firstname, Lastname} from './App.js';

const ComC = () =>{
    const fname= useContext(Firstname);
    const lname= useContext(Lastname)
    return(
        <>
             <h1>My name is {fname} {lname}</h1>
        </>
    )
}
export default ComC;