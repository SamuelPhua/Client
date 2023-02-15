                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <div className="navBAR"></div>                                                                                                                                                                                                                                                              
        <div className="banner4">
          <video
            playsInline
            width={1500}
            height={500}
            autoPlay={"autoplay"}
            preload="auto"
            loop
            controls
            muted
          >
            <source src="src\pages\Hero Banner.mp4" type="video/mp4" />
          </video>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="grid grid-cols-3 gap-4 px-4 max-w-6xl mx-auto mt-20">
          <div className="col-span-3 flex justify-center">
            <h1 className="text-4xl font-bold uppercase">Kittens!</h1>
          </div>

          <div className="col-span-3 md:col-span-1 flex flex-col items-center">
            <img
              src="src\assets\imagesShop\image1.png"
              className="rounded-full "
            />
            <h2>Kitten 1</h2>
          </div>

          <div className="col-span-3 md:col-span-1 flex flex-col items-center">
            <img
              src="src\assets\imagesShop\image2.png"
              className="rounded-full"
            />
            <h2>Kitten 2</h2>
          </div>

          <div className="col-span-3 md:col-span-1 flex flex-col items-center">
            <img
              src="src\assets\imagesShop\image3.png"
              className="rounded-full"
            />
            <h2>Kitten 3</h2>
          </div>
        </div>

        <div className="Custom-Orders">
          <h1 className="space-y-4 text-center">Custom Orders</h1>

          <div className="customOrders-div flex space-x-4 ">
            <div className="text pt-36 pl-20 ">
              <h6>
                Have a special occassion or event that you need
                <br />
                customised gifts for?
                <br />
                <br />
                We would love to hear from you and be a part of your special
                <br />
                day!
              </h6>
              <br />
              <button>Read More</button>
            </div>

            <div className="image">
              <img
                src="src\assets\imagesHome\Home-FPJars.jpg"
                className="rounded-full w-90"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
