import React from 'react';

export const LoginLinkButton = (props) => {
  const { openLoginForm, closeMenu, width } = props;

  const handleClick = () => {
    if (width < 1078) {
      openLoginForm();
      closeMenu();
    } else {
      openLoginForm();
    }
  };

  console.log(closeMenu);

  return (
    <button
      id="btnLoginLink"
      name="btnLoginLink"
      type="button"
      className="btn btn-primary login-link"
      onClick={handleClick}
    >
      Login
    </button>
  );
};

export const SignUpLinkButton = (props) => {
  const { openSignInForm, closeMenu, width } = props;

  const handleClick = () => {
    openSignInForm();
    if (width < 1078) {
      openSignInForm();
      closeMenu();
    } else {
      openSignInForm();
    }
  };

  return (
    <button
      id="btnSignUpLink"
      name="btnSignUpLink"
      type="button"
      className="btn btn-primary sign-up-link"
      onClick={handleClick}
    >
      Sign Up
    </button>
  );
};
