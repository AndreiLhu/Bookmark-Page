import React from 'react';
import logo from '../../../public/images/logo-bookmark.svg';
import whiteLogo from '../../../public/images/logo-bookmark-white.svg';
import iconClose from '../../../public/images/icon-close.svg';
import { TfiMenu } from 'react-icons/tfi';
import './MobileNavigation.css';
import facebook from '../../../public/images/icon-facebook.svg';
import twitter from '../../../public/images/icon-twitter.svg';

const MobileNavigation: React.FC = () => {
  const [isMovileNavigationOpen, setIsMobileNavigationOpen] =
    React.useState<boolean>(false);

  const toggleMobileNavigation = () => {
    setIsMobileNavigationOpen(!isMovileNavigationOpen);
  };

  return (
    <div className="main-mobile-navigation-container">
      <div
        className={`logo-nav-container ${
          isMovileNavigationOpen && 'logo-nav-container-dark'
        }`}
      >
        <div>
          {isMovileNavigationOpen ? (
            <a href="#">
              <img src={whiteLogo} alt="logo" className="nav-mobile-logo" />
            </a>
          ) : (
            <a href="#">
              <img src={logo} alt="logo" className="nav-mobile-logo" />
            </a>
          )}
        </div>
        <div>
          <button
            className="mobile-navbar-button"
            type="button"
            onClick={() => toggleMobileNavigation()}
          >
            {isMovileNavigationOpen ? (
              <img src={iconClose} alt="icon" className="icon-close" />
            ) : (
              <TfiMenu />
            )}
          </button>
        </div>
      </div>

      {isMovileNavigationOpen && (
        <div className="nav-list">
          <div className="link-list">
            <a href="#features" onClick={() => toggleMobileNavigation()}>
              FEATURES
            </a>
          </div>
          <div className="link-list">
            <a href="#pricing" onClick={() => toggleMobileNavigation()}>
              PRICING
            </a>
          </div>
          <div className="link-list">
            <a href="#contact" onClick={() => toggleMobileNavigation()}>
              CONTACT
            </a>
          </div>
          <button className="login-button__navigation">LOGIN</button>
          <div className="social-icons-container__navigation">
            <a href="https://www.facebook.com/">
              <img
                src={facebook}
                alt="logo-facebook"
                className="logo-facebook__navigation"
              />
            </a>
            <a href="https://twitter.com/">
              <img
                src={twitter}
                alt="logo-twitter"
                className="logo-twitter__navigation"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default MobileNavigation;
