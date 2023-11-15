import './Home.css';
import homeImage from '../../../public/images/illustration-hero.svg';
import ImageBg from '../../components/ImageBg/ImageBg';
const Home: React.FC = () => {
  return (
    <>
      <div className="main-home-container" id="home">
        <ImageBg
          image_source={homeImage}
          alt="home-image"
          className="home-image"
          content={<div className="home-background"> </div>}
        />
        <div className="home-text-container">
          <h1> A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <button className="chrome-button">
            <a href="https://www.google.de/" target="blank">
              Get it on Chrome
            </a>
          </button>
          <button className="firefox-button">
            <a
              href="https://mozilla.org/en-GB/firefox/new/?utm_medium=paidsearch&utm_source=google-rsa&utm_campaign=fxeu&utm_content=A144_A203_302573&gclid=CjwKCAjwnOipBhBQEiwACyGLumUIEDDfq2yaO1rjW-WiUF5hB6sqOGDG_f54LfRIx3a8yBgLjdGwixoCQIQQAvD_BwE"
              target="blank"
            >
              Get it on Firefox
            </a>
          </button>
        </div>
        {/* <ImageBg
          image_source={homeImage}
          alt="home-image"
          className="home-image"
          content={<div className="home-ground"> </div>}
        /> */}

        {/* <div className="home-image">
          <img src={homeImage} alt="home-image" />
        </div> */}
      </div>
      {/* <div className="home-background"></div> */}
    </>
  );
};
export default Home;
