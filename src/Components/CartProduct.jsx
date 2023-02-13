import React, { useContext } from "react";
import placeholderImg from "../assets/imagesAboutUs/CartPage-KraftPouch.jpg";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import DataContext from "./context/DataContext";

const CartProduct = ({ name, price, weight, packaging, quantity, index }) => {
  const { handleDelete, handlePlusQty, handleMinusQty } =
    useContext(DataContext);

  return (
    <div>
      <div className="w-11/12 grid grid-cols-7 ml-20 p-10 border-b-2 border-[#999999] ">
        <div className="col-start-1 flex justify-center items-center">
          <img className="w-48 h-48" src={placeholderImg} />
        </div>
      </div>
      <div className="ml-20 col-start-2 col-end-4 flex">
        <div className="self-center text-[1.5rem] font-montserrat text-lightBlue">
          <span className="font-bold">{name}</span>
          <p className="mt-5 text-[1.3rem]">{weight}</p>
          <p className="mt-5 text-[1.3rem]">{packaging}</p>
        </div>
      </div>

      <div className="justify-center items-center col-start-5 flex">
        <div>
          <AiFillMinusCircle className="inline-block text-lightBlue text-6xl" onClick={() => handleMinusQty(index)} />
          <p
            className="inline-block ml-8 mr-8 text-darkBlueFont text-[1.5rem]"
          >
            {quantity}
          </p>
          <AiFillPlusCircle
            className="inline-block text-lightBlue text-6xl"
            onClick={() => handlePlusQty(index)}
          />
          <p
            className="block text-[1rem] font-montserrat text-center text-darkBlueFont underline"
            onClick={() => handleDelete(index)}
          >
            Remove
          </p>
        </div>
      </div>

      <div className="col-start-7 flex justify-end items-center">
        <h2 className="text-[1.5rem] font-montserrat text-lightBlue">
          ${quantity * price}
        </h2>
      </div>
    </div>
  );
};

export default CartProduct;
