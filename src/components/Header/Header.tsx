import logo from '../../../public/images/logo-bookmark.svg';
import './Header.css';
const Header: React.FC = () => {
  return (
    <>
      <header className="main-header-container">
        <a href="#">
          <img src={logo} alt="logo-bookmark" className="logo-bookmark" />
        </a>

        <nav className="links-container">
          <a href="#features">FEATURES</a>

          <a href="#pricing">PRICING</a>

          <a href="#contact">CONTACT</a>

          <button className="login-button">LOGIN</button>
        </nav>
      </header>
    </>
  );
};
export default Header;
