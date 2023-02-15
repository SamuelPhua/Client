import React from "react";
import cookieBackground from "../../Assets/Images/home-image/cookieBackground.png";
import bestCookie from "../../Assets/Images/home-image/Home-Cookie.png";
import cookies1 from "../../Assets/Images/home-image/Home-PineappleBall.png";
import cookies2 from "../../Assets/Images/home-image/Home-ChocolateChipCookie.png";
import cookies3 from "../../Assets/Images/home-image/Home-DoubleChocChipCookie.png.png";

const BestSeller = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${cookieBackground})` }}
        className=" bg-cover bg-center bg-no-repeat w-full min-h-screen   "
      >
        {/* best seller heading */}
        <h1 className="text-center pt-36 text-[#3670AD]  text-5xl pb-6 tracking-wider font-['Permanent_Marker'] relative">
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
            <img width={323} src={cookies1} alt="" />
            <h5 className="text-[#3670AD] font-medium text-xs tracking-wider pt-3">
              SIGNATURE PINEAPPLE BALL
            </h5>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img width={323} src={cookies2} alt="" />
            <h5 className="text-[#3670AD] font-medium text-xs tracking-wider pt-3">
              SIGNATURE PINEAPPLE BALL
            </h5>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img width={323} src={cookies3} alt="" />
            <h5 className="text-[#3670AD] font-medium text-xs tracking-wider pt-3">
              SIGNATURE PINEAPPLE BALL
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;