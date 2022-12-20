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
        <div>
        
        <div><h6>Choose number of video to delete</h6></div>
        <input type="number" onChange={e => setMyid(e.target.value)}/>
        <div>
        <button className="Deletbutton" onClick={sendid}>Delete Video</button>
        </div>
        </div>
    )
}

export default Deletbutton;

