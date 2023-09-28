import React from "react"
import './main.css'
import { Navbar } from "../../Components/Navbar/Navbar";
import LogoImg from "../../Assets/Logo.png"
import { Footer } from "../../Components/Footer/Footer"

const Main = () => {
    return(
        <div className="MainPage">
            <div className="MainSection">

            <img
              className="logo"
              src={LogoImg}
            />
            <Navbar className="navbar" />
            <Footer className="footer" />
          </div>
        </div>
        
    )
}

export default Main