import { useState } from "react";
import NavBar from "./Components/NavBar";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="container">
        <h2>Display main texts</h2>
      </div>
    </div>
  );
}

export default App;
