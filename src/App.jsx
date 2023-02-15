import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import ShippingAlert from "./Components/reusables/ShippingAlert";
import Header from "./Components/reusables/Header";
import Home from "./Components/homePage/Pages/home/Home";
import Shop from "./Components/Shop";
import Product from "./Components/Product";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import FAQ from "./Components/footerPages/FAQ";
import PrivacyPolicy from "./Components/footerPages/PrivacyPolicy";
import TermsAndConditions from "./Components/footerPages/TermsAndConditions";
import Footer from "./Components/reusables/Footer";
import Checkout from "./Components/Checkout";
import BulkOrder from "./Components/BulkOrder";
import Cart from "./Components/Cart";
import DataContext from "./Components/context/DataContext";
import CheckoutPage1 from "./Components/checkout/CheckoutPage1";
import CheckoutReceipt from "./Components/checkout/CheckoutReceipt";
import { groupShoppingCart } from "./helper/groupShoppingCart";

function App() {
  const [showShipAlert, setShowShipAlert] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showProductPopup, setShowProductPopup] = useState(false);

  /*
   ** STATE for carts
   */

  const [shoppingCart, setShoppingCart] = useState([]);
  let groupedCart = groupShoppingCart(shoppingCart);

  console.log("App.jsx", shoppingCart);

  /*
   ** event handlers
   */

  const handleAddToCart = (cartInputs) => {
    console.log("added cart items", cartInputs);
    console.log("image source", cartInputs.image);
    // compute itemTotal based on price * qty
    cartInputs.itemTotal = cartInputs.quantity * cartInputs.price;
    setShoppingCart((prevCartInputs) => {
      return [...prevCartInputs, cartInputs];
    });
    setShowProductPopup(true);
  };

  const handlePlusQty = (id) => {
    const newArray = [...shoppingCart];
    newArray[id].quantity = newArray[id].quantity + 1;
    setShoppingCart(newArray);
  };

  const handleMinusQty = (id) => {
    const newArray = [...shoppingCart];
    newArray[id].quantity = newArray[id].quantity - 1;
    setShoppingCart(newArray);
  };

  const handleDelete = (id) => {
    const newCart = shoppingCart.filter((data, index) => index !== id);
    setShoppingCart(newCart);
  };

  return (
    <DataContext.Provider
      value={{
        handleDelete,
        handlePlusQty,
        handleMinusQty,
        setShowShipAlert,
        setShowNav,
        setShowFooter,
        showProductPopup,
        setShowProductPopup,
      }}
    >
      <div className="App">
        {showShipAlert && <ShippingAlert />}
        {showNav && <Header shoppingCart={groupedCart} />}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setShowShipAlert={setShowShipAlert}
                setShowNav={setShowNav}
                setShowFooter={setShowFooter}
              />
            }
          ></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route
            path="product/:name"
            element={<Product handleAddToCart={handleAddToCart} />}
          ></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="bulk-orders" element={<BulkOrder />}></Route>
          <Route path="contact-us" element={<ContactUs />}></Route>
          <Route
            path="cart"
            element={
              <Cart
                shoppingCart={groupedCart}
                setShowShipAlert={setShowShipAlert}
                setShowNav={setShowNav}
                setShowFooter={setShowFooter}
              />
            }
          ></Route>
          <Route path="faq" element={<FAQ />}></Route>
          <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="t&c" element={<TermsAndConditions />}></Route>
          <Route
            path="checkout"
            element={
              <Checkout
                shoppingCart={groupedCart}
                setShoppingCart={setShoppingCart}
                setShowShipAlert={setShowShipAlert}
                setShowNav={setShowNav}
                setShowFooter={setShowFooter}
              />
            }
          ></Route>
          <Route path="receipt" element={<CheckoutReceipt />}></Route>
        </Routes>
        {showFooter && <Footer />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
