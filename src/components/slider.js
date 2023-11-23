import Slider from "react-slick";
import background from '../assets/img/background1.webp';
import background2 from '../assets/img/background2.webp';
import background3 from '../assets/img/background3.webp';
import background4 from '../assets/img/background4.webp';
import background5 from '../assets/img/background5.webp';
import background6 from '../assets/img/background6.webp';


export default function BackgroundSlider() {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <Slider{...settings} className="slider_wrapper">
            <div className="slide">
                <img src={background} alt="" />
            </div>
            <div className="slide">
                <img src={background2} alt="" />
            </div>
            <div className="slide">
                <img src={background3} alt="" />
            </div>
            <div className="slide">
                <img src={background4} alt="" />
            </div>
            <div className="slide">
                <img src={background5} alt="" />
            </div>
            <div className="slide">
                <img src={background6} alt="" />
            </div>
        </Slider>
    )
}