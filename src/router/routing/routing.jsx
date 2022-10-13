import "./routing.css";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../../components/pages/home";
import Logsign from "../../components/pages/logsign";
import Myprofile from "../../components/pages/myprofile/myprofile";
import Channels from "../../components/pages/channels/channels";
import Topchart from "../../components/pages/topchart/topchart";
import Addchannel from "../../components/pages/addchannel/addchannel";
import Contact from "../../components/pages/contact/contact"

function Routing() {
  return (
    <div className="routing">
      <Routes>
        <Route path="/" component={<Home/>  }/>
        <Route path="/Logsign" element={<Logsign/>}/> 
       <Route path="/Myprofile" element={<Myprofile/>}/>
        <Route path="/Channels" element={<Channels/>}/>
        <Route path="/Topchart" element={<Topchart/>}/>
        <Route path="/Addchannel" element={<Addchannel/>}/> 
        <Route path="/Contact" element={<Contact/>}/>
     
      </Routes>
      
    </div>
  );
};

export default Routing;
