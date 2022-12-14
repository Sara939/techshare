import "./home.css";
import React from "react";
import Headline from "../../featurs/headline/headline";
import Imges from "../../featurs/imges/imges"
import Text from "../../featurs/text/text";

function Home() {
  return (
    <div >

      <Imges className={"imges"} url={"web-design-2906159_1280.jpg"} width={1260} height={420}/>
      {/* <Date date= {new Date("22-2-2022")}/> */}

      <div className="headandtext">
        
        <Headline/>
        <Text/>
      </div>

    
    </div>
  );
};

export default Home;

