import React from 'react';
import ContactInfo from '../components/common/ContactInfo';
import { ContactForm } from '../components/common/Forms';
import { useContact } from '../hooks/useContact';
import '../styles/pages/contactPage.css';

const ContactPage = () => {
  const [contactData] = useContact();

  return (
    <>
      <div className="contact-section container-fluid">
        <div className="contact-content container">
          <h3 className="contact-title row">Contact</h3>
          <div className="contact-body row">
            <div className="contact-body-col contact-info-container">
              <h4 className="contact-title row">Bolt Travel</h4>
              <ContactInfo contact={contactData} />
            </div>
            <div className="contact-body-col contact-form-container">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
