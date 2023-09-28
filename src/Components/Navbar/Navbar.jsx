import React from "react"
import './navbar.css';
import {Link} from 'react-router-dom'
import LogoImg from "../../Assets/Logo.png"

export const Navbar = ({ className }) => {
    return (  
        <header className={`navbar ${className}`}>
                <div className="login-nav-list">
                    <div>
                      <Link to ="/About" className="About">Giới thiệu</Link>
                    </div>
                    <div>
                      <a href="#" className="Tour">Tour</a>
                    </div>
                    <div>
                      <a href="#" className="Price">Bảng giá</a>
                    </div>
                    <div>
                      <a href="#" className="Order">Đặt tour</a>
                    </div>
                    <div>
                      <Link to="/Main" className="Home">Trang chủ</Link>
                    </div>
                    <button className="ContactButton">
                      <a href="#" className="Contact">Liên hệ chúng tôi</a>
                    </button>
                    <div className="text-wrapper-6">VN</div>
                    <Link to="/">
                      <img
                      className="mdi-account"
                      alt="Mdi account"
                      src="https://cdn.animaapp.com/projects/650e59cf2e4e252d8d5cdce3/releases/650e5a0ab34031947f682b09/img/mdi-account.svg"/>
                    </Link>
                    <img
                        className="Language"
                        
                        src="https://cdn.animaapp.com/projects/650e59cf2e4e252d8d5cdce3/releases/650e5a0ab34031947f682b09/img/vector-6.svg"
                    />
                </div>
        </header>
      );
};

export default Navbar