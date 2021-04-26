import React from 'react';
import { useHistory } from 'react-router';
import { brandLogo } from '../../utils/fetchImages';

const BrandLogo = () => {
  const history = useHistory();
  const goToHome = () => {
    return history.push('/');
  };
  return (
    <div onClick={() => goToHome()} className="header-nav-brand-logo">
      <img src={brandLogo.src} alt={brandLogo.altText} />
    </div>
  );
};

export default BrandLogo;
