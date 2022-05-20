import '../styles/index.css';
import home_news_img1 from "../assets/images/home_news_img1.png";
import home_news_img2 from "../assets/images/home_news_img2.png";
import home_news_img3 from "../assets/images/home_news_img3.png";
import home_news_img4 from "../assets/images/home_news_img4.png";

function New(){
    return(
        <section className="new">
        <div className="recommend-title">tin tức cập nhật</div>
        <div className="recommend-sub new-sub">Tin tức mới nhất về FUTA Lines và thông tin các tuyến xe</div>
        <div className="container">
            <div className="new-swiper">
                <div className="new-swiper-wrapper swiper-wrapper">
                    <div className="new-swiper-slide swiper-slide">
                        <a href="#">
                            <img src={home_news_img1}alt="" className="new-swiper-img"/>
                            <div className="new-swiper-content">
                                <p> An Tâm Đặt Vé - Thanh Toán Dễ Dàng - Quét Ngay Mã QR</p>
                            </div>
                        </a>
                    </div>
                    <div className="new-swiper-slide swiper-slide">
                        <a href="#">
                            <img src={home_news_img2} alt="" className="new-swiper-img"/>
                            <div className="new-swiper-content">
                                <p> PHƯƠNG TRANG MỞ ĐĂNG KÝ GIỮ CHỖ ONLINE VÉ TẾT NGUYÊN ĐÁN NĂM 2022</p>
                            </div>
                        </a>
                    </div>
                    <div className="new-swiper-slide swiper-slide">
                        <a href="#">
                            <img src={home_news_img3} alt="" className="new-swiper-img"/>
                            <div className="new-swiper-content">
                                <p>Bảng giá vé tết các tuyến Huế, Nha Trang, Cam Ranh, Phan Thiết,An Giang về TP.Hồ Chí
                                    Minh
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="new-swiper-slide swiper-slide">
                        <a href="#">
                            <img src={home_news_img3} alt="" className="new-swiper-img"/>
                            <div className="new-swiper-content">
                                <p>HỖ TRỢ KHÁCH HÀNG ĐỔI TRẢ VÉ DO ẢNH HƯỞNG CỦA DỊCH COVID-19</p>
                            </div>
                        </a>
                    </div>
                    <div className="new-swiper-slide swiper-slide">
                        <a href="#">
                            <img src={home_news_img4} alt="" className="new-swiper-img"/>
                            <div className="new-swiper-content">
                                <p>THƯ CHÚC TẾT XUÂN TÂN SỬU 2021</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <a href="#" className="new-more">Xem thêm</a>
        </div>
    </section>
    );
}

export default New;