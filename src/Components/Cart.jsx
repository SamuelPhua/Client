import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  /*
   ** Functionality of the cart must check if the items added to Cart have any stock from Product Page
   **
   **
   **
   **
   **
   **
   */

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
    </>
  );
};

export default Cart;
