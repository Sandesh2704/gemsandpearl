import React from 'react'
import Slider from "react-slick";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import img1 from '../Assets/AddSectionImg/banner-1.jpg'
import img2 from '../Assets/AddSectionImg/banner-3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AddSection() {
    const images = [
        { image: img1},
    { image: img2},
      ];

    var settings = {
        dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1, 
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            swipeToSlide: true,
            cssEase: "ease-in-out", 
      };

  return (
    <div>
  <Slider {...settings} className='overflow-hidden z-0'>
 {images.map((image, index) => (
          <div key={index} className=" ">
            <img src={image.image} alt={`Slide ${index + 1} imges`}  className=" w-full " />
          </div>
        ))}
    </Slider>
    </div>
  )
}

const NextArrow = ({ onClick }) => (
    <div
      className="absolute z-10 right-4 lg:right-16 top-1/2 transform -translate-y-1/2  text-gray-400  hidden md:flex bg-transparent cursor-pointer text-2xl lg:text-4xl"
      onClick={onClick}
    >
     <FaChevronRight/>
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute z-10  left-4 lg:left-16 top-1/2 transform -translate-y-1/2  text-gray-400  hidden md:flex bg-transparent cursor-pointer "
      onClick={onClick}
    >
     <FaChevronLeft className='text-2xl lg:text-4xl'/>
    </div>
  );

