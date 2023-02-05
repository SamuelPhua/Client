import React from "react";
import { questionAndAnswer } from "./footerData";
import FaqTemplate from "./FaqTemplate";

const FAQ = () => {
  return (
    <>
      <div className="text-darkBlueFont mx-auto w-10/12 motion-safe:animate-fadeIn">
        <h1 className="text-center text-4xl mt-32 mb-9">FAQ</h1>
        <div className="text-xs">
          {questionAndAnswer.map((question) => {
            return <FaqTemplate {...question} key={question.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FAQ;
