import "./home.css";
import React from "react";
import Headline from "../../featurs/headline/headline";
import Imges from "../../featurs/imges/imges"
import Text from "../../featurs/text/text";
import CurrentDate from "../../featurs/CurrentDate/CurrentDate";

function Home() {

  return (
    <>
      
      
      <div className="headandtext">
        <CurrentDate/>
        <Headline/>
        <Text/>  
        <Imges className={"imges"} url={"home.png"} width={390} height={450}/>
        <Imges className={"imges"} url={"home2.png"} width={390} height={450}/>
        <Imges className={"imges"} url={"home3.png"} width={390} height={450}/>
      </div>
    </>
  );
};

export default Home;

