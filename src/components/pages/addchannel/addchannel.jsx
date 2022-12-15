import "./addchannel.css";
import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

// json-server db.json -p 3001 --- server start commend

function Addchannel() {
  const navigate = useNavigate();
  const [title, setTitle]= useState("");
  const [text, setText]= useState("");
  const [videoname, setVideoname]= useState("");
  
  
    const postData = async (e) => {
  
      e.preventDefault();
      try{
         await fetch('http://localhost:3001/Api', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "title": title,
          "text": text,
          "videoname" :videoname})
        })
        .then(res => res.json())
        .then(alert("Video ADD! Go to ==> Chanells to check it out"))
        .then(navigate("/Channels"));
        
        
      }
      catch(err){
        console.log(err);}
      finally{}
    
    }

      return(
        <form onSubmit={postData} className="add"> 
        <h1 className="addlabel">ADD YOUR BEST CHANNEL RECCOMNDATION</h1>

          <Form.Group className="mb-4" >
            <Form.Label className="addlabel">Video Title</Form.Label>
            <Form.Control placeholder="Enter Video Title" type="text" required  value={title} onChange={e => setTitle(e.target.value)}/>       
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="addlabel">Video Description</Form.Label>
            <Form.Control placeholder="Enter Video Description" type="text" required  value={text} onChange={e => setText(e.target.value)}/>       
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="addlabel">Video Url</Form.Label>
            <Form.Control placeholder="Enter Video Url" type="text" required  value={videoname} onChange={e => setVideoname(e.target.value)}/>       
          </Form.Group>
          
          <button className="btn grey lighten-1 z-depth-0" type="submit">Submit</button>
            
      </form>
      )
  }


export default Addchannel;



