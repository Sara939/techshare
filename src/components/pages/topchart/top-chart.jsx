import "./topchart.css";
import React from "react";
import Table from 'react-bootstrap/Table';
import getData from "../../../service/Apidatacall"
import { useState, useEffect } from "react";

function Topchart() { 
  
  const [loadingapi, setLoadingapi] = useState(true);

  const [api, setApi] = useState([]);

  const getData = async () => {
        
    const response = await fetch("http://localhost:3001/Api")
    const json = await response.json()
    setApi(json)
    setLoadingapi(false)  
}

   useEffect(() => {
        getData()
        
    }, [])

  return (
  <>
     
      { loadingapi ? (<p>Loading Please wait...</p> ) : (
      <Table striped bordered hover variant="dark">
          <thead><tr><th>ID</th><th>CHANNEL TITLE</th><th>CHANNEL DESCRIPTION</th></tr></thead>
          <tbody>
          {api.map((item) => {
            return <tr>
              <td>{item.id}</td><td>{item.title}</td><td>{item.text}</td>
            </tr>
          })}
            </tbody>
      </Table>
            )
            }
    </>)
 }       

export default Topchart;
