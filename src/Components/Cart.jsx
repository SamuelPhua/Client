import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    
    /*
   ** Functionality of the cart must check if the items added to Cart have any stock from Product Page
   ** We are able to edit the quantity of the added items
   ** Clicking the images will route back to the Product Page ?? *Must Check -- this one isn't done yet
   ** The total amount of all the added items must appear inside
   ** A button to route to the checkout page
   */

  const [cartItems, setCartItems] = useState([]);
  // Navigate to the checkout page
  const navigate = useNavigate();

  const handleCheckOut = () => {
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
    </>
  );
};

export default Cart;
