import "./Deletbutton.css";
import { DeletVideo } from "../../../service/Apidelet";
import React from "react";
import { useState } from "react";

function Deletbutton(){
    const [id, setId]= useState();
    return (
        <>
        
        
        <input type="number" value={id} onChange={e => setId(e.target.value)}/>
        <button className="Deletbutton" onClick={DeletVideo({id})}>Delete Video</button>
        
        </>
    )
}

export default Deletbutton;

