import React from 'react';
import NavMenu from '../components/Navigation/NavMenu';
import '../styles/components/navigation/navMenu.css';

const NavModal = (props) => {
  return (
    <div id="nav-modal" className="nav-modal container-fluid">
      <div className="nav-modal-content">
        <NavMenu {...props} />
      </div>
    </div>
  );
};

export default NavModal;
