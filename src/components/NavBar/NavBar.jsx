import React, { useRef, useState } from "react";

function NavBar() {
  const [showBar, setShowBar] = useState({ open: false });
  const navRef = useRef(null);
  const buttonHamburgerRef = useRef(null);
  const buttonCloseRef = useRef(null);
  const logoRef = useRef(null);
  const headerRef = useRef(null);

  const handleShowBar = () => {
    setShowBar({ open: true });
    navRef.current.classList.add("open");
    buttonCloseRef.current.classList.add("active");
    buttonHamburgerRef.current.classList.add("inactive");
    logoRef.current.classList.add("hide");
    headerRef.current.classList.add("headeractive");
  };

  const handlecloseBar = () => {
    if (showBar) {
      navRef.current.classList.remove("open");
      buttonCloseRef.current.classList.remove("active");
      buttonHamburgerRef.current.classList.remove("inactive");
      logoRef.current.classList.remove("hide");
      headerRef.current.classList.remove("headeractive");
    }
  };

  return (
    <>
      <header ref={(ref) => (headerRef.current = ref)} className="App-header">
        <div ref={(ref) => (logoRef.current = ref)} className="App-logo">
          <span>room</span>
        </div>
        <div className="content-icon-mobile-nav">
          <span
            ref={(ref) => (buttonHamburgerRef.current = ref)}
            onClick={handleShowBar}
            className="icon-hamburger"
          >
            <img src="icon-hamburger.svg" alt=""></img>
          </span>
          <span
            ref={(ref) => (buttonCloseRef.current = ref)}
            onClick={handlecloseBar}
            className="icon-close"
          >
            <img src="icon-close.svg" alt=""></img>
          </span>
        </div>
        <nav ref={(ref) => (navRef.current = ref)} className="App-nav">
          <div className="App-content-menu">
            <ul>
              <li>
                <a href="home">home</a>
              </li>
              <li>
                <a href="home">shop</a>
              </li>
              <li>
                <a href="home">about</a>
              </li>
              <li>
                <a href="home">contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
