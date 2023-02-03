import React from "react";
import ContactDetails from "./contactUs/ContactDetails";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-row justify-around items-center bg-[url(src/assets/imagesContactUs/Footer-wave.png)] h-[320px] bg-cover bg-no-repeat text-darkBlueFont">
      <div className="flex flex-row mt-10">
        <div className="mr-20">
          <h1 className="font-permanentMarker text-xs">SUPPORT</h1>
          <table className="font-montserrat text-base">
            <tbody>
              <tr>
                <td>FAQ</td>
              </tr>
              <tr>
                <td>Privacy Policy</td>
              </tr>
              <tr>
                <td>Terms & Conditions</td>
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
          <BsFacebook className="mr-10 w-10 h-10" />
          <BsInstagram className="w-10 h-10" />
        </div>
        <p className="text-xxs">&#169; 2023 Seeteey Pte Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
