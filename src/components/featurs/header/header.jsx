import "./header.css";
import React from "react";
import {Link} from "react-router-dom";


const navPages=["Logsign","Myprofile","Channels","Topchart", "Addchannel", "Contact"]; 

function Header() {
  return (
    <div className="header">
      <Link to={"/"}><button>Home</button></Link>
      {
          navPages.map(page=> <Link to={page}><button>{page}</button></Link>)
      }

    </div>
  );
};

export default Header;
