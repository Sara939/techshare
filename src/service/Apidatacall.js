import { useEffect, useState } from "react";
import BasicVideo from "../components/featurs/CardGuide/BasicVideo";
import CardGuide from "../components/featurs/CardGuide/CardGuide";
import { Stack } from "react-bootstrap";


function Apidatacall(){

    const [api, setApi] = useState([])

    const getData = async () => {
        
        const response = await fetch("http://localhost:3001/Api")
        const json = await response.json()
        setApi(json)
    }

    useEffect(() => {
        getData()
    }, [])

    if (api.length <= 0){
        return <h1>There is No Videos to Show</h1>
     
    }

    return <div className="data">
        <Stack direction="horizontal" gap={5}>
        {api.map((item) => {
            return <div>
               <BasicVideo videoname= {item.videoname}/>
                <CardGuide title= {item.title} text={item.text} id={item.id}/>
            </div>
        })}
        </Stack>
    </div>
}

export default Apidatacall; 
// json-server db.json -p 3001