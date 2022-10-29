import React, { useEffect, useRef, useState } from "react";
import data from "../../data.json";

function HomeRoom() {
  const elRef = useRef([]);
  const elRefImg = useRef([]);
  const refLeftButton = useRef(null);
  const refRightButton = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sliceContentText = elRef.current.slice(0, count);
    const offSet = 100 * count;
    for (let i = 0; i < data.info.length; i++) {
      const move = i * 100 - offSet;
      elRefImg.current[i].style = `transform: translate(${move}%, 0%)`;
      elRef.current[i].style = `transform: translate(${move}%, 0%);`;
    }
    if (sliceContentText) {
      sliceContentText.map(
        (node) =>
          (node.style = `transform: translate(-${offSet}%, 0%); opacity: 0`)
      );
    }
    if (count === 0) {
      refLeftButton.current.classList.add("disable-button");
    } else {
      refLeftButton.current.classList.remove("disable-button");
    }

    if (count === 2) {
      refRightButton.current.classList.add("disable-button");
    } else {
      refRightButton.current.classList.remove("disable-button");
    }
  }, [count]);

  useEffect(() => {
    for (let i = 0; i < data.info.length; i++) {
      elRefImg.current[i].style = `transform: translate(${100 * i}%, 0%)`;
      elRef.current[i].style = `transform: translate(${100 * i}%, 0%)`;
    }
  }, []);

  const handleForward = () => {
    if (count === elRef.current.length - 1) {
      return;
    }
    setCount((prev) => (prev += 1));
  };
  const handleBack = () => {
    if (count === 0) {
      return;
    }
    setCount((prev) => (prev -= 1));
  };

  return (
    <>
      <div className="App-content-hero-inline">
        {data.info.map((item, i) => (
          <div key={item.title} className="content-hero-content">
            <div
              ref={(ref) => (elRefImg.current[i] = ref)}
              className="App-content-hero-img"
            >
              <img src={item.imgSrc} alt={item.title}></img>
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
                    <img src="icon-arrow.svg" alt="icon-arrow.svg"></img>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="parent-content-button">
        <div className="content-action-button">
          <button
            ref={refLeftButton}
            aria-label="Left"
            className="action-button-left"
            onClick={handleBack}
          >
            <img
              className="icon-button-left"
              src="icon-angle-left.svg"
              alt="icon-angle-left.svg"
            ></img>
          </button>
          <button
            ref={refRightButton}
            aria-label="Right"
            className="action-button-right"
            onClick={handleForward}
          >
            <img
              className="icon-button-right"
              src="icon-angle-right.svg"
              alt="icon-angle-right.svg"
            ></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeRoom;
