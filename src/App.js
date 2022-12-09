import React, { useState } from "react";
import Coin from "./components/Coin/Coin";
import Header from "./components/Header/Header";

import "./App.css";

const App = () => {
  // const [opacity, setOpacity] = useState(0);

  return (
    <div className="goldgame">
      <Header />
      <Coin id="one" />
      {/* <Coin id="two" />
      <Coin id="three" />
      <Coin id="four" />
      <Coin id="five" />
      <Coin id="six" />
      <Coin id="seven" />
      <Coin id="eight" />
      <Coin id="nine" /> */}
    </div>
  );
};

export default App;

// onClick={() => setCount(count + 1)}
