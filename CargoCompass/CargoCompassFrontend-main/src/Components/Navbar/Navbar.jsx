import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };

  const navItems = [
    { href: "/home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#service", text: "Service" },
    { href: "/contacthome", text: "Contact" },
    { href: "/login", text: "Login", isButton: true },
    { href: "/signup", text: "Signup", isButton: true },
  ];

  return (
    <header id="top" className={`header ${isScrolled ? 'scrolled' : ''}`} data-header>
      <div className="container">
        <h1>
          <Link to="/home" className="logo">Cargo Compass</Link>
        </h1>
        <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
          <div className="navbar-top">
            <Link to="/home" className="logo">Cargo Compass</Link>
            <button className="nav-close-btn" aria-label="Close menu" onClick={toggleNavbar}></button>
          </div>
          <ul className="navbar-list">
            {navItems.map((item, index) => (
              <li key={index} className="navbar-item">
                {item.isButton ? (
                  <Link to={item.href} className="navbar-link" onClick={closeNavbar}>
                    <button className={item.text === "Giriş Yap" ? "login-button" : "register-button"}>{item.text}</button>
                  </Link>
                ) : (
                  <a href={item.href} className="navbar-link" onClick={closeNavbar}>
                    <span>{item.text}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-contact">
        </div>
        <button className="nav-open-btn" aria-label="Open menu" onClick={toggleNavbar}>
          <ion-icon name="menu-outline" />
        </button>
        <div className={`overlay ${isActive ? 'active' : ''}`} onClick={closeNavbar} data-overlay />
      </div>
    </header>
  );
};
