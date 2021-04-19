import { useState } from 'react';

export const useToggleForm = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);

  const openLoginForm = () => {
    closeSignInForm(showSignInForm);
    setShowLoginForm(!showLoginForm);
  };

  const openSignInForm = () => {
    closeLoginForm(showLoginForm);
    setShowSignInForm(!showSignInForm);
  };

  const closeLoginForm = (showLoginForm) => {
    if (showLoginForm === true) {
      setShowLoginForm(false);
    }
  };

  const closeSignInForm = (showSignInForm) => {
    if (showSignInForm === true) {
      setShowSignInForm(false);
    }
  };

  return [
    showSignInForm,
    showLoginForm,
    openLoginForm,
    openSignInForm,
    closeSignInForm,
    closeLoginForm,
  ];
};
