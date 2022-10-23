import "./Deletbutton.css";
import { DeletVideo } from "../../../service/Apidelet";
import React from "react";
import { useState } from "react";

function Deletbutton(){
    const [id, setId]= useState();
    return (
        <div>
        
        <div><h6>Choose number of video to delete</h6></div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <div>
        <button className="Deletbutton" onClick={DeletVideo({id})}>Delete Video</button>
        </div>
        </div>
    )
}

export default Deletbutton;

