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

        
    useEffect(() => {
    const getData = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/Channels`)
        const json = await response.json()
        setApi(json)};

        getData();
        
    })

    if (api.length <= 0){
        return <img alt="" style={{ marginLeft: "30%"}} src="loading.gif"></img>
    }
    const filteredData= api.filter(item=>{return item.category.toLowerCase().includes(sub)})

    
    return ( 
        <>
            <Filter onselectionHendler={onselectionHendler}/>
            <Stack direction="horizontal" gap={5}> 
                {api.length>0 && filteredData.map((item) => (
                <div>    
                    <BasicVideo videoname= {item.videoname} />
                    <CardGuide category= {item.category} date= {item.date} title= {item.title} text={item.text} id={item._id} key={item._id}/>
                </div>
                ))
                }
            </Stack>
        </>
)};

export default Apidatacall; 
