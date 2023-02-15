import React, { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import { productImages } from "../Varlables/Constants";

import ButtonOrange from "./reusables/ButtonOrange";
import ButtonWhite from "./reusables/ButtonWhite";
import ButtonSelected from "./reusables/ButtonSelected";
import ButtonAddMinus from "./reusables/ButtonAddMinus";

const Product = ({ shoppingCart, handleAddToCart }) => {
  ///////////////////
  // const variables
  ///////////////////
  // params :name to get cookie product
  const { name } = useParams(); // name w/ all CAPS
  function toPascalCase(str) {
    const splitStr = str.toLowerCase().split(" ");
    let newStr = "";
    for (const word of splitStr) {
      newStr += word[0].toUpperCase() + word.slice(1) + " ";
    }
    return newStr;
  }
  const pascalName = toPascalCase(name); // name w/ Capital Convention

  // check if product exists
  let productExists = false;
  // console.log(Object.keys(productImages));
  for (let i = 0; i < Object.keys(productImages).length; i++) {
    if (Object.keys(productImages)[i].includes(name)) {
      productExists = true;
      break;
    }
  }

  const navigate = useNavigate();
  // Navigate back to the shop all page
  const navigateToShop = () => {
    navigate("/shop");
  };
  // Navigate to view cart page (view cart button in modal)
  const navigateToCart = () => {};

  ///////////////
  // custom Hook
  ///////////////
  const { fetchData, isLoading, data, error } = useFetch();

  ///////////
  // STATES
  ///////////
  // all of product's info based on current option
  const [productInfo, setProductInfo] = useState({});
  // available options (for weight)
  const [weightOptions, setWeightOptions] = useState({
    "100g": false,
    "150g": false,
    "200g": false,
    "350g": false,
  });
  const [packagingOptions, setPackagingOptions] = useState({
    "Kraft Pouch": false,
    Bottle: false,
  });
  // current options
  const [optionsClicked, setOptionsClicked] = useState({
    weight: "100g",
    packaging: "Kraft Pouch",
    quantity: 1,
  });
  // change other options based on selected options
  const [unitPrice, setUnitPrice] = useState("");
  const [productImage, setProductImage] = useState(
    productImages[name][optionsClicked.packaging]
  );
  const [displayedProductType, setDisplayedProductType] = useState(
    optionsClicked.packaging
  );
  // cart states:
  const [hasAdded, setHasAdded] = useState(false);
  const [cartInputs, setCartInputs] = useState({
    name: "",
    price: "",
    weight: "",
    packaging: "",
    quantity: 0,
  });

  /////////////
  // FUNCTIONS
  /////////////
  function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  }

  function displayedOptions(loadedData) {
    // set display options for available weight and packaging in data
    const newWeightOptions = {};
    const newPackagingOptions = {};
    loadedData.price.map((option) => {
      if (Object.keys(weightOptions).includes(option.weight)) {
        newWeightOptions[option.weight] = true;
      }
      if (Object.keys(packagingOptions).includes(option.packaging)) {
        newPackagingOptions[option.packaging] = true;
      }
    });
    setWeightOptions(newWeightOptions);
    setPackagingOptions(newPackagingOptions);
  }

  function getCurrentInfo(wgt, pkg) {
    // set price display on weight and packaing option changes
    // 1. loop through data.price (array of objects)
    let optionPrice = 0;
    data.price.map((optionGroup) => {
      // 2. if data.price.weight === wgt && data.price.packaging === pkg
      if (optionGroup.weight === wgt && optionGroup.packaging === pkg)
        return (optionPrice = optionGroup.sgdPrice);
    });
    // 3. set price to data.price.sgdPrice (rounded to 2dp)
    setUnitPrice((Math.round(optionPrice * 100) / 100).toFixed(2));
    setProductImage(productImages[name][pkg]);
  }

  ///////////
  // EFFECT
  ///////////
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    // call GET API here
    const fetchURL = `http://127.0.0.1:5001/products/getProduct/${pascalName}`;
    const fetchOptions = {
      method: "PUT", // change to POST if possible
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log("first useEffect", productInfo);
    fetchData(fetchURL, fetchOptions);
    setProductData(data);
  }, []);

  // #2 w/ fetched data is not null (check if isObject)
  useEffect(() => {
    // a. check for the options that exist
    if (isObject(data)) {
      // b. set displayedOptions
      displayedOptions(data);

      // c. get price and option's product image
      getCurrentInfo(optionsClicked.weight, optionsClicked.packaging);
      // d. set productInfo state
      setProductInfo({
        name: data.name,
        description: data.description.split("\n"),
        about: data.about,
        price: unitPrice,
        weight: optionsClicked.weight,
        packaging: optionsClicked.packaging,
        // can change to image from database if it's done
        image: productImage, // this returns the location (url) within the src/assets folder, still need to import productImages from Variables/Constants
      });
    }
    // dependency: on data load + option change
    console.log("data useEffect", productInfo);
  }, [data]);

  //////////////////
  // event handlers
  //////////////////
  // handle toggled selection of cookie type display
  const handleProductSelection = (event) => {
    event.preventDefault();
    setDisplayedProductType(event.target.id);
  };

  const handleOptionSelection = (event) => {
    console.log("changing options", event.target.id, event.target.name);
    setOptionsClicked((prevOptionsClicked) => {
      return { ...prevOptionsClicked, [event.target.name]: event.target.id };
    });
    // getUnitPrice();
    // setProductInfo();
  };

  const handleChangeQuantity = (event) => {
    event.preventDefault();
    console.log("changing cookie quantity");
  };

  const handleAddToCartButton = (event) => {
    // event.preventDefault();
    // TODO - pop up modal to show:
    console.log("data", data);
    console.log("productInfo", productInfo);
    console.log("product description", Object.values(productInfo.description));
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
          {pascalName}
        </p>
      </div>

      {/* #2 flex div */}
      {productExists && !isLoading && data && (
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
              $ {productInfo.price}
            </h3>

            {/* display for product description */}
            {Array.isArray(productInfo.description) &&
              productInfo.description.map((paragraph, paraInd) => {
                return (
                  <p
                    key={paraInd}
                    className="tracking-normal text-left font-montserrat text-darkBlueFont text-xs md:text-xs mb-8"
                  >
                    {paragraph}
                  </p>
                );
              })}

            {/* SELECT WEIGHT OPTIONS */}
            <h5 className="tracking-wide text-left font-bold font-montserrat text-darkBlueFont text-xs md:text-xs mb-4">
              Weight
            </h5>
            {/* buttons for weight options */}
            <div className="flex flex-wrap mb-8">
              {Object.entries(weightOptions).map((weightOption) => {
                if (weightOption[1]) {
                  if (weightOption[0] === optionsClicked.weight) {
                    return (
                      <ButtonSelected
                        displayName={weightOption[0]}
                        category="weight"
                        width="5rem"
                        padding="0.2rem"
                        margin="0.1rem 0.5rem 0.1rem 0"
                        onClick={handleOptionSelection}
                      />
                    );
                  } else {
                    return (
                      <ButtonWhite
                        displayName={weightOption[0]}
                        category="weight"
                        width="5rem"
                        padding="0.2rem"
                        margin="0.1rem 0.5rem 0.1rem 0"
                        onClick={handleOptionSelection}
                      />
                    );
                  }
                }
              })}
            </div>

            {/* SELECT PACKAGING OPTIONS */}
            <h5 className="tracking-wide text-left font-bold font-montserrat text-darkBlueFont text-xs md:text-xs mb-4">
              Packaging
            </h5>
            {/* buttons for options */}
            <div className="flex flex-wrap mb-8">
              {Object.entries(packagingOptions).map((option) => {
                if (option[1]) {
                  if (option[0] === optionsClicked.packaging) {
                    return (
                      <ButtonSelected
                        displayName={option[0]}
                        category="packaging"
                        width="10rem"
                        padding="0.2rem"
                        margin="0.1rem 0.5rem 0.1rem 0"
                        onClick={handleOptionSelection}
                      />
                    );
                  } else {
                    return (
                      <ButtonWhite
                        displayName={option[0]}
                        category="packaging"
                        width="10rem"
                        padding="0.2rem"
                        margin="0.1rem 0.5rem 0.1rem 0"
                        onClick={handleOptionSelection}
                      />
                    );
                  }
                }
              })}
            </div>

            {/* SELECT QUANTITY */}
            <h5 className="tracking-wide text-left font-bold font-montserrat text-darkBlueFont text-xs md:text-xs mb-8">
              Quantity
            </h5>
            {/* buttons for quantity update & add to cart */}
            <div className="flex flex-wrap justify-between my-auto mb-8">
              {/* buttons for adding and reducing */}
              <div className="flex flex-wrap w-2/4">
                <ButtonAddMinus
                  displayName="-"
                  padding="0"
                  margin="0 1rem"
                  size="1.5rem"
                  onClick={handleChangeQuantity}
                />
                <p className="tracking-normal text-center font-montserrat text-darkBlueFont text-xs md:text-xs w-2/12 mb-8">
                  {optionsClicked.quantity}
                </p>
                <ButtonAddMinus
                  displayName="+"
                  padding="0"
                  margin="0 1rem"
                  size="1.5rem"
                  onClick={handleChangeQuantity}
                />
              </div>

              {/* #5 ADD TO CART button */}
              <div className="w-2/4">
                <ButtonOrange
                  displayName={"ADD TO CART"}
                  width="14rem"
                  padding="0.6rem"
                  margin="0"
                  onClick={handleAddToCartButton}
                />
              </div>
            </div>

            {/* display about product */}
            <h3 className="tracking-wide text-left font-montserrat text-darkBlueFont text-3xl md:text-3xl mb-12">
              <span className="underline underline-offset-15 decoration-2 decoration-orange">
                About this{" "}
              </span>
              cookie
            </h3>
            {isObject(productInfo.about) &&
              Object.entries(productInfo.about).map((category) => {
                return (
                  <div className="mb-4">
                    {/* title of each info */}
                    <p className="font-bold tracking-normal text-left font-montserrat text-darkBlueFont text-xs md:text-xs mb-4">
                      {toPascalCase(category[0])}
                    </p>
                    {/* info description */}
                    <p className="tracking-normal text-left font-montserrat text-darkBlueFont text-xs md:text-xs mb-8">
                      {category[1]}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {productExists && isLoading && (
        <div className="text-center">
          {/* <LoadingSpinner /> */}
          <h2>LOADING COOKIE...</h2>
        </div>
      )}

      {!isLoading && error && <p> {error}</p>}

      {!productExists && (
        <h2 className="tracking-wide font-montserrat text-darkBlueFont text-xxs md:text-xxs w-7/10 mx-auto mt-10">
          Sorry, {name} is currently out of stock.
        </h2>
      )}
    </>
  );
};

export default Product;
