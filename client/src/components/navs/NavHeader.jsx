import React from 'react';
import { Link } from 'react-router-dom';
import { useNavLinks } from '../../hooks/useNavLinks';
import { BrandLogo } from '../common/Images';
import { navHeaderLinks } from '../../constants/navLinks';
import { brandLogo } from '../../utils/fetchImages';
import '../../styles/components/navheader.css';
import { LoginLinkButton, SignUpLinkButton } from '../common/Buttons';

const NavHeader = (props) => {
  const {
    showLoginForm,
    showSignInForm,
    openLoginForm,
    openSignInForm,
  } = props;
  const [navLinks] = useNavLinks(navHeaderLinks);

  return (
    <nav id="nav-header" className="nav navbar nav-header row">
      <div className="nav-header-brand">
        <Link to="/" className="nav-header-brand-link row">
          <h1 className="nav-header-brand-name">
            <span className="brand-logo">
              <BrandLogo imgSrc={brandLogo.src} altText={brandLogo.altText} />
            </span>
            Bolt Travel
          </h1>
        </Link>
      </div>
      <div className="nav-header-item navbar-navlinks-items row">
        {navLinks.length > 0 &&
          navLinks.map((link, index) => {
            return (
              <Link
                key={index}
                to={link === 'homes' ? `/${link}` : `/${link}`}
                className="nav-header-navLinks-item"
              >
                <div className="nav-header-navLinks-link">
                  {link === 'products' ? 'homes' : link}
                </div>
              </Link>
            );
          })}
      </div>
      <div className="nav-header-item nav-login-items row">
        <div className="nav-login-item login-section">
          <LoginLinkButton
            showLoginForm={showLoginForm}
            openLoginForm={openLoginForm}
          />
        </div>
        <div className="nav-login-item sign-up-section">
          <SignUpLinkButton
            showSignInForm={showSignInForm}
            openSignInForm={openSignInForm}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
