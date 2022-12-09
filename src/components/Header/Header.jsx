import React, { useState, useEffect } from "react";

import "./Header.css";

const Header = () => {
  const [timer, setTimer] = useState(30);
  const [pause, setPause] = useState(true);
  const [start, setStart] = useState(true);
  const [counter, setCounter] = useState(0);
  // start/pause/count down timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        if (timer > 0) {
          setTimer(timer - 1);
          if (!start === pause) {
            setStart("Pause");
          }
        } else {
          setTimer("Times up!");
        }
      } else {
        setStart("Start");
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  // toggle pause/start button
  const handlePause = () => {
    setPause(!pause);
  };

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };
  // refresh the whole page
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="gold" handleClick={increase}>
      <div className="gold__detector">
        <div className="gold__container">
          <div className="gold__find">Find the Gold!</div>

          <div className="gold__time">TIME:{timer}</div>

          <div className="gold__score">
            SCORE:
            <div className="gold__score-num">{counter}</div>
          </div>
        </div>
      </div>
      <div className="gold__buttonDiv">
        <div className="gold__btn">
          <button className="gold__button" onClick={handlePause}>
            {start}
          </button>
        </div>
        <div className="gold__btn2">
          <button className="gold__button2" onClick={refreshPage}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
