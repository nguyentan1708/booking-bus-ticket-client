// import '../styles/reset.css';
import "../styles/index.css";
import home_img_logo from "../assets/images/home-img-logo.png";
import home_header_mascot1 from "../assets/images/home-header-mascot1.png";
import home_header_mascot2 from "../assets/images/home-header-mascot2.png";
import vietnam from "../assets/images/VietNam.png";
import uk from "../assets/images/UK.png";
import { Icon, InlineIcon } from "@iconify/react";

function Header() {
  return (
    <header className="header">
      <a href="#" className="header-logo header-logo-top">
        <div>
          <img src={home_img_logo} className="header-logo-img" alt="" />
        </div>
      </a>
      <div className="header-toggle">
        <i className="bx bx-menu header-toggle-menu"></i>
        <i className="bx bx-x header-toggle-close"></i>
      </div>
      <div className="header-side-menu">
        <div className=" header-top">
          <div className="header-wrapper container">
            <a href="#" className="header-logo header-logo-side">
              <h1>
                <img src={home_img_logo} className="header-logo-img" alt="" />
              </h1>
            </a>
            <div className="header-contact">
              <div className="header-contact-phone">
                <Icon icon="mdi:phone" className="bx bxs-phone header-contact-icon"/>
                {/* <i className="bx bxs-phone header-contact-icon"></i> */}
                <span className="header-contact-content">19006067</span>
              </div>
              <div className="header-contact-mail">
                <Icon icon="mdi:email" className="bx bxs-phone header-contact-icon"/>
                {/* <i className="fa-solid fa-envelope header-contact-icon"></i> */}
                <span className="header-contact-content">Hotro@futabus.vn</span>
              </div>
            </div>

            <div className="header-control">
              <div className="header-social">
                <a href="#" className="header-social-link">
                  <Icon icon="mdi:facebook" className="bx bxl-facebook header-social-icon" />
                </a>
                <a href="#" className="header-social-link">
                  <Icon icon="mdi:youtube" className="bx bxl-youtube header-social-icon" />
                </a>
              </div>
              <ul className="header-language-list use-vn">
                <li className="header-language-item">
                  <img src={vietnam} alt="" className="header-language-image" />
                  <span className="header-language-text">VN</span>
                </li>
                <li className="header-language-item use-uk">
                  <img src={uk} alt="" className="header-language-image" />
                  <span className="header-language-text">EN</span>
                </li>
              </ul>
              <a href="#" className="header-login">
                <Icon icon="mdi:user" className="bx bxs-user-circle header-login-icon"/>
                <span className="header-login-text">Đăng nhập</span>
              </a>
            </div>
          </div>
        </div>
        <div className="header-bottom container">
          <a href="#" className="header-logo header-logo-inner">
            <h1>
              <img src={home_img_logo} className="header-logo-img" alt="" />
            </h1>
          </a>
          <ul className="header-nav">
            <li className="header-nav-item header-nav-active">
              <a href="#" className="header-nav-link">
                trang chủ
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                lịch trình
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                tin tức
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                tuyển dụng
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                liên hệ
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                hóa đơn
              </a>
            </li>
            <li className="header-nav-item">
              <a href="#" className="header-nav-link">
                về chúng tôi
              </a>
            </li>
          </ul>
          <img
            src={home_header_mascot1}
            alt=""
            className="header-bottom-imgleft header-bottom-img"
          />
          <img
            src={home_header_mascot2}
            alt=""
            className="header-bottom-imgright header-bottom-img"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
