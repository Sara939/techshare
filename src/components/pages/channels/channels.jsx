import "./channels.css";
import React from "react";
import Apidatacall from "../../../service/Apidatacall";
// import Deletbutton from "../../featurs/Deletbutton/Deletbutton";
// import { useState } from "react";
// import Button from 'react-bootstrap/Button';



function Channels() {

// const [btnshown, setBtnshown]= useState(true);

// const onbtnshown =()=>{
//   setBtnshown(true)
// };

  return (
    <>
      <Apidatacall/>
      {/* {
        btnshown===false? <Deletbutton onbtnshown={onbtnshown}/> : (
          <Button className="deletechanales" onClick={()=>{setBtnshown(false)}} variant="secondary" size="xlg">Press to Delete Channale</Button>
        )
      }       */}
    </>
  );
};

export default Channels;


