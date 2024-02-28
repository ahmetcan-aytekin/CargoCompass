import React from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Signup.css';
import heroBanner from '../../Components/Assets/hero-banner.jpg';

const Signup = () => {
    return (
        <div>
            <Navbar />
            <section className="signup-section" style={{ backgroundImage: `url(${heroBanner})` }}>
                <div className="signup-options-container">
                    <div className="signup-option-card shipper">
                        <div className="signup-option-image-wrapper">
                            <img src="https://www.yolda.com/wp-content/webp-express/webp-images/uploads/2023/04/Content-1001476564-1.jpg.webp" alt="Shipper" className="signup-option-image" />
                        </div>
                        <Link to="/fsignup" className="signup-option-link">
                            <FaArrowRight className="signup-option-icon shipper-text" />
                        </Link>
                        <span className="signup-option-text"><h2>Signup as a Shipper</h2></span>
                    </div>
                    <div className="signup-option-card carrier">
                        <div className="signup-option-image-wrapper">
                            <img src="https://www.yolda.com/wp-content/webp-express/webp-images/uploads/2023/04/Inline-162424158-1.jpg.webp" alt="Carrier" className="signup-option-image" />
                        </div>
                        <Link to="/csignup" className="signup-option-link">
                            <FaArrowRight className="signup-option-icon carrier-text" />
                        </Link>
                        <span className="signup-option-text"><h2>Signup as a Carrier</h2></span>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Signup;