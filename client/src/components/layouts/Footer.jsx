import React from 'react';
import NavFooter from '../navs/NavFooter';
import { ContactWidget, SocialMediaWidget } from '../widgets/FooterWidgets';
import '../../styles/layouts/footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer container-fluid">
      <div className="footer-content container">
        <div className="footer-body row">
          <div className="footer-col">
            <ContactWidget />
          </div>
          <div className="footer-col">
            <SocialMediaWidget />
          </div>
        </div>
      </div>
      <NavFooter />
    </footer>
  );
};

export default Footer;
