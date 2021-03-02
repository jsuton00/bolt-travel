import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/components/contactInfo.css';

const ContactInfo = (props) => {
  const { contact } = props;
  return (
    <>
      {contact && (
        <ul className="contact-info list-group">
          <li className="contact-info-item">
            <a
              href="https://g.page/bolttravel?share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bolt Travel Location"
            >
              <p className="contact-location">
                <FontAwesomeIcon icon={contact.location.icon} />{' '}
                {`${contact.location.streetAddress}, ${contact.location.postalCode} ${contact.location.city}, ${contact.location.country}`}
              </p>
            </a>
          </li>
          <li className="contact-info-item">
            <a
              href={`tel:${contact.phoneNumber.mainPhone}`}
              aria-label="Call Bolt Travel"
            >
              <p className="contact-phone">
                <FontAwesomeIcon icon={contact.phoneNumber.icon} />{' '}
                {contact.phoneNumber.mainPhone}
              </p>
            </a>
          </li>
          <li className="contact-info-item">
            <a
              href={`mailto:${contact.email.mainEmail}`}
              aria-label="Email Bolt Travel"
            >
              <p className="contact-email">
                <FontAwesomeIcon icon={contact.email.icon} />{' '}
                {contact.email.mainEmail}
              </p>
            </a>
          </li>
          <li className="contact-info-item">
            <Link to={contact.website.url} aria-label="Visit our website">
              <p className="contact-website">
                <FontAwesomeIcon icon={contact.website.icon} />{' '}
                {contact.website.linkName}
              </p>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default ContactInfo;
