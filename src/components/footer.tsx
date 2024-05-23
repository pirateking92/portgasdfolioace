import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <p>{new Date().getFullYear()} Matt Doyle</p>
      <div className="social-icons">
        <a
          href="https://github.com/pirateking92"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mattdoyle92/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
