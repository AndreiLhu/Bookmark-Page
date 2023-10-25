import logo from '../../../images/logo-bookmark.svg';
import './Header.css';
const Header: React.FC = () => {
  return (
    <>
      <header className="mainHeaderContainer">
        <div>
          <a href="#">
            <img src={logo} alt="logoBookmark" className="logoBookmark" />
          </a>
        </div>

        <nav className="linksContainer">
          <a href="#home">HOME</a>

          <a href="#pricing">PRICING</a>

          <a href="#features">FEATURES</a>

          <a href="#questions">QUESTIONS</a>
          <button className="loginButton">LOGIN</button>
        </nav>
      </header>
    </>
  );
};
export default Header;
