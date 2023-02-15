import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ButtonOrange from "./reusables/ButtonOrange";
import DataContext from "./context/DataContext";
import { RxCross2 } from "react-icons/rx";

const ProductPopup = ({ productImage, name, packaging, weight, quantity }) => {
  const data = useContext(DataContext);
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
    data.setShowProductPopup(false);
  };

  const handleClick = () => {
    data.setShowProductPopup(false);
  };

  //   return (
  //     <>
  //       {data.showProductPopup && (
  //         <div className="motion-safe:animate-fadeIn w-6/6 h-1/3 bg-white border-8 border-white rounded-3xl p-10 fixed top-0 right-0">
  //           <div className="underline underline-offset-22 decoration-[0.5px] font-montserrat text-[1.6rem] tracking-wide">
  //             Just added to your cart{"  "}
  //             <RxCross2
  //               className="hover:border-darkOrange hover:bg-buttonHoverOrange hover:border-1 rounded-full text-[1.3rem] inline drop-shadow-3xl "
  //               onClick={handleClick}
  //             />
  //           </div>

  //           <div className="flex">
  //             <div className="flex-none">
  //               <img className="w-28 h-28 mt-[2rem]" src={productImage} />
  //             </div>

  //             <div className="flex-auto-64 ml-[2rem]">
  //               <div className="mt-[2rem] font-montserrat text-[0.9rem] font-bold">
  //                 {name}
  //               </div>

  //               <div className="font-montserrat mt-[0.7rem] text-[0.9rem]">
  //                 {packaging} {weight}
  //               </div>

  //               <div className="font-montserrat mt-[0.7rem] text-[0.9rem]">
  //                 Qty: {quantity}
  //               </div>
  //             </div>
  //           </div>

  //           <div className="mt-[-1rem] ml-[0.8rem] bg-white">
  //             <ButtonOrange
  //               padding="1rem"
  //               width="20rem"
  //               displayName={`VIEW CART (${quantity})`}
  //               onClick={navigateToCart}
  //             />
  //           </div>
  //         </div>
  //       )}
  //     </>
  //   );
  // };

  return (
    <>
      {data.showProductPopup && (
        <div className="grid grid-cols-1 gap-4 motion-safe:animate-fadeIn bg-white border-8 border-white rounded-3xl p-10 fixed top-0 right-0">
          <div className="col-start-1 col-end-3 underline underline-offset-22 decoration-[0.5px] font-montserrat text-[1.6rem] tracking-wide">
            Just added to your cart{"  "}
            <RxCross2
              className="hover:border-darkOrange hover:bg-buttonHoverOrange hover:border-1 rounded-full text-[1.3rem] inline drop-shadow-3xl "
              onClick={handleClick}
            />
          </div>

          <div className="flex z-10">
            <div>
              <img className="w-24 h-24 mt-[1rem]" src={productImage} />
            </div>

            <div className="mt-[-0.9rem] ml-[2rem]">
              <div className="mt-[2rem] font-montserrat text-[0.95rem] font-bold">
                {name}
              </div>

              <div className="font-montserrat mt-[0.7rem] text-[0.95rem]">
                {packaging} {weight}
              </div>
              <div className="font-montserrat mt-[0.7rem] text-[0.95rem]">
                Qty: {quantity}
              </div>
            </div>
          </div>

          <div className="col-start-1 col-end-3 z-0 mt-[-2rem]">
            <ButtonOrange
              padding="0.8rem"
              width="20rem"
              displayName={`VIEW CART (${quantity})`}
              onClick={navigateToCart}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPopup;
