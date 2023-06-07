import {Link, Navigate} from "react-router-dom"
import {useState, useContext} from "react"
import axios from "axios";
import {UserContext} from "../user.jsx"
export default function login(){
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [email, setEmail] = useState('');

     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [password, setPassword] = useState('')

     // eslint-disable-next-line react-hooks/rules-of-hooks
     const[redirect, setRedirect] = useState('')

     // eslint-disable-next-line react-hooks/rules-of-hooks
    const {setUser} = useContext(UserContext)
     
    
     async function handleLogin(ev){
        ev.preventDefault();
        try{
            const data = await axios.post( '/login', {email, password})
            setUser(data)
            
            alert("login successful")
            
            setRedirect(true)

        } catch(e){
            alert("login failed")
        }

     }
     if(redirect){
        return <Navigate to ='/'/>
     }
     /*if(redirect){

        return <Navigate to ='/'></Navigate>
        
     }*/

     
    return(
        <div className = "mt-4 grow flex items-center justify-around">
            <div className="mb-80 ">
            <h1 className="text-4xl text-center">Login</h1>
            <form className="max-w-md mx-auto"
                onSubmit={handleLogin}>
                <input type = "email" placeholder ="Type your email" 
                value ={email} onChange = {ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder ="Type your password"
                value ={password} onChange = {ev => setPassword(ev.target.value)}/>
                <button >Login</button>
                <div className="text-center py-2 text-gray-500"> Dont have an account yet? <Link className=" underline text-black " to = {'/register'}> Register</Link> </div>
            </form>
            </div>
        </div>

    )
}