import React from 'react';
import githubIcon from '../assets/github_icon.svg';
import rssIcon from '../assets/rs_school.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/rpg0007">
        <img className="githubIcon" src={githubIcon} alt="github link" />
      </a>
      <div className="footer_description">
        <p>Online Store 2023</p>
        <p>React</p>
      </div>
      <a href="https://rs.school/react/">
        <img className="rssIcon" src={rssIcon} alt="RSSchool link" />
      </a>
    </footer>
  );
};
