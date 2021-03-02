import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { socialMediaLinks } from '../../assets/data/contactData';
import '../../styles/components/buttons.css';

export const SocialMediaButtons = () => {
  const [links, setLinks] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLinks(socialMediaLinks);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="social-media-buttons row">
      {links.length > 0 &&
        links.map((link, index) => {
          return (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Bolt Travel on ${link.name}`}
              className="social-media-button"
            >
              <div className="social-media-button-icon">
                <FontAwesomeIcon icon={link.icon} size="2x" className="" />
              </div>
            </a>
          );
        })}
    </div>
  );
};

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
