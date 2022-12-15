import React from "react";
import {signOut} from 'firebase/auth';
import { auth} from '../../../context/usercontext';


function Header(){
    const handleClickOut= () => {
        signOut(auth)
        .then(() => {
            console.log("the user sign out", auth);
        })
    }

    return(
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">TechShare</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="Aboutus">About Us</a></li>
                        <li><a href="/Channels">Channels</a></li>
                        <li><a href="/Addchannel">Add Channel</a></li>
                        <li><a href="/Topchart">Info Table</a></li>
                        <li><a onClick={handleClickOut}>Sign Out</a></li>
                    </ul>
                </div>
            </nav>
        
        </div>  
    )
}

export default Header;