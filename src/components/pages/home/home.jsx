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
        <Imges className={"imges"}
        url={"pexels-helena-lopes-933964.jpg"}
         width={"100%"} height={650}/>
      </div>
    </>
  );
};

export default Home;

