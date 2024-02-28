import React from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Login.css';
import heroBanner from '../../Components/Assets/hero-banner.jpg';

const Login = () => {
  return (
    <div>
      <Navbar />
      <section className="login-section" style={{ backgroundImage: `url(${heroBanner})` }}>
        <div className="login-options-container">
          <div className="login-option-card shipper">
            <div className="login-option-image-wrapper">
              <img src="https://www.yolda.com/wp-content/webp-express/webp-images/uploads/2023/04/Content-1001476564-1.jpg.webp" alt="Shipper" className="login-option-image" />
            </div>
            <Link to="/flogin" className="login-option-link">
              <FaArrowRight className="login-option-icon shipper-text" />
            </Link>
            <span className="login-option-text"><h2>Log in as a Shipper</h2></span>
          </div>
          <div className="login-option-card carrier">
            <div className="login-option-image-wrapper">
              <img src="https://www.yolda.com/wp-content/webp-express/webp-images/uploads/2023/04/Inline-162424158-1.jpg.webp" alt="Carrier" className="login-option-image" />
            </div>
            <Link to="/clogin" className="login-option-link">
              <FaArrowRight className="login-option-icon carrier-text" />
            </Link>
            <span className="login-option-text"><h2>Log in as a Carrier</h2></span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
