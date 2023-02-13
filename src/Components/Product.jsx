import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productImages } from "../Varlables/Constants";
import OrangeButton from "../Components/reusables/OrangeButton";

const Product = ({ shoppingCart, handleAddToCart }) => {
  // params :name to get cookie product
  const { name } = useParams();
  // Navigate back to the shop all page
  const navigate = useNavigate();
  const navigateToShop = () => {
    navigate("/shop");
  };

  ///////////
  // STATES
  ///////////
  const [displayedProductType, setDisplayedProductType] = useState("pouch");
  const [cartInputs, setCartInputs] = useState({
    name: "",
    price: "",
    weight: "",
    packaging: "",
    quantity: 0,
  });

  // check if product exists
  let productExists = false;
  // console.log(Object.keys(productImages));
  for (let i = 0; i < Object.keys(productImages).length; i++) {
    if (Object.keys(productImages)[i].includes(name)) {
      productExists = true;
      break;
    }
  }

  // handle toggled selection of cookie type display
  const handleProductSelection = (event) => {
    event.preventDefault();
    setDisplayedProductType(event.target.id);
  };

  const handleAddToCartButton = (event) => {
    // event.preventDefault();
    // TODO - pop up modal to show:
    // 1. added cart item
    // 2. + previous cart items
    // 3 lift new item up to App and add to cart (DONE)
    handleAddToCart({
      name: name,
      price: "5.80",
      weight: "100g",
      packaging: "Kraft Pouch",
      quantity: 2,
    });
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
              className="border-2 rounded-md p-8 w-full"
              src={productImages[name][displayedProductType]}
            ></img>

            {/* div of 3 options > click to replace ^ */}
            <div className="flex flex-wrap justify-around mt-20">
              {Object.keys(productImages[name]).map((productType, ind) => {
                return (
                  <img
                    key={ind}
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
          <div className="w-7/12 pl-20">
            <h2 className="tracking-wide text-left font-permanentMarker text-darkBlueFont text-3xl md:text-3xl mb-8">
              {name}
            </h2>
            <h3 className="tracking-wide text-left font-montserrat text-darkBlueFont text-3xl md:text-3xl mb-8">
              $ 5.80
            </h3>
            <p className="tracking-normal text-left font-montserrat text-darkBlueFont text-xs md:text-xs mb-8">
              Melt-in-your mouth and packed with chunks of chocolate goodness,
              our signature chocolate chip cookies are perfect if you are
              looking to satisfy your sweet tooth!
            </p>
            <p className="tracking-normal text-left font-montserrat text-darkBlueFont text-xs md:text-xs mb-8">
              All our cookies are baked to order and will be ready to be
              delivered to you within 2-4 working days of placing your order.
            </p>

            <h5 className="tracking-wide text-left font-bold font-montserrat text-darkBlueFont text-xs md:text-xs mb-8">
              Weight
            </h5>
            {/* buttons for options */}
            <div className="flex flex-wrap mb-8">
              <h2>display buttons</h2>
            </div>

            <h5 className="tracking-wide text-left font-bold font-montserrat text-darkBlueFont text-xs md:text-xs mb-8">
              Packaging
            </h5>
            {/* buttons for options */}
            <div className="flex flex-wrap mb-8">
              <h2>display buttons</h2>
            </div>

            <h5 className="tracking-wide text-left font-bold font-montserrat text-darkBlueFont text-xs md:text-xs mb-8">
              Quantity
            </h5>
            {/* buttons for adding and reducing */}
            <div className="flex flex-wrap mb-8">
              <h2>display quantity</h2>

              {/* #5 Add to cart button */}
              <OrangeButton
                displayName={"ADD TO CART"}
                width="10rem"
                onClick={handleAddToCartButton}
              />
            </div>
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
