import "./addchannel.css";
import React from "react";
import { useState } from "react";
import {VideoProvidor} from "../../../context/Videocontext";
import {VideoContext} from "../../../context/Videocontext"; 



function Addchannel() {

  const [title, setTitle]= useState("");
  const [text, setText]= useState("");
  const [videoname, setVideoname]= useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    const Video= {
      title,
      text,
      videoname
    }

    }
  
  return (
    <VideoProvidor value={InitialStateVideo}>
    <div className="add-channel">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Video Title</p>
          <input type="text" required value={title} onChange={e => setTitle(e.target.value)}/>
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
      
    </div>
    </VideoProvidor>
  );
};

export default Addchannel;
