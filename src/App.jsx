import React from "react";

import { Routes, Route } from "react-router-dom";
import ShippingAlert from "./Components/ShippingAlert";
import Header from "./Components/Header";
import Shop from "./Components/Shop";
import Product from "./Components/Product";
import AboutUs from "./Components/AboutUs";
import BulkOrders from "./Components/BulkOrders";
import ContactUs from "./Components/ContactUs";
import FAQ from "./Components/footerPages/FAQ";
import PrivacyPolicy from "./Components/footerPages/PrivacyPolicy";
import TermsAndConditions from "./Components/footerPages/TermsAndConditions";
import Footer from "./Components/Footer";
import Shipping from "./Components/Shipping";

function App() {
  return (
    <div className="App">
      <ShippingAlert />
      <Header />
      <Routes>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="product/:name" element={<Product />}></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route path="bulk-orders" element={<BulkOrders />}></Route>
        <Route path="contact-us" element={<ContactUs />}></Route>
        <Route path="faq" element={<FAQ />}></Route>
        <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="t&c" element={<TermsAndConditions />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
