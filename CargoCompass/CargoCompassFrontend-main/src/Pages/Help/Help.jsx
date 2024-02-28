import React from 'react';
import DashboardSidebar from '../../Components/Dashboard/FreighterDashboard';
import './Help.css';

const HelpPage = () => {
  return (
    <div className="help-page-container">
      <main className="help-content">
        <h1>How Can We Help You Today?</h1>
        <p>Welcome to the Cargo Compass Support Center. Whether you're experiencing issues or just have some questions, we're here to help. Our dedicated team is on deck to steer you in the right direction.</p>
        
        <div className="contact-section">
          <h2>Contact Our Support Team</h2>
          <p>We understand the importance of smooth sailing in your logistics journey. That's why our customer support sails are always hoisted to catch your queries.</p>
          <div className="contact-info">
            <p><i className="fas fa-phone"></i> +1 (234) 567-8900</p>
            <p><i className="fas fa-envelope"></i> support@cargocompass.com</p>
            <p>We're available around the clock, across all timezones, ensuring that no matter where you are, help is just a call or click away.</p>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p>For quick answers, check out our FAQ section where you'll find responses to common queries. If you don't find what you're looking for, don't hesitate to reach out.</p>
        </div>
      </main>
    </div>
  );
};

export default HelpPage;
