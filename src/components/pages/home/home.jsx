import "./home.css";
import React from "react";
import Headline from "../../featurs/headline/headline";
import Imges from "../../featurs/imges/imges"
import Text from "../../featurs/text/text";
import CurrentDate from "../../featurs/CurrentDate/CurrentDate";

function Home() {

  return (
    <>
      <Imges className={"imges"} url={"web-design-2906159_1280.jpg"} width={1260} height={410}/>
      
      <div className="headandtext">
        <CurrentDate/>
        <Headline/>
        <Text/>      
      </div>
    </>
  );
};

export default Home;

