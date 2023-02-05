import React from "react";

const FaqTemplate = ({ question, answer }) => {
  return (
    <div>
      <h3 className="font-bold mb-4">{question}</h3>
      <p className="mb-12">{answer}</p>
    </div>
  );
};

export default FaqTemplate;
