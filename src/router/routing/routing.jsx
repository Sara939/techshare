import "./routing.css";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../../components/pages/home";
import Myprofile from "../../components/pages/myprofile/myprofile";
import Channels from "../../components/pages/channels/channels";
import Topchart from "../../components/pages/topchart/top-chart";
import Addchannel from "../../components/pages/addchannel/addchannel";
import Aboutus from "../../components/pages/aboutus/aboutus";
import Login from "../../components/Auth/Login";
import SignUp from "../../components/Auth/Signup";


function Routing() {
  return (
    
        <Routes>
          <Route path="/SignUp" element={<SignUp />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/" element={<Home/>  }/>
            <Route path="/Myprofile" element={<Myprofile/>}/>
            <Route path="/Channels" element={<Channels/>}/>
            <Route path="/Topchart" element={<Topchart/>}/>
            <Route path="/Addchannel" element={<Addchannel/>}/> 
            <Route path="/Aboutus" element={<Aboutus/>}/> 
        </Routes>


    
  );
};

export default Routing;
