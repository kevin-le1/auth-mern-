import {Link} from "react-router-dom"
import {useContext} from "react";
import {UserContext} from "./user.jsx"
// import Button from "@mui/material/Button"; <Button>Test</Button>

export default function Header(){
  const {user} = useContext(UserContext);


    return(
      <>
        <header className = "flex justify-between">
      
        <Link to ='/'className = "flex items-center gap-1" href = "">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 fill-slate-500 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>

          <span className = "font-bold text-xl">Dance!</span>
        </Link>


        <div className = "gap-2 flex border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 items-center">
        <div>Testing</div>
        <div className = "border-l border-gray-300"/>
        <div>Testing</div>
        <div className = "border-l border-gray-300"/>
        <div>Testing</div>
        <button className = "bg-black text-white p-1 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </button>
        </div>

        <div className = "gap-2 flex border border-gray-300 rounded-full py-2 px-4">
       
        
        <Link to={ user?'/account':'/login'}  className = "rounded-full bg-gray-500 border border-gray-500 text-white p-1">
          
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 relative ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        
        
        </Link>
        <div className="py-1">
        {!!user&& (
          <div>
            {user.name}
          </div>
        )}
        </div>
        </div>
        
        </header>
        </>
    )
}