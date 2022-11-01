import React from "react";
import {signOut} from 'firebase/auth';
import { auth} from '../../../context/usercontext';
import Imges from "../imges/imges";


function Header(){


    const handleClickOut= () => {
        signOut(auth)
        .then(() => {
            console.log("the user sign out", auth);
            
        })
    }

    

    return(
        <div className="navbar-fixed">
            {/* <ul id="dropdown1" className="dropdown-content navbar-fixed">
                <li><a href="/Login">Login</a></li>
                <li><a href="/Myprofile">Profile</a></li>
                <li className="divider"></li>
                <li><a href="/SignUp">/SignUp</a></li>
            </ul> */}
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">TechShare</a>
                    <ul className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="Aboutus">About Us</a></li>
                    <li><a href="/Channels">Channels</a></li>
                    <li><a href="/Addchannel">Add Channel</a></li>
                    <li><a href="/Topchart">Info Table</a></li>
                    <li><a href="/Myprofile">Profile <Imges url={auth.picture} width="50rem" height="30rem"/></a>
                    </li>
                    <li><a onClick={handleClickOut}>Sign Out</a></li>
                    
                    {/* <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">namelogo<i className="material-icons right">arrow_drop_down</i></a></li> */}
                    </ul>
                </div>
            </nav>
        
        </div>  
    )
}

export default Header;