import React, {useState} from "react"
import './navbar.css'
import {GiDolphin} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import img from '../../Assets/Logo.png'

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
    const closeNav =()=>{
        setActive('navBar')
    }
    return(
    <section className="navBarSection">
        <header className="header flex">

            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <img src={img}></img>
                </a>
            </div>
        
            <div className={active}>
            <ul className="navLists flex">

                <li className="navItem">
                    <a href="#" className="navLink">Trang chủ</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Về chúng tôi</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Dịch vụ</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Điểm đến</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Kênh</a>
                </li>

                <button className='btn'>
                    <a href="#">Liên hệ chúng tôi</a>
                </button>

            </ul>

            <div onClick={closeNav} className="closeNavbar">
                 <AiFillCloseCircle className="icon"/>
            </div>
        
        </div>

        <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon"/>
        </div>
        </header>
    </section>
    )
}

export default Navbar