import './Home.css';
import homeImage from '../../../images/illustration-hero.svg';
const Home: React.FC = () => {
  return (
    <>
      <div className="mainHomeContainer" id="home">
        <div className="homeTextContainer">
          <h1> A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <button className="chromeButton">Get it on Chrome</button>
          <button className="firefoxButton"> Get it on Firefox </button>
        </div>
        <div className="homeImage">
          <img src={homeImage} alt="homeImage" />
        </div>
      </div>
      <div className="homeBackground"></div>
    </>
  );
};
export default Home;
