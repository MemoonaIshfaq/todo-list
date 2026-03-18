import React, { useState } from 'react';

/**
 * ContactForm Component
 * Presentational component with controlled form inputs
 * Manages its own state for form fields
 */
function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change - updates state on every keystroke
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.comments.trim()
    ) {
      alert('Please fill out all fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Show success message
    setSubmitted(true);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      comments: ''
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container">
      {submitted && (
        <div className="success-message">
          ✓ Thank you! Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              className="form-input"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              aria-label="First Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              className="form-input"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              aria-label="Last Name"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            aria-label="Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="comments" className="form-label">
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            className="form-textarea"
            value={formData.comments}
            onChange={handleChange}
            placeholder="What would you like to say?"
            aria-label="Comments"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* Display current form state for demonstration */}
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px', fontSize: '0.9rem' }}>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>Current Form State:</p>
        <pre style={{ overflow: 'auto', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '4px' }}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default ContactForm;
