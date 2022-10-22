import "./addchannel.css";
import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";



function Addchannel() {
  const [title, setTitle]= useState("");
  const [text, setText]= useState("");
  const [videoname, setVideoname]= useState("");
  
  
    const postData = async (e) => {
      // const video= {title, text, videoname};
  
      // e.preventDefault();
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
      }
      catch(err){
        console.log(err);}
      finally{}
    
    }

      return(
        <form onSubmit={postData}> 

          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label>Video Title</Form.Label>
            <Form.Control placeholder="Enter Video Title" type="text" required  value={title} onChange={e => setTitle(e.target.value)}/>       
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label>Video Description</Form.Label>
            <Form.Control placeholder="Enter Video Description" type="text" required  value={text} onChange={e => setText(e.target.value)}/>       
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label>Video Url</Form.Label>
            <Form.Control placeholder="Enter Video Url" type="text" required  value={videoname} onChange={e => setVideoname(e.target.value)}/>       
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I Checked that Url link writen corectly" required/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
      </form>
      )
      // if (res => 200) {
      //   return (
      //     <>
          
      //       <div className="text-2xl">Thank you!</div>
      //       <div className="text-md">Go to Channels to see the Video add</div>
      //       <Link to={"/Channels"}>CHANNELS</Link>
      //     </>
      //   );
      // }
  }


export default Addchannel;



