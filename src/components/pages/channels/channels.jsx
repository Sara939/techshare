import "./channels.css";
import React from "react";
import Apidatacall from "../../../service/Apidatacall";
import Deletbutton from "../../featurs/Deletbutton/Deletbutton";
import { useState } from "react";



function Channels() {

const [btnshown, setBtnshown]= useState(true);

const onbtnshown =()=>{
  setBtnshown(true)
};

  return (
    <>
      
      {
        btnshown===false? <Deletbutton onbtnshown={onbtnshown}/> : <button onClick={()=>{setBtnshown(false)}}>press here to open delete window</button>
      }
      <Apidatacall/>
    </>
  );
};

export default Channels;


