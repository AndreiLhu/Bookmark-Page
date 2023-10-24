import './Header.css';
const Header: React.FC = () => {
  return (
    <>
      <div className="mainHeaderContainer">
        {/* <Link to="/">
          <img src={logo} alt="logo" className="navLogo" />
        </Link> */}

        <div className="headerContainer">
          <a href="#home">Home</a>

          <a href="#extension">Extension</a>

          <a href="#features">Features</a>

          <a href="#questions">Questions</a>
        </div>
      </div>
    </>
  );
};
export default Header;
