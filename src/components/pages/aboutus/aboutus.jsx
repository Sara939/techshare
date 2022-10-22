import "./aboutus.css";
import React from "react";
import Conectform from "../../featurs/Conectform/Conectform";


function Aboutus() {
  return (
    <div className="aboutus"> 

      <div>
        <h2>ABOUT US</h2>
        <h3>TechShare is a platform for sharing guides<br/>
         and YouTube channels that helps you study,<br/>
          and receive the same.
          <h2>sharing is caring</h2> 
          have fun. </h3>
      </div>
      <Conectform/>

    </div>
  );
};

export default Aboutus;
