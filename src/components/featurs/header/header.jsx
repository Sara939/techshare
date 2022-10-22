import "./header.css";
import React from "react";
import {Link} from "react-router-dom";
import Buttona from "../Button/Buttona";
import Logo from "../Logo/Logo";



const navPages=["MyProfile","Channels","Top Chart", "Add Channel", "Aboutus"]; 

function Header() {
  return (
    <div className="header">
      <Logo size= "200px"/>
      <Link to={"/"}>HOME</Link>
      {
          navPages.map(page=> <Link to={page}><Buttona>{page}</Buttona></Link>)
      }
    </div>
  );
};

export default Header;

