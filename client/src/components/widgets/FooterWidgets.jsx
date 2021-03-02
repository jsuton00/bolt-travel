import React from 'react';
import { useContact } from '../../hooks/useContact';
import { SocialMediaButtons } from '../common/Buttons';
import ContactInfo from '../common/ContactInfo';

export const ContactWidget = () => {
  const [contactData] = useContact();

  return (
    <div className="footer-contact">
      <h5 className="footer-contact-title">Contact</h5>
      <ContactInfo contact={contactData} />
    </div>
  );
};

export const SocialMediaWidget = () => {
  return (
    <div className="footer-social-media">
      <h5 className="footer-social-media-title row">Follow Us:</h5>
      <SocialMediaButtons />
    </div>
  );
};
