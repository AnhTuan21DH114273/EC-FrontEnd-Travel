import React from "react"
import './navbar.css';
import {Link} from 'react-router-dom'
import LogoImg from "../../Assets/Logo.png"

export const Navbar = () => {
    return (  
        <header class="login-header">
            
            <div class="login-logo">
                <img src={LogoImg} alt=""/>
            </div>

            <div class="login-nav">
                <ul class="login-nav-list">
                    <li class="login-nav-item">
                        <Link to="/Main" className="Home">Trang chủ</Link>
                    </li>

                    <li class="login-nav-item">
                        <Link to ="/About" className="About">Giới thiệu</Link>
                    </li>

                    <li class="login-nav-item">
                        <a href="">
                            Tour
                        </a>
                    </li>

                    <li class="login-nav-item">
                        <a href="">
                            Bảng giá
                        </a>
                    </li>

                    <li class="login-nav-item">
                        <a href="">
                            Đặt Tour
                        </a>
                    </li>       
                </ul>
            </div>

            
            <div class="login-user">
                <button class="login-contact">Liên hệ chúng tôi</button>

                <div class="login-info">
                    <i class="login-info-i1 fa-solid fa-user"></i>

                    <span>VN</span>

                    <i class="login-info-i2 fa-solid fa-angle-down"></i>
                </div>
                <Link to="/">
                      <img
                      className="mdi-account"
                      alt="Mdi account"
                      src="https://cdn.animaapp.com/projects/650e59cf2e4e252d8d5cdce3/releases/650e5a0ab34031947f682b09/img/mdi-account.svg"/>
                </Link>
            </div>
        </header>
      );
};

export default Navbar