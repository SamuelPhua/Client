import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productImages } from "../Varlables/Constants";

const Product = () => {
  // params :name to get cookie product
  const { name } = useParams();
  // Navigate back to the shop all page
  const navigate = useNavigate();
  const navigateToShop = () => {
    navigate("/shop");
  };

  return (
    <>
      {/* #1 Shop > Cookie name links */}
      <div className="flex flex-wrap w-7/10 mx-auto mt-10">
        <p
          className="hover:text-orange cursor-pointer tracking-wide font-montserrat text-darkBlueFont w-20 text-xxs md:text-xxs mb-1"
          onClick={navigateToShop}
        >
          Shop
        </p>
        <p className="tracking-wide font-montserrat text-darkBlueFont w-12 text-xxs md:text-xxs mb-1">
          &#62;
        </p>
        <p className="tracking-wide font-montserrat text-darkBlueFont text-xxs md:text-xxs mb-1">
          {name}
        </p>
      </div>

      {/* #2 flex div */}
      <div className="flex flex-wrap w-7/10 mx-auto mt-10">
        {/* #3 LEFT: Cookie displays */}
        <div className="w-5/12">
          {/* Object.keys(productImages) */}
          {<img src={productImages[name].jar}></img>}
        </div>

        {/* #4 Cookie options and descriptions */}
        <div className="w-7/12">
          <div className="bg-slate-600">HELLO</div>
        </div>
      </div>
    </>
  );
};

export default Product;
