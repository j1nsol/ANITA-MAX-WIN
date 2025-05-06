import React from 'react';
import { footerStyles } from '../../styles/Footer';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
   
    { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/13d210c68086001642bb60170b5e7d70bdab33e59a029dadfcc8a1ae0a7b268e?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Facebook", label: "Visit our Facebook page" },
    { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/a3501587c775982592b4d804dd158b45124c5a700efa2c6db7006627b95d9a10?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "X", label: "Follow us on X" },
    { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/16b5ff9a5e81c9bafc0ad3d0d07f279a7dfb21c83395b34c6f9924d42acc803e?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "GitHub", label: "Visit our GitHub" }
  ];

  const navigationLinks = [
    { text: "About us", href: "/aboutus", label: "Learn more about our company" },
    { text: "Work with us", href: "/careers", label: "View career opportunities" },
    { text: "Business Contact", href: "/contact", label: "Get in touch with our business team" }
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-brand">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/2d277fec089365c9cbe05177f4b681c235ea3a6488f1e0e646cf1c3413e0dda5?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
              alt="Company logo"
              className="footer-logo"
              width="50"
              height="50"
            />
            <span className="footer-brand-text"></span>
          </div>

          <nav className="footer-column" aria-label="Footer navigation">
            <ul className="footer-links">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link"
                    aria-label={link.label}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-column-social">
            <h2 className="social-title">Join our Community</h2>
            <div className="social-icons" role="list" aria-label="Social media links">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="social-icon-link"
                  aria-label={icon.label}
                >
                  <img
                    loading="lazy"
                    src={icon.src}
                    alt={icon.alt}
                    className="social-icon"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="copyright">
          © {currentYear} Anita Maxwin | All Rights Reserved.
        </p>
      </div>

      <style jsx>{footerStyles}</style>
    </footer>
  );
}
