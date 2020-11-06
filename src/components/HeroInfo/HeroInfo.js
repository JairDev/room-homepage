import React, { useEffect, useRef, useState } from "react";
import data from "../../data.json";
function HeroInfo({ srcImg, title, content }) {
  const elRef = useRef([]);
  const [count, setCount] = useState(0)

  useEffect(() => {

    for (let i = 0; i < elRef.current.length; i++) {
      const el = elRef.current[i];
      el.classList.remove("active")
      if(i !== 0) {
        // console.log(el)
        el.classList.add("inactive")
      }
    }
    console.log(count)
    // if(count === elRef.current.length - 1) {
    //   console.log("true")
    //   setCount(0)
    // }
    const el = elRef.current[count];
    el.classList.add("active")
    console.log(el)
    
  }, [count]);

  const handleForward = () => {
    setCount((prev) => prev += 1)
    if(count === elRef.current.length - 1) {
      console.log("true")
      setCount(0)
    }
  }
  const handleBack = () => {
    setCount((prev) => prev -= 1)
    if(count === 0) {
      console.log("true")
      setCount(elRef.current.length - 1)
    }
  }

  return (
    <>
      {data.info.map((item, i) => (
        <div key={item.title} className="App-content-hero-inline">
          <div
            ref={(ref) => (elRef.current[i] = ref)}
            className="App-content-hero"
          >
            <div className="App-content-hero-img">
              <img src={item.imgSrc} alt=""></img>
            </div>
            <div className="App-content-hero-text">
              <h1 className="title-hero-text">{item.title}</h1>
              <p>{item.content}</p>
              <span>Shop now</span>
            </div>
          </div>
        </div>
      ))}
      <div className="content-action-button">
        <button className="action-button-left" onClick={handleBack}>Left</button>
        <button className="action-button-right" onClick={handleForward}>Right</button>
      </div>
    </>
  );
}

export default HeroInfo;
