import React from 'react';
import { useLocation } from 'react-router';
import { useToggleForm } from '../../hooks/useToggle';
import NavHeader from '../Navigation/NavHeader';
import { HeroImageSection, HeroMapSection } from './HeroSections';
import LoginPage from '../../containers/LoginPage';
import SignUpPage from '../../containers/SignUpPage';
import '../../styles/layouts/header.css';
import { useViewportContext } from '../../hooks/useViewport';

const Header = () => {
  const [
    showSignInForm,
    showLoginForm,
    openLoginForm,
    openSignInForm,
    closeSignInForm,
    closeLoginForm,
  ] = useToggleForm();
  const [width] = useViewportContext();
  const location = useLocation();

  console.log('Width:', width);
  return (
    <header id="header" className="header container-fluid">
      <NavHeader
        showSignInForm={showSignInForm}
        showLoginForm={showLoginForm}
        openSignInForm={openSignInForm}
        openLoginForm={openLoginForm}
        width={width}
      />
      {location.pathname === '/contact' ? (
        <HeroMapSection />
      ) : (
        <HeroImageSection />
      )}
      {showLoginForm ? (
        <LoginPage
          showLoginForm={showLoginForm}
          closeLoginForm={closeLoginForm}
        />
      ) : (
        <></>
      )}
      {showSignInForm ? (
        <SignUpPage
          showSignInForm={showSignInForm}
          closeSignInForm={closeSignInForm}
        />
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
