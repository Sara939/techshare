import { useState } from "react";
import React from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../../conrext/usercontext";


function SignUp(){

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]= useState("");
    const [picture, setPicture]= useState("");


    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(email,password,firstName,lastName,picture);
        createUserWithEmailAndPassword(auth,email,password,firstName,lastName,picture)
        .then((cred) => {
            console.log( "user created",cred.user);

        })
        .catch((err) =>{
            console.log(err.message);
        })  
    }


        return(
            <div className="container">
                
                <form className="white" id="signupform" onSubmit={handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={ e=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={e =>{setPassword(e.target.value)}}/>
                    </div> 
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" value={firstName} onChange={e =>{setFirstName(e.target.value)}}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" value={lastName} onChange={e =>{setLastName(e.target.value)}}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="picture">Picture</label>
                        <input type="text" value={picture} onChange={e =>{setPicture(e.target.value)}}/>
                    </div>

                    <div className="input-field">
                        <button className="btn grey lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>

        )

}

export default SignUp; 