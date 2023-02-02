import React from "react";
import Shop from "./Components/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="Shop" element={<h1>Shop</h1>}></Route>
          <Route path="About us" element={<h1>About us</h1>}></Route>
          <Route path="Bulk Orders" element={<h1>Bulk Orders</h1>}></Route>
          <Route path="Contact Us" element={<h1>Contact us</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
