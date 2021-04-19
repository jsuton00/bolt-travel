import React from 'react';

export const LoginLinkButton = (props) => {
  const { showLoginForm, openLoginForm } = props;
  return (
    <button
      id="btnLoginLink"
      name="btnLoginLink"
      type="button"
      className="btn btn-primary login-link"
      onClick={(e) => openLoginForm(e.target.value)}
      value={showLoginForm}
    >
      Login
    </button>
  );
};

export const SignUpLinkButton = (props) => {
  const { showSignInForm, openSignInForm } = props;
  return (
    <button
      id="btnSignUpLink"
      name="btnSignUpLink"
      type="button"
      className="btn btn-primary sign-up-link"
      onClick={(e) => openSignInForm(e.target.value)}
      value={showSignInForm}
    >
      Sign Up
    </button>
  );
};
