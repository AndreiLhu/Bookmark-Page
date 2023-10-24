import './Home.css';
// import homeImage from '../../../images/illustration-hero.svg';
const Home: React.FC = () => {
  return (
    <>
      <div className="mainHomeContainer" id="home">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis
            delectus praesentium ipsa voluptates veniam est? Quae vitae delectus
            fugit possimus quod aut blanditiis dolore et velit quo cumque
            reprehenderit accusamus excepturi, voluptatibus ex repellendus vero
            voluptate aspernatur doloribus minus a consequatur dolorem soluta
            dolores? Blanditiis voluptatibus iure beatae minima.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis
            delectus praesentium ipsa voluptates veniam est? Quae vitae delectus
            fugit possimus quod aut blanditiis dolore et velit quo cumque
            reprehenderit accusamus excepturi, voluptatibus ex repellendus vero
            voluptate aspernatur doloribus minus a consequatur dolorem soluta
            dolores? Blanditiis voluptatibus iure beatae minima.
          </p>
          <h1> A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <button>Get it on Chrome</button>
          <button> Get it on Firefox </button>
        </div>
        {/* <div>
          <img src={homeImage} alt="homeImage" />
        </div> */}
      </div>
    </>
  );
};
export default Home;
