import React from "react";
import bigimage from "../assets/bigimage.png";
import { images, description } from "../Varlables/Constants";

const numberOfImages = 17;

function Shop() {
  const handleClick = (imageNumber) => {
    // perform our routes here (can use useNavigate to route to the individual cookie)
    console.log(`Image${imageNumber} clicked`);
  };
  return (
    <div>
      <h1>
        <img src={bigimage} style={{ width: "100%" }} />
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "16px",
          width: "100%",
        }}
      >
        {Array.from({ length: numberOfImages }, (_, i) => {
          const imageNumber = i + 1;

          return (
            <div
              key={imageNumber}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={images[i]}
                style={{ width: "50%", height: "70%" }}
                onClick={() => handleClick(imageNumber)}
              />
              <p style={{ color: "black" }}>{description[i]}</p>
            </div>
          );
        })}
      </div>
      {/* <Footer Bar /> */}
    </div>
  );
}

export default Shop;
