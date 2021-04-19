import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ToggleMenu from '../common/Buttons/ToggleMenu';
import { BrandLogo } from '../common/Images';
import { brandLogo } from '../../utils/fetchImages';
import '../../styles/components/navigation/navheader.css';

const NavHeader = (props) => {
  const { width } = props;
  return (
    <nav id="nav-header" className="nav nav-header row">
      <div className="nav-header-section nav-header-brand">
        <Link to="/" className="nav-header-brand-link">
          <h1 className="nav-header-brand-name">
            <span className="brand-logo">
              <BrandLogo imgSrc={brandLogo.src} altText={brandLogo.altText} />
            </span>
            Bolt Travel
          </h1>{' '}
        </Link>
      </div>
      {width < 988 ? (
        <div className="nav-header-section toggle-menu-section">
          <ToggleMenu />
        </div>
      ) : (
        <Navbar {...props} />
      )}
    </nav>
  );
};

export default NavHeader;
