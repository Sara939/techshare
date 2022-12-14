import "./routing.css";
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../../components/pages/home";
import Channels from "../../components/pages/channels/channels";
import Topchart from "../../components/pages/topchart/top-chart";
import Addchannel from "../../components/pages/addchannel/addchannel";
import Aboutus from "../../components/pages/aboutus/aboutus";
import Login from "../../components/featurs/Auth/Login";
import SignUp from "../../components/featurs/Auth/Signup";



function Routing() {
  return (

        <Routes>
          <Route path="/SignUp" element={<SignUp />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/" element={<Home/>  }/>
            <Route path="/Channels" element={<Channels/>}/>
            <Route path="/Topchart" element={<Topchart/>}/>
            <Route path="/Addchannel" element={<Addchannel/>}/> 
            <Route path="/Aboutus" element={<Aboutus/>}/> 
        </Routes>

    
  );
};

export default Routing;
