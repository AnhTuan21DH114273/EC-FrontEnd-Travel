import React from "react"
import './login.css'
import { Navbar } from "../../Components/Navbar/Navbar";
import {Link} from 'react-router-dom'
import LogoImg from "../../Assets/Logo.png"
import RegImg from "../../Assets/backgroud.jpg"
import { Footer } from "../../Components/Footer/Footer"
import GoogleIconSVG from "../../Assets/GoogleIcon.svg"
import PlusSVG from "../../Assets/Plus.svg"
import RequiredSVG from "../../Assets/Required.svg"
import FacebookSVG from "../../Assets/FacebookSVG.svg"

const Login = () => {
    return(
        <div className="LoginPage">
            <div className="LoginSection">
            <form className="LoginForm">
                <img src={RegImg} className="LoginBackground"></img>
                    <div className="LogText">Đăng Nhập</div>
                    <input type="text" className="EmailForm" placeholder="    Email"/>   
                    <input type="text" className="PasswordForm" placeholder="    Mật khẩu"/>
                        <img
                        className="mdi-password-1"
                        alt="Mdi password"
                        src={RequiredSVG}
                        />
                    <input type="submit" className="LoginButton" value="    ĐĂNG NHẬP"/>
                    <div className="ForgotPassword">Quên mật khẩu?</div>
                    <Link to="/Register" className="CreateAcc">Tạo tài khoản?</Link>
                    <div className="Or">Hoặc</div>
                    <button href="#" className="GoogleButton">
                        <a href="#" className="GoogleText">Google</a>
                            <img
                            className="GoogleIcon"
                            alt="Gg google"
                            src={GoogleIconSVG}
                            />
                            <img
                            className="GooglePlus"
                            alt="Vector"
                            src={PlusSVG}
                            />
                    </button>
                    <button href="#" className="FacebookButton">
                        <a href="#" className="FacebookText">Facebook</a>
                            <img
                            className="FacebookIcon"
                            alt="Ic baseline facebook"
                            src={FacebookSVG}
                            />
                    </button>
                </form>
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

export default Login