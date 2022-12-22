import "./Deletbutton.css";
import  DeletVideo from "../../../service/Apidelet";
import React from "react";
import { useState } from "react";

function Deletbutton(props){
    const [myid, setMyid]= useState('');

    const sendid= (someid)=>{
        console.log("send"+ myid);
        DeletVideo({myid});
        props.onbtnshown();
    };

    return (
        <div className="frame">
            <button onClick={()=>{props.onbtnshown()}}>X Close</button>
            <div className="input" ><h6>Choose number of video to delete</h6></div>
                <input className="Deletinput" type="number" onChange={e => setMyid(e.target.value)}/>
            <div>
                <button className="Deletbutton" onClick={sendid}>Delete Video</button>
            </div>
        </div>
    )
}

export default Deletbutton;

