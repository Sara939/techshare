import "./home.css";
import React from "react";
import Headline from "../../featurs/headline/headline";
import Imges from "../../featurs/imges/imges"
import Text from "../../featurs/text/text";
import Largebutton from "../../featurs/Button/Largebutton";

function Home() {
  return (
    <div >

      <div>
        <Imges url={"yougotthis.webp"} width={430} />
        <Imges url={"computers.jpeg"} width={470} />
        <Imges url={"home.avif"} width={500} />
        
      </div>

      <div className="headandtext">
      <Headline/>
      <Text/>
      <Largebutton/>
      </div>
      <div>
        <Imges url={"yougotthis.webp"} width={430} />
        <Imges url={"computers.jpeg"} width={470} />
        <Imges url={"home.avif"} width={500} />
      </div>

     
      
    </div>
  );
};

export default Home;

