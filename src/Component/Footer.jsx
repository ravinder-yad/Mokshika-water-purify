import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaEnvelope
} from 'react-icons/fa';
import logo from "../assets/logo1.png";

const Footer = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains('light-theme'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const footerClasses = `py-12 transition-all duration-300 ${
    isLight ? 'bg-gray-100 text-gray-800' : 'bg-gray-900 text-gray-200'
  }`;

  const linkClasses = `transition-all duration-300 hover:opacity-80 text-sm ${
    isLight ? 'text-gray-600 hover:text-blue-700' : 'text-gray-400 hover:text-white'
  }`;

  const iconClasses = `text-2xl transition-all duration-300 ${
    isLight ? 'text-gray-600 hover:text-blue-700' : 'text-gray-400 hover:text-white'
  }`;

  return (
    <footer className={footerClasses}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Logo" className="h-[79px]" />
            </div>
            <p className="text-sm opacity-90 mb-4">
              Trusted RO Purifiers for every home and office. Clean, healthy, and mineral-rich water.  
              <span className="block mt-1 font-semibold text-blue-500">"MOKSHIKA WATER PURIFY"</span>
            </p>
            <div className="flex items-center mt-2">
              <FaPhone className="mr-2 text-blue-500" />
              <a href="tel:+919368885498" className={linkClasses}>+91 9368885498</a>
            </div>
            <div className="flex items-center mt-2">
              <FaEnvelope className="mr-2 text-blue-500" />
              <a href="mailto:mokshikawaterpurify@gmail.com" className={linkClasses}>mokshikawaterpurify@gmail.com</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-700">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/" className={linkClasses}>Home</Link>
              <Link to="/about" className={linkClasses}>About Us</Link>
              <Link to="/gallery" className={linkClasses}>Our Gallery</Link>
              <Link to="/contact" className={linkClasses}>Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-700">Our Services</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/ro-installation" className={linkClasses}>RO Installation</Link>
              <Link to="/water-purification" className={linkClasses}>Water Purification</Link>
              <Link to="/annual-maintenance" className={linkClasses}>Annual Maintenance</Link>
              <Link to="/filter-replacement" className={linkClasses}>Filter Replacement</Link>
              <Link to="/free-water-testing" className={linkClasses}>Free Water Testing</Link>
            </div>
          </div>

          {/* Connect With Us */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-700">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" className={iconClasses} aria-label="Facebook"><FaFacebook /></a>
              <a href="https://twitter.com" className={iconClasses} aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.instagram.com/mokshikawaterpurifyagra/?hl=en" className={iconClasses} aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" className={iconClasses} aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://wa.me/919760076957" className={iconClasses} aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
            <div className="mt-4">
              <h4 className="text-md font-semibold mb-2">Newsletter Signup</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`px-3 py-2 rounded-l-lg text-sm w-full focus:outline-none ${
                    isLight ? 'bg-white text-gray-800 border' : 'bg-gray-800 text-white border-gray-700'
                  }`}
                />
                <button className="px-4 py-2 rounded-r-lg text-white text-sm bg-blue-600 hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={`border-t mt-8 pt-6 text-center text-sm ${isLight ? 'border-gray-300' : 'border-gray-800'}`}>
          <p>
            &copy; {new Date().getFullYear()} Mokshika Water Purify. All Rights Reserved. |  
            Designed with <span role="img" aria-label="love">❤️</span> by <span className="text-blue-500">Mokshika Water Purify</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
