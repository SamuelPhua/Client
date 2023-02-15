import React from "react";
import splash from "../../Assets/Images/home-image/Home-Splash.png";
import fpJars from "../../Assets/Images/home-image/Home-FPJars.jpg";
import {Link} from "react-router-dom"
const CustomOrders = () => {
  const handleScrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    // custom order section
    <div className="w-full min-h-screen">
      {/* custon order heading */}
      <h1 className="bounce text-center pt-36 text-[#3670AD]  text-5xl pb-6 tracking-wider font-['Permanent_Marker'] relative">
        CUSTOM ORDERS
        <img
          width={200}
          className="absolute mr-12 rotate-45 right-96 top-1"
          src={splash}
          alt="cookie-image"
        />
      </h1>

      {/* descriptions with image */}
      <div className="flex items-center justify-between font-montserrat px-16 py-8">
        <div>
          <h3 className="font-medium text-xs tracking-wide text-[#3670AD]">
            Have a special occasion or event that you need customised gifts for?{" "}
          </h3>
          <h3 className="font-medium text-xs tracking-wide text-[#3670AD] pt-6">
            We would love to hear from you and be a part of your special day!
          </h3> 
          <Link to="/about-us">    <button className="text-white bg-[#FF7C40] hover:bg-[#FF6347]  rounded-full px-12 py-5 text-xs font-bold mt-8" onClick={handleScrollToTop}>
            READ MORE
          </button></Link>
        </div>
        <img width={694} src={fpJars} className="rounded-3xl" alt="" />
      </div>
    </div>
  );
};

export default CustomOrders;