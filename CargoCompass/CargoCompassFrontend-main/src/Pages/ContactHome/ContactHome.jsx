import React, { useState } from 'react';
import heroBanner from '../../Components/Assets/hero-banner.jpg';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';
import './ContactHome.css'

const ContactHome = () => {
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
    <div>
      <Navbar />

      <section style={{ backgroundImage: `url(${heroBanner})` }} className="hero-section">
        <div className="contact-home-container">
          <main className="contact-content-home">
            <h1 >Contact Us</h1>
            <p >If you have any questions or feedback, please fill out the form below and we'll get back to you as soon as possible.</p>
            <form className="contact-form-home" onSubmit={handleSubmit}>
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
      </section>
      <Footer />
    </div>
  );
};

export default ContactHome;
