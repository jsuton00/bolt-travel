import React from 'react';
import LoginForm from '../components/User/LoginForm';
import '../styles/pages/loginPage.css';

const LoginPage = (props) => {
  const { showLoginForm, closeLoginForm } = props;
  return (
    <div id="login-page" className="login-page container-fluid">
      {showLoginForm ? <LoginForm close={() => closeLoginForm()} /> : ''}
    </div>
  );
};

export default LoginPage;
