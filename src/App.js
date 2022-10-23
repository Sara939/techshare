import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Footer} from './components/featurs/Footer/Footer';
import Routing from './router/routing/routing';
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
