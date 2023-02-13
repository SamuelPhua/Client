import React, { useEffect, useState, useRef } from "react";
import useFetch from "../../customHooks/useFetch";

const ContactForm = () => {
  const initFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const { fetchData, isLoading, data, error } = useFetch();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [enquiryInput, setEnquiryInput] = useState(initFormState);
  const isMounted = useRef(false);

  // PUT: when form is submitted
  useEffect(() => {
    const MONGGODB_CREATEENQUIRY_URI =
      "http://127.0.0.1:5001/enquiryForm/createEnquiry";

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiryInput),
    };

    // fetch data and restore states
    if (isMounted.current) {
      console.log("contact form useEffect", enquiryInput);
      fetchData(MONGGODB_CREATEENQUIRY_URI, requestOptions);
      setHasSubmitted(false);
      setEnquiryInput((prevState) => {
        return { ...prevState, ...initFormState };
      });
    } else {
      isMounted.current = true;
    }
  }, [hasSubmitted]);

  // Control form input
  const handleInputChange = (e) => {
    setEnquiryInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // form submission
  const handleFormSubmission = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
  };

  return (
    <form
      id="contactForm"
      className="flex flex-col basis-1/2 tracking-wide font-montserrat text-darkBlueFont text-xs"
      onSubmit={handleFormSubmission}
    >
      <div className="flex flex-col md:flex-row">
        {/* First name */}
        <div className="basis-1/2 md:mr-2">
          <label htmlFor="firstName" className="leading-7">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={enquiryInput.firstName}
            onChange={handleInputChange}
            required
            className="border-2 border-darkBlueFont focus:ring-4 focus:bg-slate-200 rounded-full px-3.5 py-1.5 w-full text-base placeholder:text-xxs"
          />
        </div>

        {/* Last name */}
        <div className="basis-1/2 md:ml-2 mt-5 md:mt-0">
          <label htmlFor="lastName" className="leading-7">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={enquiryInput.lastName}
            onChange={handleInputChange}
            className="border-2 border-darkBlueFont focus:ring-4 focus:bg-slate-200 rounded-full px-3.5 py-1.5 w-full text-base placeholder:text-xxs"
          />
        </div>
      </div>

      {/* Email */}
      <label htmlFor="email" className="leading-7 mt-5">
        EMAIL
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={enquiryInput.email}
        onChange={handleInputChange}
        required
        className="border-2 border-darkBlueFont focus:ring-4 focus:bg-slate-200 rounded-full px-3.5 py-1.5 text-base placeholder:text-xxs"
      />

      {/* Phone */}
      <label htmlFor="phone" className="leading-7 mt-5">
        TEL
      </label>
      <input
        type="text"
        id="phone"
        name="phone"
        placeholder="Phone"
        value={enquiryInput.phone}
        onChange={handleInputChange}
        className="border-2 border-darkBlueFont focus:ring-4 focus:bg-slate-200 rounded-full px-3.5 py-1.5 text-base placeholder:text-xxs "
      />

      {/* Message */}
      <label htmlFor="message" className="leading-7 mt-5">
        MESSAGE
      </label>
      <textarea
        id="message"
        name="message"
        required
        placeholder="Type your message here..."
        value={enquiryInput.message}
        onChange={handleInputChange}
        rows="8"
        className="border-2 border-darkBlueFont focus:ring-4 focus:bg-slate-200 rounded-xl px-3.5 py-1.5 text-base placeholder:text-xxs"
      />

      {/* Submit button */}
      <button
        type="submit"
        id="submitContactForm"
        className="text-white bg-orange focus:outline-none focus:ring-4 hover:bg-darkOrange focus:bg-darkOrange rounded-full mt-5 mb-5 md:mt-10 py-2 w-28 md:w-32 lg:w-36 mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
