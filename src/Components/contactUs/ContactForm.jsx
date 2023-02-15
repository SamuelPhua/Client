import React, { useEffect, useState, useContext } from "react";
import useFetch from "../../customHooks/useFetch";
import DataContext from "../context/DataContext";

const ContactForm = () => {
  const contextData = useContext(DataContext);
  const initFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  // states
  const { fetchData, isLoading, data, error } = useFetch();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [enquiryInput, setEnquiryInput] = useState(initFormState);

  // PUT: when form is submitted
  useEffect(() => {
    const fetchFunction = async () => {
      const MONGODB_CREATEENQUIRY_URI =
        "http://127.0.0.1:5001/enquiryForm/createEnquiry";
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiryInput),
      };
      console.log("contact form useEffect", enquiryInput);
      await fetchData(MONGODB_CREATEENQUIRY_URI, requestOptions);
    };
    if (enquiryInput.firstName) {
      fetchFunction();
      setHasSubmitted(false);
      setEnquiryInput((prevState) => {
        return { ...prevState, ...initFormState };
      });
    }
  }, [hasSubmitted]);

  // if want to pop up error message in case of data not being posted successfully to db
  // useEffect(() => {
  //   if (error) {
  //     contextData.setDisplayPopup(false);
  //     contextData.setPageIsOpaque(false);
  //   }
  // }, [data]);

  useEffect(() => {
    if (data?.status === "OK") {
      contextData.setDisplayPopup(true);
      contextData.setPageIsOpaque(true);
    }
  }, [data]);

  // When "Submit" button is clicked
  const handleFormSubmission = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
  };

  // Control form input
  const handleInputChange = (e) => {
    setEnquiryInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <form
        id="contactForm"
        className="flex flex-col basis-1/2 tracking-wide font-montserrat text-darkBlueFont text-xs"
        onSubmit={handleFormSubmission}
      >
        <div className="flex flex-col md:flex-row">
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
              className="border-2 border-darkBlueFont focus:ring-2 focus:bg-slate-200 rounded-full px-3.5 py-1.5 w-full text-base placeholder:text-xxxs placeholder:text-greyPlaceholder/[0.4]"
            />
          </div>
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
              className="border-2 border-darkBlueFont focus:ring-2 focus:bg-slate-200 rounded-full px-3.5 py-1.5 w-full text-base placeholder:text-xxxs placeholder:text-greyPlaceholder/[0.4]"
            />
          </div>
        </div>
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
          className="border-2 border-darkBlueFont focus:ring-2 focus:bg-slate-200 rounded-full px-3.5 py-1.5 text-base placeholder:text-xxxs placeholder:text-greyPlaceholder/[0.4]"
        />
        <label htmlFor="tel" className="leading-7 mt-5">
          TEL
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={enquiryInput.tel}
          onChange={handleInputChange}
          className="border-2 border-darkBlueFont focus:ring-2 focus:bg-slate-200 rounded-full px-3.5 py-1.5 text-base placeholder:text-xxxs placeholder:text-greyPlaceholder/[0.4]"
        />
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
          className="border-2 border-darkBlueFont focus:ring-2 focus:bg-slate-200 rounded-xl px-3.5 py-1.5 text-base placeholder:text-xxxs placeholder:text-greyPlaceholder/[0.4]"
        />
        <button
          type="submit"
          id="submitContactForm"
          className="text-white bg-orange text-xxs focus:outline-none focus:ring-4 hover:bg-darkOrange focus:bg-darkOrange rounded-full mt-3 mb-5 md:mt-7 py-2 w-28 md:w-32 lg:w-36 mx-auto"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
