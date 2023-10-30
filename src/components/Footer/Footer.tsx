import './Footer.css';
import logo from '../../../images/logo-bookmark-white.svg';
import facebook from '../../../images/icon-facebook.svg';
import twitter from '../../../images/icon-twitter.svg';

const Footer: React.FC = () => {
  return (
    <div className="main-footer-div">
      <div className="logo-links-container">
        <a href="#">
          <img
            src={logo}
            alt="logo-bookmark"
            className="footer-logo-bookmark"
          />
        </a>

        <nav className="footer-links-container">
          <a href="#features">FEATURES</a>

          <a href="#pricing">PRICING</a>

          <a href="#contact">CONTACT</a>
        </nav>
      </div>
      <div className="social-icons-container">
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="logo-facebook" className="logo-facebook" />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="logo-twitter" className="logo-twitter" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
