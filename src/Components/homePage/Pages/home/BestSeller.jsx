import React from "react";
import cookieBackground from "../../Assets/Images/home-image/cookieBackground.png";
import bestCookie from "../../Assets/Images/home-image/Home-Cookie.png";
import cookies1 from "../../Assets/Images/home-image/Home-PineappleBall.png";
import cookies2 from "../../Assets/Images/home-image/Home-ChocolateChipCookie.png";
import cookies3 from "../../Assets/Images/home-image/Home-DoubleChocChipCookie.png.png";
import {Link} from 'react-router-dom'

const BestSeller = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${cookieBackground})` }}
        className=" bg-cover bg-center bg-no-repeat w-full min-h-screen   "
      >
        {/* best seller heading */}
        <h1 className="bounce text-center pt-36 text-[#3670AD]  text-5xl pb-6 tracking-wider font-['Permanent_Marker'] relative">
          Best Sellers
          <img
            width={200}
            className="absolute left-96 top-14"
            src={bestCookie}
            alt="cookie-image"
          />
        </h1>

        {/* cookie collections */}
        <div className="py-5 flex justify-center items-center gap-x-32">
          <div className="flex flex-col items-center justify-center">
          <Link to="/product/PINEAPPLE%20SIGNATURE%20BALL"> <img width={323} src={cookies1} alt="" /></Link>
            <h5 className="text-[#3670AD] font-montserrat font-medium text-xs tracking-wider pt-3">
              SIGNATURE PINEAPPLE BALL
            </h5>
          </div>
          <div className="flex flex-col items-center justify-center">
          <Link to="/product/CHOCOLATE%20CHIP%20COOKIES"> <img width={323} src={cookies2} alt="" /></Link>
            <h5 className="text-[#3670AD] font-montserrat font-medium text-xs tracking-wider pt-3">
              CHOCOLATE CHIP COOKIES
            </h5>
          </div>
          <div className="flex flex-col items-center justify-center">
          <Link to="/product/DOUBLE%20CHOCO%20CHIP%20COOKIES">   <img width={323} src={cookies3} alt="" /></Link>
            <h5 className="text-[#3670AD] font-montserrat font-medium text-xs tracking-wider pt-3">
              DOUBLE CHOCO CHIP COOKIES
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;