import "./channels.css";
import React from "react";
import CardGuide from "../../featurs/CardGuide/CardGuide";
import BasicVideo from "../../featurs/CardGuide/BasicVideo";
import { Stack } from "react-bootstrap";
import Apidatacall from "../../../service/Apidatacall";
import Deletbutton from "../../featurs/Deletbutton/Deletbutton";





function Channels() {
  
  return (
    <>
    
 
    <Stack direction="horizontal" gap={5}>
    <h1>Recomended by admin</h1>
      <div>
      <BasicVideo videoname="https://www.youtube.com/embed/j942wKiXFu8"/>
      <CardGuide title="The Net Ninja " text="Black-belt your web development skills. Over 1000 free programming tutorials about:
        - Modern JavaScript (beginner to advanced)- Node.js- React- Vue.js- Firebase- MongoDB- HTML & CSS- PHP & MySQL- Laravel- React Native- Flutter"/>
      </div>
      <div>
      <BasicVideo videoname="https://www.youtube.com/embed/rK_pzZTnb-I"/>
      <CardGuide title="עופר שלי, מאנקיס" text="בערוץ תמצאו מידע והסבר על השפות /ספריות הבאות
        REACT JS, NODEJS , HTML 5 , CSS 3 ,BOOTSTRAP , WORDPRESS ..." />
      </div>
      <div>
      <BasicVideo videoname="https://www.youtube.com/embed/w7ejDZ8SWv8"/>
      <CardGuide title="Traversy Media " text="Traversy Media features the best online web development and programming tutorials for all of the latest web technologies from the building blocks of HTML, CSS & JavaScript to frontend frameworks like React and Vue to backend technologies like Node.js, Python and PHP"/>
      </div>
      </Stack>
    <h1>Users Recomndation</h1>
      <Stack direction="horizontal" gap={5}>
        <Apidatacall/>
        <Deletbutton/>
      </Stack>

 
    </>

  );
};

export default Channels;


