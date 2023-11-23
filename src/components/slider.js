import Slider from "react-slick";
import background from '../assets/img/208638.jpg';
import background2 from '../assets/img/wp2203800-blade-runner-2049-wallpapers.jpg'



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
        adaptiveHeight: true
    };
    return (
        <Slider{...settings} className="slider_wrapper">
            <div className="slide">
                <img src={background} alt="" />
            </div>
            <div className="slide">
                <img src={background2} alt="" />
            </div>

        </Slider>
    )
}