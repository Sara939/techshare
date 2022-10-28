import './App.css';
// import { useState } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Footer} from './components/featurs/footer/Footer';
import Routing from './router/routing/routing';
import Header from './components/featurs/Header/Header';
import HeaderOut from './components/featurs/Header/Headerout';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './conrext/usercontext';


function App() {

const [user, loading]= useAuthState(auth);


  return (

    
      <Router>
        {!user && (
          // <>
          <HeaderOut/>
          // </>
        )} 
        {user && (
          <Header/>
        )}
        <Routing/> 
        <Footer/>

      </Router>
  );
  
}


export default App;
