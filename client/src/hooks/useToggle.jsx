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

  const closeLoginForm = () => {
    if (showLoginForm === true) {
      setShowLoginForm(false);
    }
  };

  const closeSignInForm = () => {
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

export const useToggleNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNavMenu = () => {
    return setIsOpen(!isOpen);
  };

  const closeNavMenu = () => {
    if (isOpen === true) {
      return setIsOpen(false);
    }
  };

  return [isOpen, openNavMenu, closeNavMenu];
};
