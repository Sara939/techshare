import "./routing.css";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../../components/pages/home";
import Myprofile from "../../components/pages/myprofile/myprofile";
import Channels from "../../components/pages/channels/channels";
import Topchart from "../../components/pages/topchart/top-chart";
import Addchannel from "../../components/pages/addchannel/addchannel";
import Contact from "../../components/pages/contact/contact";


function Routing() {
  return (
    
        <Routes>
            <Route path="/" element={<Home/>  }/>
            <Route path="/Myprofile" element={<Myprofile/>}/>
            <Route path="/Channels" element={<Channels/>}/>
            <Route path="/Topchart" element={<Topchart/>}/>
            <Route path="/Addchannel" element={<Addchannel/>}/> 
            <Route path="/Contact" element={<Contact/>}/> 
        </Routes>


    
  );
};

export default Routing;
