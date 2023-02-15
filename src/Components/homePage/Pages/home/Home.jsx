import React, { useEffect } from "react";
import BakedLove from "./BakedLove";
import BestSeller from "./BestSeller";
import Brands from "./Brands";
import CustomOrders from "./CustomOrders";
import Hero from "./Hero";

const Home = ({ setShowShipAlert, setShowNav, setShowFooter }) => {
  useEffect(() => {
    setShowShipAlert(true);
    setShowNav(true);
    setShowFooter(true);
  }, []);

  return (
    <div>
      <Hero />
      <BestSeller />
      <CustomOrders></CustomOrders>
      <BakedLove />
      <Brands />
    </div>
  );
};

export default Home;
