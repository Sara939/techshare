import "./addchannel.css";
import React from "react";
import Apidatacall from "../../../service/Apidatacall";
;

function Addchannel() {
  return (
    <div className="add-channel">
      <h1>add-channel</h1>
      <Apidatacall/>
    </div>
  );
};

export default Addchannel;
