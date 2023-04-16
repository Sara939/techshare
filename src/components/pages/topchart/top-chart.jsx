import "./topchart.css";
import React from "react";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import Deletbutton from "../../featurs/Deletbutton/Deletbutton";
import Button from 'react-bootstrap/Button';

function Topchart() { 

  const [btnshown, setBtnshown]= useState(true);
  const [loadingapi, setLoadingapi] = useState(true);
  const [api, setApi] = useState([]);

  const getData = async () => {      
    const response = await fetch("http://localhost:5000/Channels")
    const json = await response.json()
    setApi(json)
    setLoadingapi(false)  
  }

   useEffect(() => {
        getData()
  }, [])


  const onbtnshown =()=>{
    setBtnshown(true)
  };



  return (
  <>
        {
        btnshown===false? <Deletbutton onbtnshown={onbtnshown}/> : (
          <Button className="deletechanales" onClick={()=>{setBtnshown(false)}} variant="secondary" size="xlg">Press to Delete Channale</Button>
        )
      }   

      { 
      loadingapi ? (<img alt="" style={{ marginLeft: "30%"}} src="loading.gif"></img> ) : (
      <Table striped bordered hover variant="dark">
          <thead><tr><th>ID</th><th>CHANNEL TITLE</th><th>CHANNEL DESCRIPTION</th><th>DATE ADDED</th></tr></thead>
          <tbody>
          {api.map((item) => {
            return <tr>
              <td>{item.id}</td><td>{item.title}</td><td>{item.text}</td><td>{item.date}</td>
            </tr>
          })}
            </tbody>
      </Table>
            )
            }
    </>)
 }       

export default Topchart;
