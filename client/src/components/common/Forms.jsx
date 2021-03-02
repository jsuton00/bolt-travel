import React from 'react';
import '../../styles/components/forms.css';

export const ContactForm = () => {
  return (
    <form
      id="contact-form"
      name="contact-form"
      className="contact-form card"
      encType="multipart/form-data"
    >
      <div className="contact-form-content card-body">
        <div className="contact-form-row input-row row">
          <div className="contact-form-input first-name">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div className="contact-form-input last-name">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="contact-form-input email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="contact-form-row input-row row">
          <div className="contact-form-input textarea-message">
            <textarea
              id="txtMessage"
              name="txtMessage"
              type="text"
              rows="7"
              placeholder="Enter your message..."
              required
            ></textarea>
          </div>
        </div>
        <div className="contact-form-row checkbox-row row">
          <div className="contact-form-input check-options">
            <label htmlFor="ckPrivacy">
              <input id="ckPrivacy" name="ckPrivacy" type="checkbox" required />
              Read the Privacy Policy
            </label>
          </div>
          <div className="contact-form-input check-options">
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
        <div className="contact-form-row submit-row row">
          <button
            id="btnSubmit"
            name="btnSubmit"
            type="submit"
            className="btnSubmit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};
