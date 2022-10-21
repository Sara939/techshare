import "./topchart.css";
import React from "react";
import Table from 'react-bootstrap/Table';
import getData from "../../../service/Apidatacall"
// import { useState } from "react";

function Topchart() {
  // const [api, setApi] = useState()


  
  
  return (
    
      getData()
      .then((api)=>{
      <Table striped bordered hover variant="dark">
        <thead><tr>Id</tr><tr>Channal Title</tr><tr>Channal Description</tr></thead>
        <tbody>
          <tr><td>{api.id}</td><td>{api.title}</td><td>{api.text}</td></tr>
          </tbody>
      </Table>}
      ))



      }        
export default Topchart;

