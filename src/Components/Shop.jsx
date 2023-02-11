import React from "react";
import bigimage from "../assets/imagesShop/bigimage.png";
import { images, description } from "../Varlables/Constants";
import Banner from "./reusables/Banner";

const numberOfImages = 17;

function Shop() {
  const handleClick = (imageNumber) => {
    // perform our routes here (can use useNavigate to route to the individual cookie)
    console.log(`Image${imageNumber} clicked`);
  };
  return (
    <div>
      <Banner
        img="src/assets/imagesShop/bigimage.png"
        title="SHOP ALL"
        titleColor="white"
      />

      <div className="grid grid-cols-3 w-10/12 mt-20 mb-10 place-items-center mx-auto gap-y-24">
        {Array.from({ length: numberOfImages }, (_, i) => {
          const imageNumber = i + 1;

          return (
            <div key={imageNumber} className="items-center">
              <img
                src={images[i]}
                className="w-48 h-48 mx-auto"
                onClick={() => handleClick(imageNumber)}
              />
              <p className="text-darkBlueFont mt-4 text-center">
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
