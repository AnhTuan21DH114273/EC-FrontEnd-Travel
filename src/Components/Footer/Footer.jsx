import React from "react"
import './footer.css'


export const Footer = () => {
    return(
        <footer className="footer">
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
        </footer>
    )
}

export default Footer