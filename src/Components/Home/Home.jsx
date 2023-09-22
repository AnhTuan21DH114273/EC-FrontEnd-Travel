import React from "react"
import './home.css'
import img from '../../Assets/TourTitle.png'
import img1 from '../../Assets/About.png'
import img2 from '../../Assets/Ability.png'
import imgSide from '../../Assets/Tp.HCM.jpg'
import imgSide1 from '../../Assets/HaNoi.jpg'
import imgSide2 from '../../Assets/Hue.jpg'

const Home = () => {
    return(
    <section className='home'>
        <div className="Booking">
            <img src={img}></img>
                <span className="smallText">
                Hãy yên tâm trải nghiệm du lịch vòng quanh thế giới cùng chúng tôi nhé!
                </span>
                <h1 className="tour">
                Tour Du Lịch Sea Wonder Hàng Đầu Việt Nam 
                </h1>
                <button className='btnBook'>
                    <a href="#" className="btnColor">Đặt ngay</a>
                </button>
        </div>
        <div className="About">
            <h1 className="Why">Tại sao SeaWonder?</h1>
            <h2 className="About">Về chúng tôi</h2>
            <p className="AboutUs">Chúng tôi là một công ty du lịch hàng đầu Việt Nam. Nhằm mang 
            đến trải nghiệm cho khách hàng một trải nghiệm thoải mái. Chúng tôi cung cấp dịch vụ tập trung vào khách hàng,
            hoàn toàn minh bạch. Tất cả bạn cần làm là ngồi lại, thư giản và tận hưởng chuyến đi.</p>
            <button className='btnMore'>
                <a href="#" className="btnColor">Xem thêm </a>
            </button>
            <img src={img1} className="imgAbout"></img> 
        </div>
        <div className="Ability">
            <h1 className="AboutAbility">TÍNH NĂNG CỦA CHÚNG TÔI</h1>
            <h1 className="Advantage">Ưu Điểm</h1>
            <p className="Text">Chúng tôi kiểm soát được lịch trình, khách sạn, chuyến bay của khách hàng một cách dễ dàng</p>
            <img src={img2} className="imgAbility"></img> 
        </div>
        <div className="ImageSide">
            <h1 className="Path">CHÚNG TÔI HƯỚNG ĐÉN HƠN 4000 SÂN BAY VÀ 68 QUỐC GIA </h1>
            <h1 className="Popular">Điểm đến phổ biến</h1>
            <h1 className="inVietNam">TRONG NƯỚC </h1>
            <div className="SidebySide">
                <div className="Column">
                    <img src={imgSide} className="imgSides"></img>
                </div>
                <div className="Column">
                    <img src={imgSide1} className="imgSides"></img>
                </div>
                <div className="Column">
                    <img src={imgSide2} className="imgSides"></img>
                </div>
                <div className="VN1">
                    <h1 className="TextVN1">Thành phố Hồ Chí Minh</h1>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home