import { Component } from "react";
import React from "react";
import { initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAnGpzWt4jVRDlhsGq_rzaS6Mq7_txJRT4",
    authDomain: "techshare-2bcb6.firebaseapp.com",
    projectId: "techshare-2bcb6",
    storageBucket: "techshare-2bcb6.appspot.com",
    messagingSenderId: "394302627029",
    appId: "1:394302627029:web:7856330db73793c0bad65c",
    measurementId: "G-HDBG84FGLL"
  };
   
  initializeApp(firebaseConfig);

const auth= getAuth();

class SignUp extends Component{
    state= {
        email: '',
        password:'',
        firstName:'',
        lastName: ''
    }
    handleChange= (e) =>{
        this.setState({
        [e.target.id] : e.target.value

        })
    }
    handleSubmit= (e)=>{
        e.preventDefault();
        console.log(this.state);
        createUserWithEmailAndPassword(auth,this.state.email,this.state.password,this.state.firstName,this.state.lastName)
        .then((cred) => {
            console.log( "user created",cred.user);

        })
        .catch((err) =>{
            console.log(err.message);
        })  
    }


    render(){
        return(
            <div className="container">
                
                <form className="white" id="signupform" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div> 
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn grey lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>

        )



    }
}

export default SignUp; 