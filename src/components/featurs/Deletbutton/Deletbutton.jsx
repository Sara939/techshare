import "./Deletbutton.css";
import  DeletVideo from "../../../service/Apidelet";
import React from "react";
import { useState } from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';


function Deletbutton(props){
    const [myid, setMyid]= useState('');

    const sendid= (someid)=>{
        console.log("send"+ myid);
        DeletVideo({myid});
        props.onbtnshown();
    };

    return (
        <div className="container deletecontiner">
            <CloseButton onClick={()=>{props.onbtnshown()}}></CloseButton>
            <label className="black-text text-darken-3"> Choose channel's title to delete</label >
            <div className="input-field" >
                <input type="text" onChange={e => setMyid(e.target.value)}/>
            </div>
            <Button onClick={sendid} variant="outline-danger">Delete channel </Button>{' '}
        </div>
    )
}

export default Deletbutton;

