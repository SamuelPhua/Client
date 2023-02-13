import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import carouselData from "./carouselData";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

function ArrowLeft(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowDropleft
        style={{
          ...style,
          marginLeft: "-50px",
          marginTop: "-45px",
          color: "grey",
          opacity: 0.5,
          fontSize: "35px",
        }}
      />
    </div>
  );
}

function ArrowRight(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowDropright
        style={{
          ...style,
          marginLeft: "-50px",
          marginTop: "-45px",
          color: "grey",
          opacity: 0.5,
          fontSize: "35px",
        }}
      />
    </div>
  );
}

const Carousel = () => {
  const renderSlides = () =>
    carouselData.map((item, index) => (
      <div key={index}>
        <a target="_blank" href={item.articleUrl}>
          <img className="w-10/12 h-5/5" src={item.imgUrl} />
          <div className="mt-5 ml-[-100px] text-xs font-montserrat text-black text-center">
            {item.text}
          </div>
        </a>
      </div>
    ));

  return (
    <div className="p-20 ml-24">
      <Slider
        dots={true}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={false}
        autoplaySpeed={3000}
        prevArrow={<ArrowLeft />}
        nextArrow={<ArrowRight />}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
};

export default Carousel;
