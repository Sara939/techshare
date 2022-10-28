import { useState } from "react";
import React from "react";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../../../conrext/usercontext";
// import {useRouter } from 'next/router';

function Login (){

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    // const route= useRouter();
    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(email, password);
        signInWithEmailAndPassword(auth,email,password)
        .then((cred) => {
            console.log( "user logged in",cred.user);
            // route.push('/home')

        })
        .catch((err) =>{
            console.log(err.message);
        })  
    }


    return(
        <div className="container">
                
        <form className="white" onSubmit={handleSubmit}>
            <h5 className="grey-text text-darken-3">Login</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={ e=>{setEmail(e.target.value)}}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={e =>{setPassword(e.target.value)}}/>
            </div>
            <div className="input-field">
                <button className="btn grey lighten-1 z-depth-0">Login</button>
            </div>
        </form>

    </div>
    )
}


export default Login; 