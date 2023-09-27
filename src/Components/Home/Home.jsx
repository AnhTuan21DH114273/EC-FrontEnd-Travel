import React from "react"
import './home.css'
import { Navbar } from "../../Components/Navbar/Navbar";
import LogoImg from "../../Assets/Logo.png"
import AboutImg from "../../Assets/About.png"
import TourImg from "../../Assets/TourTitle.png"
import AbilityImg from "../../Assets/Ability.png"
import HotelImg from "../../Assets/HotelVN.png"
import SpaImg from "../../Assets/SpaSinga.png"


const Home = () => {
    return (
        <div className="HomePage">
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
            <div className="Welcome">
              <img className="Welcome" src={TourImg}></img>
              <p className="p">Hãy yên tâm trải nghiệm du lịch vòng quanh thế giới cùng chúng tôi nhé!</p>
              <p className="TourText">Tour Du Lịch Sea Wonder Hàng Đầu Việt Nam</p>
              <button className="BtnOrder">
                <a href="#" className="PressOrder">ĐẶT NGAY</a>
              </button>
            </div>
            <img
              className="rectangle"
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
            <button className="overlap-2">
              <a href="#" className="More">XEM THÊM</a>
              <div className="VectorImg">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/650e59cf2e4e252d8d5cdce3/releases/650e5a0ab34031947f682b09/img/vector.svg"
                />
                <img
                  className="img"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/650e59cf2e4e252d8d5cdce3/releases/650e5a0ab34031947f682b09/img/vector-3.svg"
                />
              </div>
            </button>
            <button className="overlap-4">
              <a className="More">XEM THÊM</a>
              <div className="VectorImg">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/650e59cf2e4e252d8d5cdce3/releases/650e5a0ab34031947f682b09/img/vector-1.svg"
                />
                <img
                  className="img"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/650e59cf2e4e252d8d5cdce3/releases/650e5a0ab34031947f682b09/img/vector-3.svg"
                />
              </div>
            </button>
            <button className="overlap-5">
              <a className="More">XEM THÊM</a>
              <div className="VectorImg">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/650e59cf2e4e252d8d5cdce3/releases/650e5a0ab34031947f682b09/img/vector-1.svg"
                />
                <img
                  className="img"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/650e59cf2e4e252d8d5cdce3/releases/650e5a0ab34031947f682b09/img/vector-3.svg"
                />
              </div>
            </button>
            <div className="overlap-6">
              <img className="overlap-6" src={AbilityImg}></img>
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
                <p className="TpHCMText">Thành phố Hồ Chí Minh</p>
              </div>
            </div>
            <div className="OutContry1">
              <div className="NewYork">
                <div className="NewYorkText">New York</div>
              </div>
            </div>
            <div className="OutContry2">
              <div className="Singapore">
                <div className="SingaporeText">Singapore</div>
              </div>
            </div>
            <div className="OutContry3">
              <div className="Malay">
                <div className="MalayText">Malaysia</div>
              </div>
            </div>
            <div className="InContry2">
              <div className="HaNoi">
                <div className="HaNoiText">Hà Nội</div>
              </div>
            </div>
            <div className="InContry3">
              <div className="Hue">
                <div className="HueText">Huế</div>
              </div>
            </div>
            <img className="HotelImage" src={HotelImg}/>
            <img className="SpaImage" src={SpaImg}/>
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
      );
};

export default Home