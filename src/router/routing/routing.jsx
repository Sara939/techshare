import "./routing.css";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home,Logsign,Myprofile,Channels,Topchart,Addchannel,Contact} from "../component/pages";

function Routing() {
  return (
    <div className="routing">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Logsign" element={<Logsign/>}/>
        <Route path="Myprofile" element={<Myprofile/>}/>
        <Route path="Channels" element={<Channels/>}/>
        <Route path="Topchart" element={<Topchart/>}/>
        <Route path="Addchannel" element={<Addchannel/>}/>
        <Route path="Contact" element={<Contact/>}/>
     
      </Routes>
      
    </div>
  );
};

export default Routing;
