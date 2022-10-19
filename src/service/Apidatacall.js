import { useState } from "react";
import BasicVideo from "../components/featurs/CardGuide/BasicVideo";
import CardGuide from "../components/featurs/CardGuide/CardGuide";


function Apidatacall(){
    const [channelapi, setChannelapi]= useState([]);
        const getChannelapi = async ()=> {
            const response= await fetch("https://my-json-server.typicode.com/sara-likaount/apidata/db")
            // .then(response.jso)
            const myjson= await response.json()
            setChannelapi(myjson.api)

        }

    if(api.length <= 0){
        return(
        <>
        <h1>no data</h1>
        <button onClick={getChannelapi}> get data</button>
        </>
        )
    }

    return( <>

        {api.map((item) => {

            return (<><BasicVideo videoname= {item.videoname}/>
            <CardGuide title= {item.title} text={item.text}/></>)
        })}

        </>
    )
}
export default Apidatacall; 