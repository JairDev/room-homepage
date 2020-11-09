import React, { useEffect, useRef, useState } from "react";
import data from "../../data.json";
function HeroInfo({ srcImg, title, content }) {
  const elRef = useRef([]);
  const elParentRef = useRef([]);
  const elRefImg = useRef([])
  const [count, setCount] = useState(0)
  const [sign, setSign] = useState("")

  useEffect(() => {
    const widthImg = elRefImg.current[0].clientWidth
    for(let i = 0; i < data.info.length; i++) {
      const offSet = 100 * count
      const move = (i * 100) - offSet
      elRefImg.current[i].style = `transform: translateX(${move}%)`
      elRef.current[i].style = `transform: translateX(${move}%)`
      if(elRefImg.current[i].style.transform === "translateX(0%)") {
        // elRefImg.current[i].parentNode.style = "z-index: 100"

      }else {
        elRefImg.current[i].parentNode.style = "z-index: 0"
        elRefImg.current[i].parentNode.classList.add("inactive")
        // console.log(elRefImg.current[i].parentNode)
      }
    }
  }, [count, sign])

  useEffect(() => {
    for(let i = 0; i < data.info.length; i++) {
      elRefImg.current[i].style = `transform: translateX(${100 * i}%)`
      elRef.current[i].style = `transform: translateX(${100 * i}%)`

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

  const handleTransitionEnd = (e) => {
    for(let i = 0; i < data.info.length; i++) {
      if(e.propertyName === "transform" && e.target.style.transform === "translateX(0%)") {
        // e.target.parentNode.style = "z-index: 100"
        e.target.parentNode.classList.add("active")
        // e.target.parentNode.classList.remove("inactive")

      }else {
        e.target.parentNode.classList.remove("active")
        // e.target.parentNode.classList.add("inactive")


      }
    }
    // console.log(e)
  }

  return (
    <>
      {data.info.map((item, i) => (
        <div ref={(ref) => elParentRef.current[i] = ref} key={item.title} className="App-content-hero-inline">
          <div onTransitionEnd={handleTransitionEnd} ref={(ref) => elRefImg.current[i] = ref} className="App-content-hero-img">
            <img src={item.imgSrc} alt=""></img>
          </div>
          <div className="App-content-hero-text">
            <div ref={(ref) => (elRef.current[i] = ref)} className="content-hero-text">
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

        </div>
      ))}
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
