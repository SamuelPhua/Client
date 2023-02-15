import React from "react";
import { Link } from "react-router-dom";
import bgOrange from "../../Assets/Images/home-image/footer-Orange.png";
import fb from '../../Assets/Images/home-image/Footer-Facebook.png'
import insta from '../../Assets/Images/home-image/Footer-Instagram.png'

const Footer = () => {
  return (
    <div
      
      className="relative w-full min-h-[434px] flex justify-between  items-center "
    >
        <img src={bgOrange} className="absolute w-full h-full z-[-1]" alt="bg" />
        <div className="flex items-center justify-between gap-20 pl-28">
            <div className="flex flex-col gap-4">
                <h3 className="  text-[#3670AD]  text-xl  tracking-wider font-['Permanent_Marker']">Support</h3>
                <Link className="text-[#3670AD] " href="#">FAQ</Link>
                <Link className="text-[#3670AD] " href="#">Privacy Policy</Link>
                <Link className="text-[#3670AD] " href="#">Terms & Conditions</Link>
            </div>
            <div className="flex flex-col gap-4 pt-16">
                <h3 className="  text-[#3670AD]  text-xl  tracking-wider font-['Permanent_Marker']">Contact</h3>
                <Link className="text-[#3670AD] " href="#"> 8749 1330</Link>
                <Link className="text-[#3670AD] " href="#">enquiry@flourpower.sg</Link>
                <Link className="text-[#3670AD] " href="#">247 Hougang Ave 3 <br /> #01-444 Singapore 530247</Link>
                <Link className="text-[#3670AD] " href="#">Operating Hours: 10am - 4pm</Link>
            </div>
            
        </div>
        <div className="  text-[#3670AD] flex flex-col justify-center items-center gap-8 pt-4  text-xl pr-28  tracking-wider font-['Permanent_Marker']">
            <h3 >Follow US</h3>
            <div className="flex flex-row gap-4">
                <img width={65} src={fb} alt="" />
                <img width={65} src={insta} alt="" />
            </div>
            <h5 className="text-[#3670AD] "> © 2023 Seeteey Pte Ltd</h5>
        </div>
    </div>
  );
};

export default Footer;