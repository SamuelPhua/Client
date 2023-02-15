import React from "react";
import  Footer  from "../../shared/Footer/Footer";
import  BakedLove  from "./BakedLove";
import  BestSeller  from "./BestSeller";
import Brands  from "./Brands";
import  CustomOrders  from "./CustomOrders";
import  Hero  from "./Hero";
import  Nav  from "./Nav";

 const Home = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <CustomOrders></CustomOrders>
      <BakedLove/>
      <Brands/>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;