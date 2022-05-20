import '../styles/index.css';
import home_slick_slide1 from '../assets/images/home-slick-slide1.jpg';
function Banner(){
    return(
        <section class="banner">
        <div class="container">
            <div class="banner-wrapper">
                <div class="swiper banner-swiper">
                    <div class="banner-swiper-wrapper swiper-wrapper">
                        <div class="banner-swiper-item swiper-slide">
                            <a href="#" class="banner-swiper-link">
                                <img src={home_slick_slide1} alt="" class="banner-swiper-img"/>
                            </a>
                        </div>
                        <div class="banner-swiper-item swiper-slide">
                            <a href="#" class="banner-swiper-link">
                                <img src="./images/home-slick-slide2.png" alt="" class="banner-swiper-img"/>
                            </a>
                        </div>
                        <div class="banner-swiper-item swiper-slide">
                            <a href="#" class="banner-swiper-link">
                                <img src="./images/home-slick-slide3.jpg" alt="" class="banner-swiper-img"/>
                            </a>
                        </div>
                    </div>
                    <div class="banner-swiper-pagination swiper-pagination"></div>
                    <div class="banner-swiper-button swiper-button-prev"></div>
                    <div class="banner-swiper-button swiper-button-next"></div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Banner;