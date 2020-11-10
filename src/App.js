import ContentDescription from 'components/ContentDescription/ContentDescription';
import ContentImg from 'components/ContentImg/ContentImg';
import HeroInfo from 'components/HeroInfo/HeroInfo';
import data from "./data.json"
import './App.css';
import { useEffect, useRef } from 'react';
import HomePage from 'components/HeroInfo/HeroInfo';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <div className="App-logo"><span>room</span></div>
          <div className="App-content-menu">
            <ul>
              <li><a href="home">home</a></li>
              <li><a href="home">shop</a></li>
              <li><a href="home">about</a></li>
              <li><a href="home">contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <section className="App-section-hero">
        <HeroInfo/>
      </section>

      <section className="App-section-about">
        <div className="App-content-about">
          <div className="App-content-about-img-left">
            <img src="image-about-dark.jpg" alt=""></img>
          </div>
          <div className="App-content-about-text">
            <h2 className="title-about-text">About our furniture</h2>
            <p>Our multifunctional collection blends design and function to suit your individual taste.
              Make each room unique, or pick a cohesive theme that best express your interests and what
              inspires you. Find the furniture pieces you need, from traditional to contemporary styles
              or anything in between. Product specialists are available to help you create your dream space.
            </p>
          </div>
          <div className="App-content-about-img-right">
            <img src="image-about-light.jpg" alt=""></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
