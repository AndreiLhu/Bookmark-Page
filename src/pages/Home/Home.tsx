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
          <button className="chromeButton">
            <a href="https://www.google.de/" target="blank">
              Get it on Chrome
            </a>
          </button>
          <button className="firefoxButton">
            <a
              href="https://mozilla.org/en-GB/firefox/new/?utm_medium=paidsearch&utm_source=google-rsa&utm_campaign=fxeu&utm_content=A144_A203_302573&gclid=CjwKCAjwnOipBhBQEiwACyGLumUIEDDfq2yaO1rjW-WiUF5hB6sqOGDG_f54LfRIx3a8yBgLjdGwixoCQIQQAvD_BwE"
              target="blank"
            >
              Get it on Firefox
            </a>
          </button>
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
