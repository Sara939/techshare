import "./Deletbutton.css";
import  DeletVideo from "../../../service/Apidelet";
import React from "react";
import { useState } from "react";

function Deletbutton(){
    const [myid, setMyid]= useState('');

    const sendid= (someid)=>{
        console.log("send"+ myid);
        DeletVideo({myid});
    };

    return (
        <div className="frame">
            <div className="input" ><h6>Choose number of video to delete</h6></div>
                <input className="Deletinput" type="number" onChange={e => setMyid(e.target.value)}/>
            <div>
                <button className="Deletbutton" onClick={sendid}>Delete Video</button>
            </div>
        </div>
    )
}

export default Deletbutton;

