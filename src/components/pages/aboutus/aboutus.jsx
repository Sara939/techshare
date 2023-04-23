import "./aboutus.css";
import React from "react";
import Conectform from "../../featurs/Conectform/Conectform";
import Imges from "../../featurs/imges/imges";


function Aboutus() {
  return (
    <div className="aboutuscontect"> 

      <div className="aboutus px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full">
        
        <h1>ABOUT US</h1>
        <h3>TechShare is a platform for sharing guides<br/>
         and YouTube channels that helps you study,<br/>
          and receive the same.</h3>
          <h4 className="geenlargetext">sharing is caring</h4> 
          <h3>have fun.</h3> 
        
      </div>

      <Imges className={"imges"} url={"conect.jpg"} height={450} width={400}/>
      <Conectform/>

    </div>
  );
};

export default Aboutus;
