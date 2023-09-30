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
              <img className="Welcome" src={TourImg}></img>
              <p className="p">Hãy yên tâm trải nghiệm du lịch vòng quanh thế giới cùng chúng tôi nhé!</p>
              <p className="TourText">Tour Du Lịch Sea Wonder Hàng Đầu Việt Nam</p>
              <button className="BtnOrder">
                <a href="#" className="PressOrder">ĐẶT NGAY</a>
              </button>
            </div>
            <img
              className="AboutImg"
              alt="Rectangle"
              src={AboutImg}
            />
            <div className="Why">Tại sao SeaWonder?</div>
            <div className="AboutUs">Về Chúng Tôi</div>
            <div className="Popular">Điểm Đến Phổ Biến</div>
            <div className="Channel">Kênh</div>
            <p className="AboutUsText">
              Chúng tôi là một công ty du lịch hàng đầu Việt Nam. Nhằm mang <br />
              đến trải nghiệm cho khách hàng một trải nghiệm thoải mái. Chúng tôi cung cấp dịch vụ tập trung vào khách hàng,
              hoàn toàn minh bạch. Tất cả bạn cần làm là ngồi lại, thư giản và tận hưởng chuyến đi.
            </p>
            <button href="#" className="AboutButton">
              <a href="#" className="More">XEM THÊM</a>
              <div className="VectorImg">
                <img
                  className="ArrowSVG"
                  src={ArrowSVG}
                />
              </div>
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
            <button className="AboutSinga">
              <a href="#" className="More">XEM THÊM</a>
              <div className="VectorImg">
                <img
                  className="ArrowSVG"
                  src={ArrowSVG}
                />
              </div>
            </button>
            <div className="AbilitySection">
              <img className="AbilitySection" src={AbilityImg}></img>
              <p className="Ability">TÍNH NĂNG CỦA CHÚNG TÔI</p>
              <div className="Advantage">Ưu Điểm</div>
              <p className="AbilityText">
                Chúng tôi kiểm soát được lịch trình, khách sạn, chuyến bay của khách hàng một cách dễ dàng
              </p>
            </div>
            <p className="Amount">CHÚNG TÔI HƯỚNG ĐÉN HƠN 4000 SÂN BAY VÀ 68 QUỐC GIA</p>
            <div className="New">MỚi</div>
            <p className="HotelVN">Khách sạn ở Việt Nam</p>
            <p className="SpaSingapore">Hệ thống spa ở Singapore</p>
            <div className="DateVN">19/08/2023</div>
            <div className="DateSingapore">20/07/2023</div>
            <p className="TextVN">
              Với quy mô rộng lớn, phòng khách phòng ngủ tiện lợi giúp cho khách hàng cảm giác được thư giản, dễ chịu hơn.
            </p>
            <p className="TextSingapore">
              Hệ thống spa thư giản giúp cho khách hàng cảm giác dễ chịu, thoải mái, tạo nên cảm giác thăng hoa.
            </p>
            <div className="InContry">TRONG NƯỚC</div>
            <div className="OutContry">NGOÀI NƯỚC</div>
            <div className="InContry1">
              <div className="TpHCM">
                <img src={VnCity} className="TpHCM"/>
                <p className="TpHCMText">Thành phố Hồ Chí Minh</p>
              </div>
            </div>
            <div className="OutContry1">
              <div className="NewYork">
              <img src={OutVN} className="NewYork"/>
                <div className="NewYorkText">New York</div>
              </div>
            </div>
            <div className="OutContry2">
              <div className="Singapore">
              <img src={OutVN1} className="Singapore"/>
                <div className="SingaporeText">Singapore</div>
              </div>
            </div>
            <div className="OutContry3">
              <div className="Malay">
              <img src={OutVN2} className="Malay"/>
                <div className="MalayText">Malaysia</div>
              </div>
            </div>
            <div className="InContry2">
              <div className="HaNoi">
                <img src={VnCity1} className="HaNoi"/>
                <div className="HaNoiText">Hà Nội</div>
              </div>
            </div>
            <div className="InContry3">
              <div className="Hue">
                <img src={VnCity2} className="Hue"/>
                <div className="HueText">Huế</div>
              </div>
            </div>
            <img className="HotelImage" src={HotelImg}/>
            <img className="SpaImage" src={SpaImg}/>
            
            <img
              className="logo"
              src={LogoImg}
            />
            <Navbar className="navbar" />
            <Footer className="footer" />
          </div>
        </div>
      );
};

export default Home