import axios from "axios";
import { useEffect } from "react";
import {createContext, useState} from "react";
// import {data} from "autoprefixer";

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
  const [ready,setReady] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    if(!user){
        axios.get('/profile').then(({data}) =>{
            setUser(data)
            setReady(true);
        })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <UserContext.Provider value={{user,setUser, ready}}>
      {children}
    </UserContext.Provider>
  );
}