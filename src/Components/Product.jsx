import React, { useState, useEffect } from "react";
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

  // State to toggle displayed cookie type image
  const [displayedProductType, setDisplayedProductType] = useState("pouch");

  // check if product exists
  let productExists = false;
  console.log(Object.keys(productImages));
  for (let i = 0; i < Object.keys(productImages).length; i++) {
    if (Object.keys(productImages)[i].includes(name)) {
      productExists = true;
      break;
    }
  }
  // Object.keys(productImages).map((item) => {
  //   if (item.includes(name)) productExists = true;
  // });
  // useEffect(() => {
  //   console.log(name);
  //   console.log(Object.keys(productImages));
  //   for (let i = 0; i < Object.keys(productImages).length; i++) {
  //     if (Object.keys(productImages)[i].includes(name)) console.log(true);
  //   }
  //   Object.keys(productImages).map((item) => {
  //     if (item.includes(name)) productExists = true;
  //   });
  // }, []);

  // handle toggled selection of cookie type display
  const handleProductSelection = (event) => {
    event.preventDefault();
    setDisplayedProductType(event.target.id);
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
      {productExists && (
        <div className="flex flex-wrap w-7/10 mx-auto mt-10">
          {/* #3 LEFT: Cookie displays */}
          <div className="w-5/12">
            {/* main image - toggled by selection */}
            <img
              className="border-2 rounded-md p-8"
              src={productImages[name][displayedProductType]}
            ></img>

            {/* div of 3 options > click to replace ^ */}
            <div className="flex flex-wrap justify-around mt-20">
              {Object.keys(productImages[name]).map((productType) => {
                return (
                  <img
                    id={productType}
                    className="border-2 rounded-md opacity-50 hover:opacity-100 focus:opacity-100 w-3/12 p-2"
                    src={productImages[name][productType]}
                    onClick={handleProductSelection}
                  ></img>
                );
              })}
            </div>
          </div>

          {/* #4 Cookie options and descriptions */}
          <div className="w-7/12">
            <div className="bg-slate-600">HELLO</div>
          </div>
        </div>
      )}
      {!productExists && (
        <h2 className="tracking-wide font-montserrat text-darkBlueFont text-xxs md:text-xxs w-7/10 mx-auto mt-10">
          Sorry, {name} is currently out of stock.
        </h2>
      )}
    </>
  );
};

export default Product;
