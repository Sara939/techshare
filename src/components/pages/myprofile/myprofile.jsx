import "./myprofile.css";
import React from "react";
import {useContext} from 'react';
import {UserContext, Userextradata} from '../../../context/usercontext';


function Myprofile() {

  const {user} =useContext(UserContext);

  const {firstName,lastName,picture} = useContext(Userextradata);

  return (
    <div className="my-profile">
      {/* <h1>{user.email}</h1> */}
      {/* <h1>Sign in from: {user.metadata.creationTime}</h1> */}
      {console.log({firstName})}

      
    </div>
  );
};

export default Myprofile;
