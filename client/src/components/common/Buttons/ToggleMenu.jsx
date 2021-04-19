import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ToggleMenu = () => {
  return (
    <div
      id="toggle-menu-btn"
      role="button"
      aria-label="Toggle navigation menu"
      className="toggle-menu-btn"
    >
      <span className="toggle-btn-icon">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </span>
    </div>
  );
};

export default ToggleMenu;
