import React from 'react';
import '../../styles/components/signUpForm.css';
import { CloseFormButton } from '../common/Buttons/CloseButton';

const SignUpForm = (props) => {
  const { closeForm } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div
      id="signUp-form-container"
      className="signUp-form-container container-fluid"
    >
      <form
        id="signUpForm"
        name="signUpForm"
        onSubmit={handleSubmit}
        className="signUp-form card"
      >
        <div className="form-header card-header">
          <div className="close-form-btn-row">
            <CloseFormButton closeForm={() => closeForm()} />
          </div>
          <h5 className="form-title card-title">Register</h5>
          <p className="form-text card-text">
            Be Part of Bolt Travel's Community!
          </p>
        </div>
        <div className="form-body card-body">
          <div className="form-control-row input-row card-text">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="form-control-row input-row card-text">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="form-control-row input-row card-text">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-control-row checkbox-row row">
            <div className="check-options check-terms">
              <label htmlFor="ckTerms">
                <input id="ckTerms" name="ckTerms" type="checkbox" required />
                {`Accept Terms & Conditions`}
              </label>
            </div>
            <div className="check-options check-privacy">
              <label htmlFor="ckPrivacy">
                <input
                  id="ckPrivacy"
                  name="ckPrivacy"
                  type="checkbox"
                  required
                />
                Read the Privacy Policy
              </label>
            </div>
            <div className="check-options check-promotions">
              <label htmlFor="ckPromotions">
                <input
                  id="ckPromotions"
                  name="ckPromotions"
                  type="checkbox"
                  required
                />
                Allow to Receive Our Promotions
              </label>
            </div>
          </div>
          <div className="form-control-row submit-row card-text">
            <button
              id="btnSignUp"
              name="btnSignUp"
              type="submit"
              className="btn btn-primary sign-up-button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
