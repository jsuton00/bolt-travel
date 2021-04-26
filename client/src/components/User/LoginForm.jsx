import React from 'react';
import '../../styles/components/loginForm.css';
import { CloseFormButton } from '../common/Buttons/CloseButton';

const LoginForm = (props) => {
  const { closeForm } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div
      id="login-form-container"
      className="login-form-container container-fluid"
    >
      <form
        id="login-form"
        name="login-form"
        onSubmit={handleSubmit}
        className="login-form card"
      >
        <div className="form-header card-header">
          <div className="close-form-btn-row">
            <CloseFormButton closeForm={() => closeForm()} />
          </div>
          <h5 className="form-title card-title">Login</h5>
          <p className="form-text card-text">Welcome!</p>
        </div>
        <div className="form-body card-body">
          <div className="form-control-row input-row card-text">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-control-row input-row card-text">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-control-row submit-row card-text">
            <button
              id="btnLogin"
              name="btnLogin"
              type="submit"
              className="btn btn-primary login-btn"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
