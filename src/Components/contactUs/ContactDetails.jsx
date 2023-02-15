import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";

const ContactDetails = () => {
  return (
    <table className="font-montserrat text-darkBlueFont text-sm md:text-base">
      <tbody>
        <tr >
          <td>
            <FaPhoneAlt />
          </td>
          <td className="pl-4">8749 1330</td>
        </tr>
        <tr>
          <td>
            <MdEmail />
          </td>
          <td className="pl-4">enquiry@flourpower.sg</td>
        </tr>
        <tr>
          <td>
            <MdLocationOn />
          </td>
          <td className="pl-4">247 Hougang Ave 3</td>
        </tr>
        <tr>
          <td></td>
          <td className="pl-4">#01-444 Singapore 530247</td>
        </tr>
        <tr>
          <td>
            <BsClockFill />
          </td>
          <td className="pl-4">Operating Hours: 10am - 4pm</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ContactDetails;
