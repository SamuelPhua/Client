import React from "react";
import bigimage from "../assets/bigimage.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.jpg";

const numberOfImages = 17;

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
];

const description = [
  "PINEAPPLE SIGNATURE BALL",
  "CHOCOLATE CHIP COOKIES",
  "DOUBLE CHOCO CHIP COOKIES",
  "MACADAMIA BUTTER COOKIES",
  "ALMOND CHOCOLATE COOKIES",
  "MACADAMIA CHOCOLATE COOKIES",
  "SEA SALT CHOCOLATE COOKIES",
  "OATMEAL CRANBERRY COOKIES",
  "PECAN BUTTERSCOTCH COOKIES",
  "WHITE ALMOND COOKIE",
  "FRENCH SABLE COOKIES",
  "GINGERBREAD MAN",
  "XMAS FRUIT CAKE",
  "EARL GREY CHIFFON CAKE",
  "MOCHA CHIFFON CAKE",
  "ROSE LYCHEE CHIFFON CAKE",
  "BIG COOKIES BOX SET",
];

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
                style={{ width: "50%" }}
                onClick={() => handleClick(imageNumber)}
              />
              <p>{description[i]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
