import './App.css';

import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/featurs/footer/footer.jsx";
import Routing from './router/routing/routing';
import { auth, UserContext} from './context/usercontext';
import { HomeNav } from './components/featurs/homeNav/HomeNav';
import {useAuthState} from "react-firebase-hooks/auth";
import Imges from './components/featurs/imges/imges';



function App() {

  const [user, loading]= useAuthState(auth);
 
  return (

    <UserContext.Provider value={{user}}>
      <Router basename={" "}>
        {loading ? <Imges className={"imges"} url={"loading.gif"} height={20} width={100}/>: <HomeNav/>}
        <Routing/> 
        <Footer/>
      </Router>
    </UserContext.Provider>

  );
  
}


export default App;
