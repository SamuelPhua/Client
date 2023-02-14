import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// Start of CSS Stuff:
import placeholderImg from "../assets/imagesAboutUs/CartPage-KraftPouch.jpg";

import ButtonOrange from "./reusables/ButtonOrange";
import CartProduct from "./CartProduct";
import DataContext from "./context/DataContext";

const Cart = ({ shoppingCart }) => {
  const data = useContext(DataContext);
  /*
   ** Functionality of the cart must check if the items added to Cart have any stock from Product Page
   ** We are able to edit the quantity of the added items
   ** Clicking the images will route back to the Product Page ?? *Must Check -- this one isn't done yet
   ** The total amount of all the added items must appear inside
   ** Local Storage
   ** A button to route to the checkout page
   */

  const [cartItems, setCartItems] = useState([]);
  // const [deleteFromCart, setDeleteFromCart] = useState([]);
  const [count, setCount] = useState(1);

  // Navigate to the checkout page
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate("/checkout");
  };

  // To check if the added items in the cart have stock in place
  // Params item, quantity and stock are interchangable in our codes
  const addedToCart = (item, quantity) => {
    if (item.stock < quantity) {
      alert(`Only ${item.stock} items available in stock.`);
      return;
    }
    setCartItems((prevItems) => {
      [...prevItems, { ...item, quantity }];
    });
  };

  // To edit the quantity of the added items
  const updateQuantity = (index, quantity) => {
    setCartItems((prevItems) => {
      prevItems.map((item, i) => {
        if (i === index) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  // Total price of all the added items
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // The first useEffect hook retrieves the saved cartItems from localStorage when the component is mounted.
  // If there are saved items, it will set the state cartItems with the saved data.
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // The second useEffect hook updates the localStorage with the updated cartItems state whenever it changes.
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // checkout button click > route to checkout page
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* // Updating the quantity via button function
      {cartItems.map((item, index) => {
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => updateQuantity(index, item.quantity - 1)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(index, item.quantity + 1)}>
            +
          </button>
        </div>;
      })} */}

      {/* // Showing the total price
      <p>Total Price: {totalPrice}</p> */}

      {/* // Button to checkout
      <button onClick={handleCheckOut} /> */}

      {/* Start of CSS for View Cart with Items */}
      <div className="relative h-[15rem] w-full bg-cover bg-center">
        <div className="absolute text-lg font-permanentMarker text-darkBlue  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Cart
        </div>
      </div>

      {/* First Row */}
      <div className="mt-[-2rem] w-11/12 grid grid-cols-7 ml-20 p-6 border-b-2 border-[#999999] ">
        <div className="col-start-1 flex justify-start items-center">
          <div className="text-[2.3rem] font-montserrat text-lightBlue">
            Product
          </div>
        </div>
        <div className="col-start-5 flex justify-center items-center">
          <div className="text-[2.3rem] font-montserrat text-lightBlue">
            Qty
          </div>
        </div>
        <div className="col-start-7 flex justify-end items-center">
          <div className="text-[2.3rem] font-montserrat text-lightBlue">
            Total
          </div>
        </div>
      </div>

      {/* Second Row */}
      {shoppingCart.map((product, index) => {
        return <CartProduct key={index} {...product} index={index} />;
      })}

      {/* Third Row */}
      <div className="w-11/12 grid grid-cols-7 p-10">
        <div className="col-start-1 col-end-9 flex justify-start items-center ml-10">
          <div className="text-[1.2rem] font-montserrat text-lightBlue">
            Note: As out Bakes are baked to order with love, please allow 3-5
            days buffer for both delivery or self collection.
          </div>
        </div>
      </div>
      {/* Fourth Row */}
      <div className="w-11/12 grid grid-cols-7 ml-20 p-10">
        <div className="col-start-7 flex justify-end items-center">
          <div className="text-[1.3rem] font-montserrat text-lightBlue font-bold mr-[-2rem] mt-[-5rem]">
            Total: $5.80
          </div>
        </div>
      </div>

      {/* Last Row */}
      <div className="w-11/12 grid grid-cols-7 ml-20 p-10">
        <div className="col-start-7 flex justify-end items-center mr-[-5.8rem] mt-[-7.5rem]">
          <ButtonOrange displayName="CHECKOUT" onClick={navigateToCheckout} />
        </div>
      </div>
    </>
  );
};

export default Cart;
