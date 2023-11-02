import logo from '../../assets/images/logo-bookmark.svg';
import './Header.css';
const Header: React.FC = () => {
  return (
    <>
      <header className="main-header-container">
        <div>
          <a href="#">
            <img src={logo} alt="logo-bookmark" className="logo-bookmark" />
          </a>
        </div>

        <nav className="links-container">
          {/* <a href="#home">HOME</a> */}

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
