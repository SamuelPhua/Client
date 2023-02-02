import React from "react";
import Shop from "./Components/Shop";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import Header from "./Components/Header";

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
        <Route path="Bulk Orders" element={<h1>Bulk Orders</h1>}></Route>
        <Route path="Contact Us" element={<h1>Contact us</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
