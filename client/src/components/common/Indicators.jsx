import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Loading = () => {
  return (
    <div className="lds-ring loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export const ErrorMessage = (props) => {
  const { errorMessage } = props;
  return (
    <div className="error-message card">
      <div className="error-message-img card-img-top">
        <p className="error-message-icon card-text">
          <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
        </p>
      </div>
      <div className="error-message-body card-body">
        <h5 className="error-message-text card-title">{errorMessage}</h5>
      </div>
    </div>
  );
};
