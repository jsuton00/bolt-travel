import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../../styles/components/buttons/toggleButtons.css';

const ToggleMenuBtn = (props) => {
  const { isOpen, openNavMenu } = props;
  return (
    <div
      id="toggle-menu-btn"
      role="button"
      onClick={() => openNavMenu()}
      aria-label="Toggle navigation menu"
      className="toggle-menu-btn"
    >
      <span className="toggle-btn-icon">
        <FontAwesomeIcon icon={isOpen === true ? faTimes : faBars} size="2x" />
      </span>
    </div>
  );
};

export default ToggleMenuBtn;
