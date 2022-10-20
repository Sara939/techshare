import React, { createContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { useReducer } from "react";


const InitialStateVideo = {  //סטייט התחלתי
    videoname: "",
    title:"",
    text: ""
}


const VideoContext= createContext(InitialStateVideo); ///יצירת הקונטקסט

export const VideoProvidor= VideoProvidor.Provider;
export const VideoConsumer= VideoProvidor.Consumer;

export default VideoContext;