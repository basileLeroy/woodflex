import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeCarousel = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }
    const slides = [
        <img className="m-auto shadow-2xl rounded-md" src="https://picsum.photos/800/300/?random" alt="1" />,
        <img className="m-auto shadow-2xl rounded-md" src="https://picsum.photos/800/301/?random" alt="2" />,
        <img className="m-auto shadow-2xl rounded-md" src="https://picsum.photos/800/302/?random" alt="3" />,
        <img className="m-auto shadow-2xl rounded-md" src="https://picsum.photos/800/303/?random" alt="4" />,
        <img className="m-auto shadow-2xl rounded-md" src="https://picsum.photos/800/304/?random" alt="5" />,
    ];

    return (
        <div className="w-full h-auto">
            <Slider {...settings}>
                {slides.map((image, index) => {
                    return (
                        <div>
                            {image}
                        </div>
                    )
                })}
            </Slider>
        </div>
)
}

export { HomeCarousel };