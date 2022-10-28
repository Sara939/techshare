// import React from "react";
import { createContext} from "react";
import { initializeApp} from 'firebase/app';
import { getAuth} from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAnGpzWt4jVRDlhsGq_rzaS6Mq7_txJRT4",
    authDomain: "techshare-2bcb6.firebaseapp.com",
    projectId: "techshare-2bcb6",
    storageBucket: "techshare-2bcb6.appspot.com",
    messagingSenderId: "394302627029",
    appId: "1:394302627029:web:7856330db73793c0bad65c",
    measurementId: "G-HDBG84FGLL"
  };

  initializeApp(firebaseConfig);

export const auth= getAuth();

// export function UserProvider({Children}){

// const [user, setUser]= useState({email,password,firstName,lastName});

//   return(
//       <UserContext.Provider value={{user}}>
//           {Children}
//       </UserContext.Provider>
//   );
// }


const UserContext = createContext();

export default UserContext;

