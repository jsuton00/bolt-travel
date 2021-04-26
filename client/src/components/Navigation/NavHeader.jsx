import React from 'react';
import BrandLogo from './BrandLogo';
import '../../styles/components/navigation/navheader.css';
import {
  showNavbarOrNavMenu,
  showToggleOrNavbar,
} from '../../utils/renderFunctions';
import { useToggleNavMenu } from '../../hooks/useToggle';

const NavHeader = (props) => {
  const { width } = props;
  const [isOpen, openNavMenu, closeNavMenu] = useToggleNavMenu();
  return (
    <div id="nav-header" className="nav navbar header-nav row">
      <div className="header-nav-section header-nav-brand row">
        <BrandLogo />
      </div>
      {showToggleOrNavbar(width, isOpen, openNavMenu, closeNavMenu, props)}
      {showNavbarOrNavMenu(width, isOpen, closeNavMenu, props)}
    </div>
  );
};

export default NavHeader;
