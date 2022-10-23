import { Component } from "react";
import React from "react";

class Signin extends Component{
    state= {


    }
    handleChange= (e) =>{
        console.log(e);
    }
    handleSubmit= (e)=>{
        console.log(e);
    }


    render(){
        return(
            <div className="container">
                <Form
                <Form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn.blue.lighten-1 z-depth-0">Login</button>
                    </div>
                </Form>
                

            </div>

        )



    }
}

export default Signin; 