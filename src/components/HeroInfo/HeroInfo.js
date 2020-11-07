import React, { useEffect, useRef, useState } from "react";
import data from "../../data.json";
function HeroInfo({ srcImg, title, content }) {
  const elRef = useRef([]);
  const elRefImg = useRef([])
  const [count, setCount] = useState(0)
  const [sign, setSign] = useState("")

  useEffect(() => {
    const widthImg = elRefImg.current[0].clientWidth
    for(let i = 0; i < data.info.length; i++) {
      // elRefImg.current[i].style = `transform: translateX(${100 * i}%)`
    }
    if(count > 0) {
      elRefImg.current[count-1].style = `transform: translateX(-${100 * count - 1}%)`
    }
    console.log(elRefImg.current[count])
    console.log(sign)
  }, [count, sign])
  useEffect(() => {
    for(let i = 0; i < data.info.length; i++) {
      elRefImg.current[i].style = `transform: translateX(${100 * i}%)`
    }
  },[])

  const handleForward = () => {
    setCount((prev) => prev += 1)
    if(count === elRef.current.length - 1) {
      // console.log("true")
      setCount(0)
    }
    setSign("-")
  }
  const handleBack = () => {
    setCount((prev) => prev -= 1)
    if(count === 0) {
      // console.log("true")
      setCount(elRef.current.length - 1)
    }
  }

  return (
    <>
      {data.info.map((item, i) => (
        <div key={item.title} className="App-content-hero-inline">
      
          <div ref={(ref) => elRefImg.current[i] = ref} className="App-content-hero-img">
            <img src={item.imgSrc} alt=""></img>
          </div>
          <div className="App-content-hero-text">
            <div ref={(ref) => (elRef.current[i] = ref)} className="content-hero-text">
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
