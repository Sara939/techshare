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
        <Imges url={"web-design-2906159_1280.jpg"} width={1260} height={420}/>
      </div>

      <div className="headandtext">
        <Headline/>
        <Text/>
      </div>

    
    </div>
  );
};

export default Home;

