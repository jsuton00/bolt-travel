import React from 'react';
import { navHeaderLinks } from '../../constants/navLinks';
import { useNavLinks } from '../../hooks/useNavigations';
import { NavHeaderLinks } from './NavbarMenu';
import {
  LoginLinkButton,
  SignUpLinkButton,
} from '../common/Buttons/ButtonLinks';
import '../../styles/components/navigation/navbar.css';

const Navbar = (props) => {
  const {
    showLoginForm,
    showSignInForm,
    openLoginForm,
    openSignInForm,
    closeMenu,
    width,
  } = props;
  const [navLinks] = useNavLinks(navHeaderLinks);
  return (
    <nav className="header-nav-section header-navbar row">
      <div className="header-navbar-menu row">
        <NavHeaderLinks
          width={width}
          navLinks={navLinks}
          closeMenu={closeMenu}
        />
      </div>
      <div className="header-navbar section header-nav-login row">
        <div className="login-section">
          <LoginLinkButton
            showLoginForm={showLoginForm}
            openLoginForm={openLoginForm}
            closeMenu={closeMenu}
            width={width}
          />
        </div>
        <div className="sign-up-section">
          <SignUpLinkButton
            showSignInForm={showSignInForm}
            openSignInForm={openSignInForm}
            closeMenu={closeMenu}
            width={width}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
