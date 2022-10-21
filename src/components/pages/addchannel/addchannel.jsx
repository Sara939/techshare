import "./addchannel.css";
import React from "react";
import { useState } from "react";



function Addchannel() {
  const [title, setTitle]= useState("");
  const [text, setText]= useState("");
  const [videoname, setVideoname]= useState("");
  
  
    const postData = async (e) => {
      // const video= {title, text, videoname};
  
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
        .then(alert("Video ADD"))
        
    }
    catch(err){
        console.log(err);}
    finally{}
  }
  
  
      return(
        <form onSubmit={postData}> 
        <label>
          <p>Video Title</p>
          <input type="text" required  value={title} onChange={e => setTitle(e.target.value)}/>
        </label>
        <label>
          <p>Video Description</p>
          <input type="text" required value={text} onChange={e => setText(e.target.value)}/>
        </label>
        <label>
          <p>Video Url</p>
          <input type="text" required value={videoname} onChange={e => setVideoname(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      )
  }


export default Addchannel;



