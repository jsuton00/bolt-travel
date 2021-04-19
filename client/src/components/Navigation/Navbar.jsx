import React from 'react';
import { navHeaderLinks } from '../../constants/navLinks';
import { useNavLinks } from '../../hooks/useNavigations';
import { NavHeaderLinks } from './NavLinksMenu';
import {
  LoginLinkButton,
  SignUpLinkButton,
} from '../common/Buttons/ButtonLinks';

const Navbar = (props) => {
  const {
    showLoginForm,
    showSignInForm,
    openLoginForm,
    openSignInForm,
  } = props;
  const [navLinks] = useNavLinks(navHeaderLinks);
  return (
    <>
      <div className="nav-header-section nav-header-navlinks-items">
        <NavHeaderLinks navLinks={navLinks} />
      </div>
      <div className="nav-header-section nav-header-login-section">
        <div className="login-section">
          <LoginLinkButton
            showLoginForm={showLoginForm}
            openLoginForm={openLoginForm}
          />
        </div>
        <div className="sign-up-section">
          <SignUpLinkButton
            showSignInForm={showSignInForm}
            openSignInForm={openSignInForm}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
