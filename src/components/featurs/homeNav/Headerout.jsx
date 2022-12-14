import React from "react";

function HeaderOut(){

 
    return(
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">TechShare</a>
                    <ul className="right hide-on-med-and-down">
                    <li><a href="/Login">Login</a></li>
                    <li><a href="/SignUp">SignUp</a></li>
                    </ul>
                </div>
            </nav>
        
        </div>  
    )
}

export default HeaderOut;