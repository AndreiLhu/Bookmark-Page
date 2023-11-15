import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/images/logo-bookmark.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import './MobileNavigation.css';

const MobileNavigation: React.FC = () => {
  const [isMovileNavigationOpen, setIsMobileNavigationOpen] =
    React.useState<boolean>(false);

  const toggleMobileNavigation = () => {
    setIsMobileNavigationOpen(!isMovileNavigationOpen);
  };

  return (
    <div className="main-mobile-navigation-container">
      <div className="logo-nav-container">
        <div>
          <a href="#">
            <img src={logo} alt="logo" className="nav-mobile-logo" />
          </a>
        </div>
        <div>
          <button
            className="mobile-navbar-button"
            type="button"
            onClick={() => toggleMobileNavigation()}
          >
            {isMovileNavigationOpen ? <AiOutlineClose /> : <FiMenu />}
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
        </div>
      )}
    </div>
  );
};
export default MobileNavigation;
