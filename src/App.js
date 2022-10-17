import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
// import Header from './components/featurs/header/header';
import {Footer} from './components/featurs/footer/footer';
import Routing from './router/routing/routing';
import { useState } from "react";
import { Button } from 'react-bootstrap';
import Navheader from './components/featurs/Navheader/Navheader';


function App() {

  return (
     
    <Router>
    <Navheader/>
    <Routing/> 
    <Footer/>
    </Router>
 
  );
  
}


export default App;
