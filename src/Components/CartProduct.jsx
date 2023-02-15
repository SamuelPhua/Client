import React, { useContext } from "react";
import placeholderImg from "../assets/imagesAboutUs/CartPage-KraftPouch.jpg";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import DataContext from "./context/DataContext";

const CartProduct = ({
  name,
  price,
  image,
  weight,
  packaging,
  quantity,
  index,
}) => {
  const { handleDelete, handlePlusQty, handleMinusQty } =
    useContext(DataContext);

  const totalPrice = (price * quantity).toFixed(2);

  return (
    <>
      <div className="w-11/12 grid grid-cols-7 ml-20 p-10 border-b-2 border-[#999999] ">
        <div className="col-start-1 flex justify-center items-center">
          <img className="w-48 h-48 object-contain" src={image} />
        </div>

        <div className="ml-20 col-start-2 col-end-4 flex">
          <div className="self-center text-[1.2rem] font-montserrat text-lightBlue">
            <div className="font-bold">{name}</div>
            <div className="mt-5 text-[1.2rem]">{weight}</div>
            <div className="mt-5 text-[1.2rem]">{packaging}</div>
          </div>
        </div>
        <div className="justify-center items-center col-start-5 flex">
          <div>
            <AiFillMinusCircle
              className="inline-block text-lightBlue text-3xl"
              onClick={() => handleMinusQty(index)}
            />
            <div className="inline-block ml-8 mr-8 text-darkBlueFont text-[1.2rem]">
              {quantity}
            </div>
            <AiFillPlusCircle
              className="inline-block text-lightBlue text-3xl"
              onClick={() => handlePlusQty(index)}
            />
            <div
              className="block text-[0.9rem] font-montserrat text-center text-darkBlueFont underline"
              onClick={() => handleDelete(index)}
            >
              Remove
            </div>
          </div>
        </div>

        <div className="col-start-7 flex justify-end items-center">
          <div className="text-[1.3rem] font-montserrat text-lightBlue tracking-wider">
            {totalPrice}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
