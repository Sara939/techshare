import './App.css';
import {
  BrowserRouter as Router} from "react-router-dom";
import Header from './components/featurs/header/header';
import Footer from './components/featurs/footer/footer';
import Routing from './router/routing/routing';

function App() {
  return (
    <Router>
    <Header/>
    <Routing/>
    <Footer/>
    </Router>
  );
  
}

export default App;
