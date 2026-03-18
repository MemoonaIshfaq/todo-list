import React from 'react';
import ContactForm from '../components/ContactForm';

/**
 * ContactContainer Component
 * Smart/Container component that manages the contact form page
 * Acts as a wrapper for the ContactForm component
 */
function ContactContainer() {
  return (
    <div>
      <h1 className="main-heading">Get In Touch</h1>
      <ContactForm />
    </div>
  );
}

export default ContactContainer;
