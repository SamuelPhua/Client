import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ShippingAlert from "./Components/reusables/ShippingAlert";
import Header from "./Components/reusables/Header";
import Home from "./Components/Home";
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

function App() {
  const [showShipAlert, setShowShipAlert] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  //////////////////
  // STATE for carts
  //////////////////
  const [shoppingCart, setShoppingCart] = useState([]);

  //////////////////
  // event handlers
  //////////////////
  const handleAddToCart = (cartInputs) => {
    setShoppingCart((prevCartInputs) => {
      return [...prevCartInputs, cartInputs];
    });
  };

  return (
    <div className="App">
      {showShipAlert && <ShippingAlert />}
      {showNav && <Header />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route
          path="product/:name"
          element={<Product onAddToCart={handleAddToCart} />}
        ></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route path="bulk-orders" element={<BulkOrder />}></Route>
        <Route path="contact-us" element={<ContactUs />}></Route>
        <Route path="cart" element={<Cart cart={shoppingCart} />}></Route>
        <Route path="faq" element={<FAQ />}></Route>
        <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="t&c" element={<TermsAndConditions />}></Route>
        <Route
          path="checkout"
          element={
            <Checkout
              setShowShipAlert={setShowShipAlert}
              setShowNav={setShowNav}
              setShowFooter={setShowFooter}
            />
          }
        ></Route>
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
