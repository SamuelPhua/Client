import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { images, description } from "../Varlables/Constants";
import Banner from "./reusables/Banner";
import useFetch from "../customHooks/useFetch";

const numberOfImages = 17;

function Shop() {
  const navigate = useNavigate();
  const { fetchData, isLoading, data, error } = useFetch();
  const [showName, setShowName] = useState("");

  const navigateToProduct = (productName) => {
    navigate(`/product/${productName}`);
  };

  useEffect(() => {
    const fetchUrl = "http://127.0.0.1:5001/products/getAllProduct";
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringfy(data.name),
    };

    fetchData(fetchUrl, fetchOptions);
  }, []);

  useEffect(() => {
    console.log(data);
    setShowName(data);
  }, [data]);

  return (
    <div className="motion-safe:animate-fadeIn">
      <Banner
        img="src/assets/imagesShop/bigimage.png"
        title="SHOP ALL"
        titleColor="white"
      />

      <div className="grid grid-cols-3 w-10/12 mt-20 mb-10 place-items-center mx-auto gap-y-24">
        {Array.from({ length: numberOfImages }, (_, i) => {
          const imageNumber = i + 1;

          return (
            <div
              key={imageNumber}
              className="items-center cursor-pointer p-8 rounded-lg hover:bg-slate-200 transition duration-1000 ease-in-out"
            >
              <img
                src={images[i]}
                className="w-48 h-48 mx-auto"
                onClick={() => navigateToProduct(description[i])}
              />
              <p
                className="text-darkBlueFont mt-4 text-center"
                onClick={() => navigateToProduct(description[i])}
              >
                {description[i]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
