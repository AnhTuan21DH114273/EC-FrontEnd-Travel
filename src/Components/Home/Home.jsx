import React from "react"
import './home.css'
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer"
import LogoImg from "../../Assets/Logo.png"
import AboutImg from "../../Assets/About.png"
import TourImg from "../../Assets/TourTitle.png"
import AbilityImg from "../../Assets/Ability.png"
import HotelImg from "../../Assets/HotelVN.png"
import SpaImg from "../../Assets/SpaSinga.png"
import ArrowSVG from "../../Assets/ArrowSVG.svg"
import VnCity from "../../Assets/Tp.HCM.jpg"
import VnCity1 from "../../Assets/HaNoi.jpg"
import VnCity2 from "../../Assets/Hue.jpg"
import OutVN from "../../Assets/NewYork.jpg"
import OutVN1 from "../../Assets/Singapore.jpg"
import OutVN2 from "../../Assets/Malay.jpg"

const Home = () => {
    return (
        <div className="HomePage">
          <div className="HomeSection">
            <div className="Welcome">
              <img className="WelcomeImg" src={TourImg}></img>
              <ul class="Tour">
                <li className="TourText1">Hãy yên tâm trải nghiệm du lịch vòng quanh thế giới cùng chúng tôi nhé!</li>
                <li className="TourText">Tour Du Lịch Sea Wonder Hàng Đầu Việt Nam</li>
              </ul>
             
            </div>
            
            <div className="About">
              <ul>
                <img className="AboutImg" src={AboutImg}/>
                <li className="Why">Tại sao SeaWonder?</li>
                <li className="AboutUs">Về Chúng Tôi</li>
                <li className="AboutUsText">
                  Chúng tôi là một công ty du lịch hàng đầu Việt Nam. Nhằm mang <br />
                  đến trải nghiệm cho khách hàng một trải nghiệm thoải mái. Chúng tôi cung cấp dịch vụ tập trung vào khách hàng,
                  hoàn toàn minh bạch. Tất cả bạn cần làm là ngồi lại, thư giản và tận hưởng chuyến đi.
                </li>
                
              </ul>
            </div>
            <div className="AbilitySection">
              <ul>
                <img className="AbilitySection" src={AbilityImg}></img>
                <li className="Ability">TÍNH NĂNG CỦA CHÚNG TÔI</li>
                <li className="Advantage">Ưu Điểm</li>
                <li className="AbilityText">
                  Chúng tôi kiểm soát được lịch trình, khách sạn, chuyến bay của khách hàng một cách dễ dàng
                </li>
              </ul>
            </div>
            <div className="Country">
              <ul>
                <li className="Amount">CHÚNG TÔI HƯỚNG ĐÉN HƠN 4000 SÂN BAY VÀ 68 QUỐC GIA</li>
                <li className="Popular">Điểm Đến Phổ Biến</li>
                <li className="InContry">TRONG NƯỚC</li>
                <li className="OutContry">NGOÀI NƯỚC</li>
              </ul>
              <div class="row">
                  <div class="column">
                    <img src={VnCity} className="TpHCM"/>
                  </div>
                  <div class="column">
                    <img src={VnCity1} className="HaNoi"/>
                  </div>
                  <div class="column">
                    <img src={VnCity2} className="Hue"/>
                  </div>
              </div>  
              <div className="InContryText">
                <ul>
                  <li className="TpHCMText">Thành phố Hồ Chí Minh</li>
                  <li className="HaNoiText">Hà Nội</li>
                  <li className="HueText">Huế</li>
                </ul>
              </div>
              <div class="row1">
                  <div class="column1">
                    <img src={OutVN} className="NewYork"/>
                  </div>
                  <div class="column1">
                    <img src={OutVN1} className="Singapore"/>
                  </div>
                  <div class="column1">
                    <img src={OutVN2} className="Malay"/>
                  </div>
              </div>
              <div className="OutContryText">
                <ul>
                  <li className="NewYorkText">New York</li>
                  <li className="SingaporeText">Singapore</li>
                  <li className="MalayText">Malaysia</li>
                </ul>
              </div>
            </div>
            <div className="New">
              <ul>
                <li className="NewText">MỚI</li>
                <li className="Channel">Kênh</li>
                <img className="HotelImage" src={HotelImg}/>
                <li className="HotelVN">Khách sạn ở Việt Nam</li>
                <li className="DateVN">19/08/2023</li>
                <li className="TextVN">
                  Với quy mô rộng lớn, phòng khách phòng ngủ tiện lợi giúp cho khách hàng cảm giác được thư giản, dễ chịu hơn.
                </li>
                <img className="SpaImage" src={SpaImg}/>   
                <li className="SpaSingapore">Hệ thống spa ở Singapore</li>
                <li className="DateSingapore">20/07/2023</li>
                <li className="TextSingapore">
                  Hệ thống spa thư giản giúp cho khách hàng cảm giác dễ chịu, thoải mái, tạo nên cảm giác thăng hoa.
                </li>
              </ul>
            </div>
            <button className="BtnOrder">
                <a href="#" className="PressOrder">ĐẶT NGAY</a>
            </button>
            <button className="AboutVN">
                <a href="#" className="More">XEM THÊM</a>
              <div className="VectorImg">
                <img
                  className="ArrowSVG"
                  src={ArrowSVG}
                />
              </div>
              </button>
              <button className="AboutBtn">
                    <a href="#" className="More">XEM THÊM</a>
                    <div className="VectorImg">
                      <img
                        className="ArrowSVG"
                        src={ArrowSVG}
                      />
                    </div>
              </button>
                  <button className="AboutSinga">
                <a href="#" className="More">XEM THÊM</a>
                <div className="VectorImg">
                  <img
                    className="ArrowSVG"
                    src={ArrowSVG}
                  />
                </div>
              </button>
            <Navbar className="navbar"/>
            <Footer className="footer"/>
          </div>
        </div>
      );
};

export default Home