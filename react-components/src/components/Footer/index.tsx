import React from 'react';
import './index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__container">
          <div className="footer__gitHub gitHub">
            <a
              className="gitHub__kar"
              href="https://github.com/rpg0007"
              target="_blank"
              rel="noreferrer"
            >
              rpg0007
            </a>
          </div>
          <div className="footer__year">&copy; 2023</div>
          <a className="footer__rss" href="https://rs.school/js/" target="_blank" rel="noreferrer">
            rs school course js
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
