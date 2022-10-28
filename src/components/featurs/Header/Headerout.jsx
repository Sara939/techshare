import React from "react";

function HeaderOut(){

 
    return(
        <div className="navbar-fixed">
            <ul id="dropdown1" className="dropdown-content navbar-fixed">
                
                {/* <li><a href="/Myprofile">Profile</a></li> */}
                {/* <li class="divider"></li> */}
                
            </ul>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">TechShare</a>
                    <ul className="right hide-on-med-and-down">
                    <li><a href="/Login">Login</a></li>
                    <li><a href="/SignUp">SignUp</a></li>
                    {/* <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">namelogo<i className="material-icons right">arrow_drop_down</i></a></li> */}
                    </ul>
                </div>
            </nav>
        
        </div>  
    )
}

export default HeaderOut;