import React, { useRef } from "react";

import gold from "../../images/gold.png";

import "./Coin.css";

const Coin = () => {
  const Random = useRef({
    position: "absolute",
    bottom: Math.floor(Math.random() * 500),
    left: Math.floor(Math.random() * 1300),
  });

  const changeOpacity = () => {
    let coin = document.getElementById("one");
    let opacity = 0;
    coin.style.opacity = opacity;
  };

  return (
    <div id="one" onClick={changeOpacity}>
      <img
        className="gold__coin"
        src={gold}
        alt="gold"
        style={Random.current}
      />
    </div>
  );
};

export default Coin;
