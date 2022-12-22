import { useEffect, useState } from "react";
import BasicVideo from "../components/featurs/CardGuide/BasicVideo";
import CardGuide from "../components/featurs/CardGuide/CardGuide";
import { Stack } from "react-bootstrap";
import Filter from "../components/featurs/Filter/Filter";


function Apidatacall(){
    const [sub, setSub]= useState("");
    const [api, setApi] = useState([]);


    const onselectionHendler=(datafromfilter)=>{
        setSub(datafromfilter);
    };

    const getData = async () => {
        const response = await fetch("http://localhost:3001/Api")
        const json = await response.json()
        setApi(json)
    };

    useEffect(() => {
        getData()
    }, [])

    if (api.length <= 0){
        return <h1>There is No Videos to Show</h1>
    }
    const filteredData= api.filter(item=>{return item.category.toLowerCase().includes(sub)})

    
    return ( 
        <>
            <Filter onselectionHendler={onselectionHendler}/>
            <Stack direction="horizontal" gap={5}>   
                {filteredData.map((item) => {
                    return <div>    
                        <BasicVideo videoname= {item.videoname} />
                        <CardGuide category= {item.category} title= {item.title} text={item.text} id={item.id}/>
                    </div> })}
            </Stack>
        </>
)};

export default Apidatacall; 
// json-server db.json -p 3001