import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineForm,
  AiOutlineCreditCard,
} from "react-icons/ai";
import { BsBox } from "react-icons/bs";

const CheckoutSteps = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  // fx: update step
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];

    let count = 0;

    while (count < newSteps.length) {
      // current step
      if (count == stepNumber + 1) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
        count++;
      }
      // step completed
      else if (count < stepNumber + 1) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: true,
        };
        count++;
      }
      // step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    // create object for each element in steps array
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          icon: step.icon,
          description: step.description,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-gray-300">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-[1px] border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
              step.completed ? "border-darkBlueFont" : ""
            } ${
              step.selected
                ? `bg-darkBlueFont text-white font-bold border border-darkBlueFont `
                : ""
            }`}
          >
            {/* display icons */}
            {step.completed ? (
              <span className="text-darkBlueFont text-xl after:block after:absolute after:rounded-[50%] after:w-4 after:h-4 after:bg-green-600 after:left-8 after:top-8 after:content-['']">
                <step.icon />
              </span>
            ) : (
              <step.icon />
            )}
          </div>
          <div
            className={`absolute top-0  text-center mt-16 w-32 font-thin text-xxxs ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {/* display description */}
            {step?.description}
          </div>
        </div>
        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed
              ? "border-darkBlueFont"
              : "border-gray-300 border-dashed"
          }`}
        >
          {/* display line */}
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-between items-center">{displaySteps}</div>
  );
};

export default CheckoutSteps;
