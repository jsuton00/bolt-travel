import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const CloseFormButton = (props) => {
  const { closeForm } = props;
  return (
    <button
      id="close-form-btn"
      name="close-form-btn"
      type="button"
      className="close-btn close-form-btn"
      onClick={closeForm}
    >
      <span id="close-btn-icon btn-icon">
        <FontAwesomeIcon icon={faTimes} />
      </span>
    </button>
  );
};
