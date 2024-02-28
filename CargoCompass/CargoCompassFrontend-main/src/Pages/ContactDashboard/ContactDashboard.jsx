import React, { useState } from 'react';
import './ContactDashboard.css';
import CarrierDashboard from '../../Components/CarrierDashboard/CarrierDashboard';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactInfo);
  };

  return (
    <div className='body'>
    <div className="contact-page-dashboard-container">
      <main className="contact-content-dashboard">
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, please fill out the form below and we'll get back to you as soon as possible.</p>
        <form className="contact-form-dashboard" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={contactInfo.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
    </div>
  );
};

export default Contact;
