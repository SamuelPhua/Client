import React from "react";
import flower from "../../Assets/Images/home-image/Home-Flower.png";
import brand1 from "../../Assets/Images/home-image/AboutUs-DBSLogo.png";
import brand2 from "../../Assets/Images/home-image/AboutUs-CPFfLogo.png";
import brand3 from "../../Assets/Images/home-image/AboutUs-MetaLogo.png";
import brand4 from "../../Assets/Images/home-image/AboutUs-FrasersHospitalityLogo.png";
import brand5 from "../../Assets/Images/home-image/AboutUs-STEngineeringLogo.png";
import brand6 from "../../Assets/Images/home-image/About Us-NationalUniversityHospital.png";
import brand7 from "../../Assets/Images/home-image/AboutUs-AppleLogo.png";
import brand8 from "../../Assets/Images/home-image/AboutUs-IRASLogo.png";
import brand9 from "../../Assets/Images/home-image/AboutUs-MandarinOrientalLogo.png";
import brand10 from "../../Assets/Images/home-image/AboutUs-KPMGLogo.png";
import brand11 from "../../Assets/Images/home-image/AboutUs-MindefLogo.png";
import brand12 from "../../Assets/Images/home-image/AboutUs-MSFLogo.png";
import brand13 from "../../Assets/Images/home-image/AboutUs-NTULogo.png";
import brand15 from "../../Assets/Images/home-image/AboutUs-SMULogo.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1200,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const images = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    // brand7,
    // brand8,
    brand9,
    // brand10,
    brand11,
    brand12,
    brand13,
    brand15,
  ];
  return (
    <div>
      <div className="py-16 ">
        <h1 className=" text-center pt-36 text-[#3670AD] uppercase  text-5xl pb-6 tracking-wider font-['Permanent_Marker'] relative">
          Brands we’ve worked With
          <img
            width={200}
            className="absolute left-44 -top-14"
            src={flower}
            alt="cookie-image"
          />
        </h1>
        <Slider {...settings} className="overflow-hidden">
          {images.map((m, index) => (
            <div key={index}>
              <img className="object-contain w-[200px] h-[200px]" src={m} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Brands;
