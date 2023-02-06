import React from "react";
import Shop from "./Components/Shop";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Header from "./Components/Header";
import ContactUs from "./Components/ContactUs";
import FAQ from "./Components/footerPages/FAQ";
import PrivacyPolicy from "./Components/footerPages/PrivacyPolicy";
import TermsAndConditions from "./Components/footerPages/TermsAndConditions";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="shop"
          element={
            <h1>
              <Shop />
            </h1>
          }
        ></Route>
        <Route
          path="about-us"
          element={
            <h1>
              <AboutUs />
            </h1>
          }
        ></Route>
        <Route path="bulk-orders" element={<h1>Bulk Orders</h1>}></Route>
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
