import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <div className="App-logo"><span>Logo</span></div>
          <div className="App-content-menu">
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="home">Shop</a></li>
              <li><a href="home">About</a></li>
              <li><a href="home">Contact</a></li>
              
            </ul>
          </div>
        </nav>
      </header>
      <section className="App-section-hero">
        <div className="App-content-hero">
          <div className="App-content-hero-img">
            <img src="" alt=""></img>
          </div>
          <div className="App-content-hero-text">
            <h1>Discover innovative ways to decorate</h1>
            <p>We provide unmatched quality, comfort, and style for property owners across the country. 
                Our experts combine form andnfunction in bringing your vision to life. Create a room in your 
                own style with our collection and make your property a reflection of you and what you love.
            </p>
            <span>Shop now</span>
          </div>
        </div>
      </section>

      <section className="App-section-about">
        <div className="App-content-about">
          <div className="App-content-about-img-left">
            <img src="" alt=""></img>
          </div>
          <div className="App-content-about-text">
            <h1>About our furniture</h1>
            <p>Our multifunctional collection blends design and function to suit your individual taste.
              Make each room unique, or pick a cohesive theme that best express your interests and what
              inspires you. Find the furniture pieces you need, from traditional to contemporary styles
              or anything in between. Product specialists are available to help you create your dream space.
            </p>
          </div>
          <div className="App-content-about-img-right">
            <img src="" alt=""></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
