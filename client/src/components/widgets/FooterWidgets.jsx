import React, { useEffect, useState } from 'react';
import { socialMediaLinks } from '../../assets/data/contactData';
import { useContact } from '../../hooks/useContact';
import SocialLinkButton from '../common/Buttons/SocialLinks';
import ContactInfo from '../common/ContactInfo';
import '../../styles/layouts/pageLayouts/footerWidgets.css';
import '../../styles/components/buttons/socialLinks.css';

export const ContactWidget = () => {
  const [contactData] = useContact();

  return (
    <div className="footer-widget footer-contact">
      <h5 className="footer-contact-title">Contact</h5>
      <ContactInfo contact={contactData} />
    </div>
  );
};

export const SocialMediaWidget = () => {
  const [links, setLinks] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLinks(socialMediaLinks);
    });
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="footer-widget footer-social-media">
      <h5 className="footer-social-media-title row">Follow Us:</h5>
      <div className="social-media-buttons row">
        {links.length > 0 &&
          links.map((link, index) => {
            return (
              <SocialLinkButton
                key={index}
                href={index}
                linkUrl={link.link}
                linkName={link.name}
                linkIcon={link.icon}
              />
            );
          })}
      </div>
    </div>
  );
};
