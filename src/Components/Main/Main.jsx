
import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar"
import { Footer } from "../../Components/Footer/Footer"
import BoxNumberSVG from "../../Assets/BoxNumber.svg"
import Clock from "../../Assets/Clock.svg"
import PinPoint from "../../Assets/PinPoint.svg"
import Star from "../../Assets/Star.svg"
import Ticket from "../../Assets/Ticket.svg"
import Line from "../../Assets/Line.svg"
import Auto from "../../Assets/Auto.png"
import Auto1 from "../../Assets/Auto1.png"
import Auto2 from "../../Assets/Auto2.png"
import Auto3 from "../../Assets/Auto3.png"
import Auto4 from "../../Assets/Auto4.png"
import Auto5 from "../../Assets/Auto5.png"
import Explore from "../../Assets/Explore.png"
import Explore1 from "../../Assets/Explore1.png"
import Explore2 from "../../Assets/Explore2.png"
import Explore3 from "../../Assets/Explore3.png"
import Carousel from "../../Assets/Carousel.png"
import Carousel1 from "../../Assets/Carousel1.png"
import Carousel2 from "../../Assets/Carousel2.png"
import Carousel3 from "../../Assets/Carousel3.png"
import Discount from "../../Assets/Discount.png"
import Discount1 from "../../Assets/Discount1.png"
import Discount2 from "../../Assets/Discount2.png"
import Tab from "../../Assets/Car.svg"
import Tab1 from "../../Assets/Hotel.svg"
import Tab2 from "../../Assets/Plane.svg"
import Tab3 from "../../Assets/Plane&Hotel.svg"
import Tab4 from "../../Assets/Car&Hotel.svg"
import Tab5 from "../../Assets/Search.svg"
import Special from "../../Assets/Special.png"
import Special1 from "../../Assets/Special1.png"
import Special2 from "../../Assets/Special2.png"
import Favortie from "../../Assets/Favorite.png"
import Favortie1 from "../../Assets/Favorite1.png"
import Favortie2 from "../../Assets/Favorite2.png"
import Favortie3 from "../../Assets/Favorite3.png"
import Favortie4 from "../../Assets/Favorite4.png"
import Favortie5 from "../../Assets/Favorite5.png"
import "./main.css";

