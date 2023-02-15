import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";

const ContactDetails = () => {
  return (
    <table className="font-montserrat text-darkBlueFont text-sm md:text-base">
      <tbody>
        <tr>
<<<<<<< Updated upstream
          <td>
=======
          <td className="pb-1">
>>>>>>> Stashed changes
            <FaPhoneAlt />
          </td>
          <td className="pl-4 pb-1">8749 1330</td>
        </tr>
        <tr>
          <td className="pb-1">
            <MdEmail />
          </td>
          <td className="pl-4 pb-1">enquiry@flourpower.sg</td>
        </tr>
        <tr>
          <td className="pb-1">
            <MdLocationOn />
          </td>
          <td className="pl-4 pb-1">247 Hougang Ave 3</td>
        </tr>
        <tr>
          <td className="pb-1">&nbsp;</td>
          <td className="pl-4 pb-1">#01-444 Singapore 530247</td>
        </tr>
        <tr>
          <td className="pb-1">
            <BsClockFill />
          </td>
<<<<<<< Updated upstream
          <td className="pl-4">10am - 4pm</td>
=======
          <td className="pl-4 pb-1">Operating Hours: 10am - 4pm</td>
>>>>>>> Stashed changes
        </tr>
      </tbody>
    </table>
  );
};

export default ContactDetails;
