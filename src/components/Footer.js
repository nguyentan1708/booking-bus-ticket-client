import '../styles/index.css';
import home_footer_subscribe from "../assets/images/home-footer-subscribe.png";
import home_footer_bottom1 from "../assets/images/home-footer-bottom1.png";
import home_footer_bottom2 from "../assets/images/home-footer-bottom2.png";
import home_footer_bottom3 from "../assets/images/home-footer-bottom3.png";
import home_footer_bottom4 from "../assets/images/home-footer-bottom4.png";

function Footer(){
    return (
        <footer className ="footer">
        <div className ="container">
            <div className ="footer-list">
                <div className ="footer-item footer-info">
                    <h3 className ="footer-title footer-info-title">Tổng đài đặt vé và CSKH</h3>
                    <div className ="footer-info-local">
                        <div className ="footer-info-phone"><a href="tel:19006067">1900 6067</a></div>
                        <a href="#" className ="footer-info-sub">
                            <img src={home_footer_subscribe} alt="" className="footer-info-img"/>
                        </a>
                    </div>
                    <p className ="footer-info-name">CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG FUTA BUS LINES</p>
                    <p className ="footer-info-address"> Địa chỉ: 468-468A Lê Văn Lương, P.Tân Phong, Q.7, TP Hồ Chí Minh.
                    </p>
                    <p className ="footer-info-mail">Email: <a href="mailto:hotro@futabus.vn">hotro@futabus.vn</a></p>
                    <div className ="footer-info-contact">
                        <p className ="footer-info-call">Điện thoại: <a href="tel:02838386852">028 3838 6852</a></p>
                        <p className ="footer-info-call">Fax: <a href="tel:02838386853">028 3838 6853</a></p>
                    </div>
                </div>
                <div className ="footer-item footer-line">
                    <h3 className ="footer-title footer-line-title">FUTA Bus Lines</h3>
                    <div className ="footer-nav">
                        <ul className ="footer-nav-left">
                            <li className ="footer-nav-item">
                                <i className ='bx bx-chevrons-right footer-nav-icon'></i>
                                <a href="#" className ="footer-nav-link">Về chúng tôi</a>
                            </li>
                            <li className ="footer-nav-item">
                                <i className ='bx bx-chevrons-right footer-nav-icon'></i>
                                <a href="#" className ="footer-nav-link">Lịch trình</a>
                            </li>
                            <li className ="footer-nav-item">
                                <i className ='bx bx-chevrons-right footer-nav-icon'></i>
                                <a href="#" className ="footer-nav-link">Tin tức</a>
                            </li>
                            <li className ="footer-nav-item">
                                <i className ='bx bx-chevrons-right footer-nav-icon'></i>
                                <a href="#" className ="footer-nav-link">Tuyển dụng</a>
                            </li>
                              <li className ="footer-nav-item">
                                <i className ='bx bx-chevrons-right footer-nav-icon'></i>
                                <a href="#" className ="footer-nav-link">Tra cứu thông tin đặt vé</a>
                            </li>
                        </ul>
                        <ul className ="footer-nav-right">
                            <li className ="footer-nav-item">
                                <i className ='bx bx-chevrons-right footer-nav-icon'></i>
                                <a href="#" className ="footer-nav-link">Điều khoản sử dụng</a>
                            </li>
                            <li className ="footer-nav-item">
                                <i className ='bx bx-chevrons-right footer-nav-icon'></i>
                                <a href="#" className ="footer-nav-link">Hỏi đáp</a>
                            </li>
                            <li className ="footer-nav-item">
                                <i className ='bx bx-chevrons-right footer-nav-icon'></i>
                                <a href="#" className ="footer-nav-link">Hướng dẫn đặt vé trên Web</a>
                            </li>
                            <li className ="footer-nav-item">
                                <i className ='bx bx-chevrons-right footer-nav-icon'></i>
                                <a href="#" className ="footer-nav-link">Hướng dẫn đặt vé trên App</a>
                            </li>
                            <li className ="footer-nav-item">
                                <i className ='bx bx-chevrons-right footer-nav-icon'></i>
                                <a href="#" className ="footer-nav-link">Mạng lưới văn phòng</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className ="footer-item footer-connect">
                    <div className ="footer-connect-item">
                        <h3 className ="footer-title footer-connect-title">kết nối với chúng tôi</h3>
                        <div className ="footer-connect-link">
                            <a href="#" className ="footer-connect-social"><img src="./images/fb.png" alt=""/></a>
                            <a href="#" className ="footer-connect-social"><img src="./images/ytb.png" alt=""/></a>
                        </div>
                    </div>
                    <div className ="footer-connect-item">
                        <h3 className ="footer-title footer-connect-title">tải app futa</h3>
                        <div className ="footer-connect-link">
                            <a href="#" className ="footer-connect-app"><i className ='bx bxl-apple'></i>App Store</a>
                            <a href="#" className ="footer-connect-app"><i className ='bx bxl-play-store'></i>CH Play</a>
                        </div>
                    </div>
                </div>
                <div className ="footer-item footer-feature">
                    <a href="#" className ="footer-feature-item">
                        <img src={home_footer_bottom1} alt="" className ="footer-feature-img"/>
                    </a>
                    <a href="#" className ="footer-feature-item">
                        <img src={home_footer_bottom2} alt="" className ="footer-feature-img"/>
                    </a>
                    <a href="#" className ="footer-feature-item">
                        <img src={home_footer_bottom3} alt="" className ="footer-feature-img"/>
                    </a>
                    <a href="#" className ="footer-feature-item">
                        <img src={home_footer_bottom4} alt="" className ="footer-feature-img"/>
                    </a>
                </div>
            </div>
            <div className ="footer-end">
                &copy; 2022 | Bản quyền thuộc về Công ty Cổ Phần Xe Khách Phương Trang FUTA Bus Lines | www.futabus.vn |
                Chịu trách nhiệm nội dung: Đinh Văn Huỳnh
            </div>
        </div>
    </footer>
    )
}

export default Footer;