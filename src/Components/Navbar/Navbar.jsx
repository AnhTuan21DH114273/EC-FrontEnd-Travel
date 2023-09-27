import React from "react"
import './navbar.css';
import {Link} from 'react-router-dom'

export const Navbar = ({ className }) => {
    return (
        <div className={`navbar ${className}`}>
            
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
              <Link to="/" className="Home">Trang chủ</Link>
            </div>
        </div>
      );
};

export default Navbar