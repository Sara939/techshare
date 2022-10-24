import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Footer} from './components/featurs/Footer/Footer';
import Routing from './router/routing/routing';
import Header from './components/featurs/Header/Header';
import HeaderOut from './components/featurs/Header/Headerout';



function App() {

  // const Toogle= ()=>{
  //   if()
  // }

  return (

      <Router>

        <Header/>
        {/* <HeaderOut/> */}
        <Routing/> 
        <Footer/>
      </Router>

  );
  
}


export default App;
