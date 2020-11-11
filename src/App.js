import './App.css';
import HomeRoom from 'components/HomeRoom/HomeRoom';
import NavBar from 'components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
      <section className="App-section-hero">
        <HomeRoom/>
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
