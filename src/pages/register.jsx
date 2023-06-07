import {Link} from "react-router-dom"
import {useState} from 'react'
import axios from "axios"
export default function register(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [name, setName] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('');
    async function registerUser(ev){
        ev.preventDefault()
        // axios.get('/test')
        try{
            await axios.post('/register',{
                name,
                email,
                password,
            })
            alert('Registration successful')
        } catch(e){
            alert('Registration failed')
        }
        
    }

    return(
        <div className = "mt-4 grow flex items-center justify-around">
            <div className="mb-80 ">
            <h1 className="text-4xl text-center">Register</h1>
            <form className="max-w-md mx-auto" onSubmit ={registerUser}>
                <input type = "text" placeholder ="Type your name" 
                    value ={name} onChange = {ev => setName(ev.target.value)}/>
                <input type = "email" placeholder ="Type your email"
                    value ={email} onChange = {ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder ="Type your password"
                    value ={password} onChange = {ev => setPassword(ev.target.value)}/>
                <button className = "primary">Register</button>
                <div className="text-center py-2 text-gray-500"> Have an account already? <Link className=" underline text-black " to = {'/login'}> Login</Link> </div>
            </form>

            </div>
        </div>

    )
}