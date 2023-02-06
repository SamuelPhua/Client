import React from "react";

const ContactForm = () => {
  return (
    <form
      id="contactForm"
      className="flex flex-col basis-1/2 tracking-wide font-montserrat text-darkBlueFont text-xs"
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
            required
            className="border-2 border-darkBlueFont focus:ring-4 focus:bg-slate-200 rounded-full px-3.5 py-1.5 w-full text-base placeholder:text-xxs"
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
            className="border-2 border-darkBlueFont focus:ring-4 focus:bg-slate-200 rounded-full px-3.5 py-1.5 w-full text-base placeholder:text-xxs"
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
        required
        className="border-2 border-darkBlueFont focus:ring-4 focus:bg-slate-200 rounded-full px-3.5 py-1.5 text-base placeholder:text-xxs"
      />
      <label htmlFor="tel" className="leading-7 mt-5">
        TEL
      </label>
      <input
        type="text"
        id="tel"
        name="tel"
        placeholder="Phone"
        className="border-2 border-darkBlueFont focus:ring-4 focus:bg-slate-200 rounded-full px-3.5 py-1.5 text-base placeholder:text-xxs "
      />
      <label htmlFor="message" className="leading-7 mt-5">
        MESSAGE
      </label>
      <textarea
        id="message"
        name="message"
        required
        placeholder="Type your message here..."
        rows="8"
        className="border-2 border-darkBlueFont focus:ring-4 focus:bg-slate-200 rounded-xl px-3.5 py-1.5 text-base placeholder:text-xxs"
      />
      <button
        type="button"
        id="submitContactForm"
        className="text-white bg-orange focus:outline-none focus:ring-4 hover:bg-darkOrange focus:bg-darkOrange rounded-full mt-5 mb-5 md:mt-10 py-2 w-28 md:w-32 lg:w-36 mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
