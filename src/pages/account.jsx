// import Header from '../Header'
import {useContext} from "react";
import {UserContext} from "../user.jsx"
import {Navigate} from "react-router-dom"

export default function account(){
// eslint-disable-next-line react-hooks/rules-of-hooks
const {ready, user} = useContext(UserContext)
if(ready && !user){
return <Navigate to={'/login'}/>
}
    return(
       <>
   
         <div className =" text-center p-4"> account page for {user?.name} </div>
       </>
    )
   }