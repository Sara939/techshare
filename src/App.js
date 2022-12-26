import './App.css';

import {BrowserRouter as Router} from "react-router-dom";
import {Footer} from './components/featurs/footer/Footer';
import Routing from './router/routing/routing';
import { auth, UserContext} from './context/usercontext';
import { HomeNav } from './components/featurs/homeNav/HomeNav';
import {useAuthState} from "react-firebase-hooks/auth";



function App() {

  const [user, loading]= useAuthState(auth);

  return (

    <UserContext.Provider value={{user}}>
      <Router>
        <HomeNav/>
        <Routing/> 
        <Footer/>
      </Router>
    </UserContext.Provider>

  );
  
}


export default App;