const Main = () => {
  return (
    <div className="MainPage">
      <div className="MainSection">
        <div className="MainWelcome">
            <div class="sliders">
              <div class="images">
                  <input type="radio" name="slide" id="img1"/>
                  <input type="radio" name="slide" id="img2"/>
                  <input type="radio" name="slide" id="img3"/>
                  <input type="radio" name="slide" id="img4"/>

                  <img src={Carousel} class="m1" alt="img1"/>
                  <img src={Carousel1} class="m2" alt="img2"/>
                  <img src={Carousel2} class="m3" alt="img3"/>
                  <img src={Carousel3} class="m4" alt="img4"/>
              </div>
              <div class="dots">
                  <label for="img1"></label>
                  <label for="img2"></label>
                  <label for="img3"></label>
                  <label for="img4"></label>
              </div>
          </div>
          <div className="TabSection">
            <div className="Tab">
              <img
                  className="Icons"
                  src={Tab}
                />
              <p>Hover Me</p>
            </div>
            <div className="Tab">
                <img
                  className="Icons"
                  src={Tab1}
                />
                <p>Hover Me</p>
            </div>
            <div className="Tab">
            <img
                  className="Icons"
                  src={Tab2}
                />
                <p>Hover Me</p>
            </div>
            <div className="Tab">
            <img
                  className="Combo"
                  src={Tab3}
                />
                <p>Hover Me</p>
            </div>
            <div className="Tab">
            <img
                  className="Combo"
                  src={Tab4}
                />
                <p>Hover Me</p>
            </div>
            <div className="Tab">
                <img
                  className="Icons"
                  src={Tab5}
                />
                <p>Hover Me</p>
            </div>
           
          </div>
        </div>
        <div class="wrapper">
          <p className="UuDai">Ưu đãi</p>
            <div class="slider">
                <div class="slide-track">
                        <div class="slide">
                            <img src={Auto} />
                        </div>
                        
                        <div class="slide">
                            <img src={Auto1} />
                        </div>
                        
                        <div class="slide">
                            <img src={Auto2} />
                        </div>
                        
                        <div class="slide">
                            <img src={Auto3} />
                        </div>
                        
                        <div class="slide">
                            <img src={Auto4} />
                        </div>
                        
                        <div class="slide">
                            <img src={Auto5}/>
                        </div>
                </div>
            </div>
          </div>  
        
        <div className="Explore">
          <p className="ExText">Khám phá du lịch cùng SeaWonder</p>
          <div class="row">
            <div class="column">
                <img src={Explore} className="Explore" />
                <p className="ExploreText">
                  Tự hào nét Việt: Ưu đãi <br />
                  kích cầu du lịch trong nước.
                </p>
            </div>
            <div class="column">
                <img src={Explore1} className="Explore"/>
                <p className="ExploreText">
                  Đắm say giữa trời thu
                  <br />
                  khắp thế giới.
                </p>
            </div>
            <div class="column">
                <img src={Explore2} className="Explore"/>
                <p className="ExploreText">[Mới] Tour trải nghiệm cao cấp</p>
            </div>
            <div class="column">
                <img src={Explore3} className="Explore"/>
                <p className="ExploreText">
                  Tour trải nghiệm giới trẻ mang <br />
                  tầm vóc quốc tế.
                </p>
            </div>                
        </div>
        </div>
        <div className="rowDiscount">
          <p className="UuDaiHour">Ưu đãi tour giờ chót</p>
            <div className="columnDiscount">
            
                <div className="BoxHour">
                  
                  <img className="ImgHour" src={Discount} />
                  
                  <div className="Time">
                      <div className="LastHour">Giờ chót</div>
                      <img
                        className="ClockSVG"
                        src={Clock}
                      />
                  </div>
                  <div className="BigBox"/>
                    <ul className="Box">
                      <li className="NumberCare">500 quan tâm</li>
                      <li className="AwesomeCare">Tuyệt vời</li>
                  </ul>
                  <div className="BoxNumber">
                    <img src={BoxNumberSVG} className="BoxNumberSVG"/>
                    <p className="Number">8.5</p>
                  </div>
                  <ul>
                    <li className="Date">10/10/2023 - 4 ngày</li>
                    <li className="Locations">
                      Đà Nẵng - Huế - Cầu Vàng - Sơn Trà - Hội An <br />
                      (Khách sạn 4 * Trọn Tour )
                    </li>
                    <div className="Tour">
                      <p className="TextTourID">Mã tour:</p>
                      <p className="TourID">NDSGN3391-069-270923VU-F-1</p>
                      <img
                        className="vector"
                        alt="Vector"
                        src={Ticket}
                      />
                    </div>
                    <li className="Destination">Nơi khởi hành: TP. Hồ Chí Minh</li>
                    <div className="MoneySection">
                      <div className="Price">
                        <div className="ActualPrice">Giá: 5,500,000đ</div>
                      </div>
                      <li className="Money">5,300,000</li>
                      <li className="TypeDollar">đ</li>
                    </div>
                  </ul>
                  <div className="Percentage">
                    <div className="PercentageText">4% GIẢM</div>
                  </div>
                  <button className="TicketLeft">
                    <a href="#" className="TicketLeft-Text">Còn 4 vé</a>
                  </button>
                </div>
            </div>
          <div className="columnDiscount">
            <div className="BoxHour">
              
              <img className="ImgHour" src={Discount1} />
              
              <div className="Time">
                  <div className="LastHour">Giờ chót</div>
                  <img
                    className="ClockSVG"
                    
                    src={Clock}
                  />
              </div>
              <div className="BigBox"/>
                <ul className="Box">
                  <li className="NumberCare">350 quan tâm</li>
                  <li className="AwesomeCare">Tuyệt vời</li>
              </ul>
              <div className="BoxNumber">
                <img src={BoxNumberSVG} className="BoxNumberSVG"/>
                <p className="Number">9.5</p>
              </div>
              <ul>
                <li className="Date">14/10/2023 - 4 ngày</li>
                <li className="Locations">
                  Phú Quốc - Nha Trang - Quy Nhơn<br />
                  (Khách sạn 3 * Trọn Tour )
                </li>
                <div className="Tour">
                  <p className="TextTourID">Mã tour:</p>
                  <p className="TourID">PQSGN3392-070-270923QN-F-3</p>
                  <img
                    className="vector"
                    alt="Vector"
                    src={Ticket}
                  />
                </div>
                <li className="Destination">Nơi khởi hành: TP. Hồ Chí Minh</li>
                <div className="MoneySection">
                <div className="Price">
                  <div className="text-wrapper-32"></div>
                  <div className="ActualPrice">Giá: 4,590,000đ</div>

                </div>
                <li className="Money">3,290,000</li>
                <li className="TypeDollar">đ</li>
                </div>
              </ul>
              <div className="Percentage">
                <div className="PercentageText">13% GIẢM</div>
              </div>
              <button className="TicketLeft">
                <a href="#" className="TicketLeft-Text">Còn 3 vé</a>
              </button>
            </div>
          </div>
          <div className="columnDiscount">
            <div className="BoxHour">
              
              <img className="ImgHour" src={Discount2} />
              
              <div className="Time">
                  <div className="LastHour">Giờ chót</div>
                  <img
                    className="ClockSVG"
                    
                    src={Clock}
                  />
              </div>
              <div className="BigBox"/>
                <ul className="Box">
                  <li className="NumberCare">500 quan tâm</li>
                  <li className="AwesomeCare">Tuyệt vời</li>
              </ul>
              <div className="BoxNumber">
                <img src={BoxNumberSVG} className="BoxNumberSVG"/>
                <p className="Number">8.5</p>
              </div>
              <ul>
                <li className="Date">10/10/2023 - 4 ngày</li>
                <li className="Locations">
                  Đà Lạt - Nha Trang <br />
                  (Khách sạn 3 * Trọn Tour )
                </li>
                <div className="Tour">
                  <p className="TextTourID">Mã tour:</p>
                  <p className="TourID">ĐLNT3392-070-270923NT-F-3</p>
                  <img
                    className="vector"
                    alt="Vector"
                    src={Ticket}
                  />
                </div>
                
                <li className="Destination">Nơi khởi hành: TP. Hồ Chí Minh</li>
                <div className="MoneySection">
                <div className="Price">
                  <div className="text-wrapper-32"></div>
                  <div className="ActualPrice">Giá: 4,590,000đ</div>

                </div>
                <li className="Money">4,390,000</li>
                <li className="TypeDollar">đ</li>
                </div>
              </ul>
              <div className="Percentage">
                <div className="PercentageText">4% GIẢM</div>
              </div>
              <button className="TicketLeft">
                <a href="#" className="TicketLeft-Text">Còn 3 vé</a>
              </button>
            </div>
          </div>
        </div>
        <div className="rowSpecial">
          <p className="UuDaiSpecial">Gói ưu đãi đặc biệt</p>
          <div className="columnSpecial">
              <p className="PlaneHotel">Vé máy bay + khách sạn</p>
              <ul>
                <li className="ComboPlaneHotel">
                  Combo Quy Nhơn 3N2Đ: Vé máy bay khứ hồi + Khách sạn Anina 4 sao <br />
                  (Bao gồm điểm tâm buổi sáng)
                </li>
                <li className="TicketPlane">Vé máy bay khứ hồi Vietravel Airlines + Phòng tiêu chuẩn + Ăn sáng</li>
              </ul>
              <img
                className="ImgSpecial"
                alt="Rectangle"
                src={Special}
              />
              <div className="rowStar">
                  <div className="columnStar">
                    <img
                      alt="Star"
                      src={Star}
                    />
                  </div>
                  <div className="columnStar">
                    <img
                      alt="Star"
                      src={Star}
                    />
                  </div>
                  <div className="columnStar">
                    <img
                      alt="Star"
                      src={Star}
                    />
                  </div>
              </div>
 
              <img
                className="LineVector"
                alt="Line"
                src={Line}
              />
              <p className="PriceFrom">Giá chỉ từ</p>
              <ul className="PriceDate">
                <li className="Cash">2,390,000 </li>
                <li className="PerCus">/khách</li>
                <li className="GoDate">Ngày đi 14/10/2023</li>
              </ul>
              <button href="#" className="OrderNow">Đặt ngay</button>
              <p className="Includes">Đã bao gồm trong giá</p>
              <div className="LocationSection">
                <div className="VectorGroup">
                  <div className="BoxNumber1">
                    <p className="AwesomeText1">Tuyệt vời</p>
                    <img className="BoxNumber1" src={BoxNumberSVG}/>
                    <p className="NumberBox">10</p>
                  </div>
                </div>
                <img
                  className="PinPoint"
                  src={PinPoint}
                />
                <p className="LocationPoint">
                1H1 Nguyễn Thị Định, Nguyễn Văn Cừ, Thành phố Quy Nhơn, Quy Nhon, Binh Dinh, Viet Nam
                </p>
              </div>
            </div>
            <div className="columnSpecial">
              <p className="PlaneHotel">Vé máy bay + khách sạn</p>
              <ul>
                <li className="ComboPlaneHotel">
                  Combo Nha Trang 3N2Đ: Vé máy bay khứ hồi + Khách sạn Pearl Beach 3 sao <br />
                  (Bao gồm điểm tâm buổi sáng)
                </li>
                <li className="TicketPlane">Vé máy bay khứ hồi Vietravel Airlines + Phòng tiêu chuẩn + Ăn sáng</li>
              </ul>
              <img
                className="ImgSpecial"
                alt="Rectangle"
                src={Special1}
              />
              <div className="rowStar">
                  <div className="columnStar">
                    <img
                      alt="Star"
                      src={Star}
                    />
                  </div>
                  <div className="columnStar">
                    <img
                      alt="Star"
                      src={Star}
                    />
                  </div>
                  <div className="columnStar">
                    <img
                      alt="Star"
                      src={Star}
                    />
                  </div>
              </div>
              <img
                className="LineVector"
                alt="Line"
                src={Line}
              />
              <p className="PriceFrom">Giá chỉ từ</p>
              <ul className="PriceDate">
                <li className="Cash">1,390,000 </li>
                <li className="PerCus">/khách</li>
                <li className="GoDate">Ngày đi 14/10/2023</li>
              </ul>
              <button href="#" className="OrderNow">Đặt ngay</button>
              <p className="Includes">Đã bao gồm trong giá</p>
              <div className="LocationSection">
                <div className="VectorGroup">
                  <p className="AwesomeText1">Tuyệt vời</p>
                  <img className="BoxNumber1" src={BoxNumberSVG}/>
                  <p className="NumberBox">10</p>
                </div>
                <img
                  className="PinPoint"
                  src={PinPoint}
                />
                <p className="LocationPoint">
                Lô LKC-D20 Đại Phú Gia, KĐT TM Bắc Sông Hà Thanh (khu C), Nha Trang, Khánh Hòa, Viet Nam
                </p>
              </div>
            </div>
            <div className="columnSpecial">
              <p className="PlaneHotel">Vé máy bay + khách sạn</p>
              <ul>
                <li className="ComboPlaneHotel">
                  Combo Hội An 3N2Đ: Vé máy bay khứ hồi + Khách sạn Pearl Beach 3 sao <br />
                  (Bao gồm điểm tâm buổi sáng)
                </li>
                <li className="TicketPlane">Vé máy bay khứ hồi Vietravel Airlines + Phòng tiêu chuẩn + Ăn sáng</li>
              </ul>
              <img
                className="ImgSpecial"
                alt="Rectangle"
                src={Special2}
              />
              <div className="rowStar">
                  <div className="columnStar">
                    <img
                      alt="Star"
                      src={Star}
                    />
                  </div>
                  <div className="columnStar">
                    <img
                      alt="Star"
                      src={Star}
                    />
                  </div>
                  <div className="columnStar">
                    <img
                      alt="Star"
                      src={Star}
                    />
                  </div>
              </div>
              
              
              <img
                className="LineVector"
                alt="Line"
                src={Line}
              />
              <p className="PriceFrom">Giá chỉ từ</p>
              <ul className="PriceDate">
                <li className="Cash">1,890,000 </li>
                <li className="PerCus">/khách</li>
                <li className="GoDate">Ngày đi 14/10/2023</li>
              </ul>
              <button href="#" className="OrderNow">Đặt ngay</button>
              <p className="Includes">Đã bao gồm trong giá</p>
              <div className="LocationSection">
                <div className="VectorGroup">
                  <div className="BoxNumber1">
                    <p className="AwesomeText1">Tuyệt vời</p>
                    <img className="BoxNumber1" src={BoxNumberSVG}/>
                    <p className="NumberBox">10</p>
                  </div>
                </div>
                <img
                  className="PinPoint"
                  src={PinPoint}
                />
                <p className="LocationPoint">
                15 - 17 Nguyễn Huệ, Hải Cảng, Thành phố Hội An, Hà Nội, Vietnam
                </p>
              </div>
            </div>
        </div>
        <div className="rowFavorite">
          <p className="FavoriteText">Địa điểm yêu thích</p>
          <div className="columnFavorite">
              <img
              className="ImgFav"
              alt="Rectangle"
              src={Favortie}
              />
              <div className="FavPlace">Hạ Long</div>
              <p className="NumberCus">Đã có 10,000 lượt khách</p>
          </div>
          <div className="columnFavorite">
              <img
              className="ImgFav"
              alt="Rectangle"
              src={Favortie1}
              />
              <div className="FavPlace">Đà Nẵng</div>
              <p className="NumberCus">Đã có 17,000 lượt khách</p>
          </div>
          <div className="columnFavorite">
              <img
              className="ImgFav"
              alt="Rectangle"
              src={Favortie2}
              />
              <div className="FavPlace">Đà Lạt</div>
              <p className="NumberCus">Đã có 20,000 lượt khách</p>
          </div>
          <div className="columnFavorite">
              <img
              className="ImgFav"
              alt="Rectangle"
              src={Favortie3}
              />
              <div className="FavPlace">Japan</div>
              <p className="NumberCus">Đã có 15,000 lượt khách</p>
          </div>
          <div className="columnFavorite">
              <img
              className="ImgFav"
              alt="Rectangle"
              src={Favortie4}
              />
              <div className="FavPlace">France</div>
              <p className="NumberCus">Đã có 19,000 lượt khách</p>
          </div>
          <div className="columnFavorite">
              <img
              className="ImgFav"
              alt="Rectangle"
              src={Favortie5}
              />
              <div className="FavPlace">Australia</div>
              <p className="NumberCus">Đã có 12,000 lượt khách</p>
          </div>
        </div>
        <Navbar className="navbar"/>
        <Footer className="footer"/>
      </div>
    </div>
  );
};


export default Main