import React from "react"
import './main.css'
import { Navbar } from "../../Components/Navbar/Navbar";
import LogoImg from "../../Assets/Logo.png"

const Main = () => {
    return(
        <div className="MainPage">
            <div className="ContactSection">
            <button className="ContactButton">
              <a href="#" className="Contact">Liên hệ chúng tôi</a>
            </button>
            <div className="text-wrapper-6">VN</div>
            <img
              className="mdi-account"
              alt="Mdi account"
              src="https://cdn.animaapp.com/projects/650e59cf2e4e252d8d5cdce3/releases/650e5a0ab34031947f682b09/img/mdi-account.svg"
            />
            <div className="footer">
              <p className="FooterText">Đăng ký nhận bản tin của chúng tôi</p>
              <p className="FooterText1">Chúng tôi sẽ hỗ trợ bạn</p>
              <div className="Email">
                <div className="WriteEmail">
                  <div className="EmailText">Email</div>
                </div>
                <button className="SignUp">
                  <a href="#" className="SignUpButton">ĐĂNG KÝ</a>
                </button>
              </div>
            </div>
            <img
              className="Language"
              
              src="https://cdn.animaapp.com/projects/650e59cf2e4e252d8d5cdce3/releases/650e5a0ab34031947f682b09/img/vector-6.svg"
            />
            <img
              className="logo"
              src={LogoImg}
            />
            <Navbar className="navbar" />
          </div>
        </div>
        
    )
}

export default Main