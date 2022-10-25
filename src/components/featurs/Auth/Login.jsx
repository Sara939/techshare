import { Component } from "react";
import React from "react";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "./Signup";

class Login extends Component{
    state= {
        email: '',
        password:''


    }
    handleChange= (e) =>{
        this.setState({
        [e.target.id] : e.target.value

        })
    }
    handleSubmit= (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,this.state.email,this.state.password)
        .then((cred) => {
            console.log( "user logged in",cred.user);

        })
        .catch((err) =>{
            console.log(err.message);
        })  
    }


    render(){
        return(
            <div className="container">
                
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Login</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn grey lighten-1 z-depth-0">Login</button>
                    </div>
                </form>

            </div>

        )



    }
}

export default Login; 