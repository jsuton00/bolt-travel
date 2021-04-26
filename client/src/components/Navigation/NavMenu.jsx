import React from 'react';
import Navbar from './Navbar';
import '../../styles/components/navigation/navMenu.css';

const NavMenu = (props) => {
  return (
    <div className="nav-menu mobile-menu container">
      <Navbar {...props} />
    </div>
  );
};

export default NavMenu;
