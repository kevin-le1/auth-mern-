import {Route, Routes} from "react-router-dom"
import Index from "./pages/index.jsx"
import Login from "./pages/login.jsx"
import Register from "./pages/register.jsx"
import Layout from "./Layout.jsx"
import Account from "./pages/account.jsx"
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import {UserContextProvider} from "./user.jsx"

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  
  return (
    <UserContextProvider>
      <Routes>
        <Route path = "/" element ={<Layout />}>
        
        <Route index element ={<Index />}/>
        <Route path ="/login" element ={<Login />}/>
        <Route path ="/register" element ={<Register />}/>
        <Route path ="/account" element ={<Account />}/>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
