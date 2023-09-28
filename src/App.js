import React from "react"
import './app.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"

const App = () => {
    return(
    <>  
        
        <BrowserRouter>      
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/Register' element={<Register/>} />
            <Route path='/Main' element={<Main/>} />
            <Route path='/About' element={<Home/>} />
        </Routes>
    
      </BrowserRouter>
    </>
    )
}

export default App