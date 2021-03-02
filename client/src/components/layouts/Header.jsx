import React from 'react';
import NavHeader from '../navs/NavHeader';
import '../../styles/layouts/header.css';

const Header = (props) => {
  return (
    <header id="header" className="header container-fluid">
      <NavHeader {...props} />
    </header>
  );
};

export default Header;
