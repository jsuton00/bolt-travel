import React from 'react';
import ToggleMenuBtn from '../components/common/Buttons/ToggleMenu';
import Navbar from '../components/Navigation/Navbar';
import NavModal from '../containers/NavModal';

export const showToggleOrNavbar = (
  width,
  isOpen,
  openNavMenu,
  closeNavMenu,
  props,
) => {
  if (width < 1078) {
    return (
      <div className="header-nav-section toggle-menu-section row">
        <ToggleMenuBtn
          width={width}
          isOpen={isOpen}
          openNavMenu={openNavMenu}
        />
      </div>
    );
  } else {
    return <Navbar width={width} closeMenu={closeNavMenu} {...props} />;
  }
};

export const showNavbarOrNavMenu = (width, open, closeMenu, props) => {
  if (width < 1078) {
    if (open === true) {
      return (
        <NavModal width={width} open={open} closeMenu={closeMenu} {...props} />
      );
    } else {
      return <></>;
    }
  } else {
    return <></>;
  }
};
