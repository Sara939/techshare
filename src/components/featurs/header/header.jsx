import "./header.css";
import React from "react";
import {Link} from "react-router-dom";


const navPages=["Logsign","Myprofile","Channels","Topchart", "Addchannel", "Contact"]; 

function Header() {
  return (
    <div className="header">
      <Link to={"/"}>Home</Link>
      {
          navPages.map(page=> {<Link to={page}>{page}</Link>})
      }

    </div>
  );
};

export default Header;
