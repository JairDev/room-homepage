import React, { useEffect, useRef, useState } from "react";
import data from "../../data.json";
function HeroInfo() {
  const elRef = useRef([]);
  const elRefImg = useRef([]);
  const [count, setCount] = useState(0);
  const [sign, setSign] = useState("");

  useEffect(() => {
    for (let i = 0; i < data.info.length; i++) {
      const offSet = 100 * count;
      const move = i * 100 - offSet;
      elRefImg.current[i].style = `transform: translateX(${move}%)`;
      elRef.current[i].style = `transform: translateX(${move}%)`;
    }
  }, [count, sign]);

  useEffect(() => {
    for (let i = 0; i < data.info.length; i++) {
      elRefImg.current[i].style = `transform: translateX(${100 * i}%)`;
      elRef.current[i].style = `transform: translateX(${100 * i}%)`;
    }
  }, []);

  const handleForward = () => {
    setCount((prev) => (prev += 1));
    if (count === elRef.current.length - 1) {
      setCount(0);
    }
    setSign("-");
  };
  const handleBack = () => {
    setCount((prev) => (prev -= 1));
    if (count === 0) {
      setCount(elRef.current.length - 1);
    }
  };

  return (
    <>
      <div className="App-content-hero-inline">
        {data.info.map((item, i) => (
          <>
            <div
              ref={(ref) => (elRefImg.current[i] = ref)}
              className="App-content-hero-img"
            >
              <img src={item.imgSrc} alt=""></img>
            </div>
            <div className="overflow"></div>
            <div className="App-content-hero-text">
              <div
                ref={(ref) => (elRef.current[i] = ref)}
                className="content-hero-text"
              >
                <h1 className="title-hero-text">{item.title}</h1>
                <p>{item.content}</p>
                <div className="content-shop-now">
                  <span className="shop-now">SHOP NOW</span>
                  <span className="icon-shop-now">
                    <img src="icon-arrow.svg" alt=""></img>
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="parent-content-button">
        <div className="content-action-button">
          <button className="action-button-left" onClick={handleBack}>
            <img src="icon-angle-left.svg" alt=""></img>
          </button>
          <button className="action-button-right" onClick={handleForward}>
            <img src="icon-angle-right.svg" alt=""></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroInfo;
