import React from "react";
import './register.css';
import { Navbar } from "../../Components/Navbar/Navbar";
import LogoImg from "../../Assets/Logo.png"
import RegImg from "../../Assets/backgroud.jpg"
import Footer from "../Footer/Footer";
import RequiredSVG from "../../Assets/Required.svg"

const Register = () =>{
    return(
        <div className="RegisterPage">
            <div className="RegisterSection">
                 <img
                    className="logo"
                    alt="Asset"
                    src={LogoImg}
                />
                <form className="RegForm">
                <img src={RegImg} className="RegImg"></img>
                    <div className="RegText">Đăng Ký</div>
                    <input type="text" className="UsernameForm" placeholder="    Tên tài khoản"/>
                    <input type="text" className="PasswordForm" placeholder="    Mật khẩu"/>
                        <img
                        className="mdi-password-1"
                        alt="Mdi password"
                        src={RequiredSVG}
                        />

                    <input type="text" className="RepeatPasswordForm" placeholder="    Nhập lại mật khẩu"/>   
                        <img
                        className="mdi-password-2"
                        alt="Mdi password"
                        src={RequiredSVG}                        
                    />
                    <input type="text" className="EmailForm" placeholder="    Email"/>   
                    <input type="submit" className="RegButton" value="    ĐĂNG KÝ"/>
                </form>
                <Navbar className="navbar" />
                <Footer className="footer" />
            </div>
         </div>
    );
};

export default Register;