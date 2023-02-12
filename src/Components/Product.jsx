import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
      <div className="w-10/12 px-10 mt-10 mx-auto">
        <p className="tracking-wide font-montserrat text-darkBlueFont text-xxs md:text-xxs mb-1">
          <span
            className="hover:text-orange cursor-pointer"
            onClick={navigateToShop}
          >
            Shop
          </span>{" "}
          &#62; {name}
        </p>
      </div>

      {/* #2 flex div */}

      {/* #3 LEFT: Cookie displays */}

      {/* #4 Cookie options and descriptions */}
    </>
  );
};

export default Product;
