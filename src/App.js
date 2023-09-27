import React from "react"
import './app.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
    return(
    <>  
        
        <BrowserRouter>      
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/About' element={<Home/>} />
        </Routes>
    
      </BrowserRouter>
    </>
    )
}

export default App