import React, { useState, useEffect } from 'react';
import { Hero } from '../../Components/Hero/Hero';
import { About } from '../../Components/About/About';
import { Service } from '../../Components/Service/Service';
import { Features } from '../../Components/Features/Features';
import { Footer } from '../../Components/Footer/Footer';
import '../../App.css'
const Home = () => {
  const [showBackTopBtn, setShowBackTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setShowBackTopBtn(true);
      } else {
        setShowBackTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Features />
      {showBackTopBtn && (
        <a href="#top" className="back-top-btn active" aria-label="Back to top" data-back-top-btn onClick={scrollToTop}>
        <ion-icon name="chevron-up"></ion-icon>
      </a>
      )}
      <Footer></Footer>
    </div>
  )
};

export default Home;
