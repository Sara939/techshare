import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Footer} from './components/featurs/footer/Footer';
import Routing from './router/routing/routing';
import Header from './components/featurs/Header/Header';
import HeaderOut from './components/featurs/Header/Headerout';
import { auth } from './components/featurs/Auth/Signup';



function App() {

  return (

      <Router>
        <HeaderOut/> 
        <Routing/> 
        <Footer/>
      </Router>

  );
  
}


export default App;
