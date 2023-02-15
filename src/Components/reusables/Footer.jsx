import React from "react";
import ContactDetails from "../contactUs/ContactDetails";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../homePage/Pages/home/Home.css'
const Footer = () => {
  const handleScrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <div className="flex flex-row justify-around items-center bg-[url(src/assets/imagesContactUs/Footer-wave.png)] h-[320px] bg-cover bg-no-repeat text-darkBlueFont">
      <div className="flex flex-row mt-10">
        <div className="mr-20">
          <h1 className="font-permanentMarker text-xs">SUPPORT</h1>
          <table className="font-montserrat text-base">
            <tbody>
              <tr>
                <td>
                  <Link to="/faq">FAQ</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/t&c">Terms & Conditions</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="font-permanentMarker text-xs">CONTACT</h1>
          <ContactDetails />
        </div>
      </div>
      <div>
        <h1 className="font-permanentMarker text-xs mb-2 mt-40">FOLLOW US</h1>
        <div className="flex flex-row mb-4">
        <a href="https://www.instagram.com/flourpowersg/" target="_blank">  <BsFacebook className="zoom mr-10 w-10 h-10" /></a>
        <a href="https://www.facebook.com/flourpowersg/" target="_blank">   <BsInstagram className="zoom w-10 h-10" /></a>
        </div>
         <p className="zoom text-xxs "onClick={handleScrollToTop}>&#169; 2023 Seeteey Pte Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
