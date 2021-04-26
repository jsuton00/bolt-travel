import React from 'react';
import SignUpForm from '../components/User/SignUpForm';

const SignUpPage = (props) => {
  const { showSignInForm, closeSignInForm } = props;
  return (
    <div id="signUp-page" className="sign-up-page container-fluid">
      {showSignInForm ? <SignUpForm closeForm={closeSignInForm} /> : ''}
    </div>
  );
};

export default SignUpPage;
