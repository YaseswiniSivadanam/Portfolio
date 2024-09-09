import React from "react";
import { Bio } from "../../Data/PerInfo";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import "./Footer.css";


import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="logo">Yaseswini Sivadanam</div>
        <ul className="nav">
          {/* <a href="#About" className="nav-link">About</a>
          <hr />
          <a href="#Skills" className="nav-link">Skills</a>
          <hr />
          <a href="#Experience" className="nav-link">Experience</a>
          <hr />
          <a href="#Projects" className="nav-link">Projects</a>
          <hr />
          <a href="#Education" className="nav-link">Education</a> */}
        
            <AnchorLink className='nav-link' href='#home'><p>Home</p></AnchorLink>
            <hr />
            <AnchorLink className='nav-link' offset={50} href='#about'><p>About Me</p></AnchorLink>
            <hr />
            <AnchorLink className='nav-link' offset={50} href='#skills'><p>Skills</p></AnchorLink>
            <hr />
            <AnchorLink className='nav-link' offset={50} href='#experience'><p>Experience</p></AnchorLink>
            <hr />
            <AnchorLink className='nav-link' offset={50} href='#projects'><p>Projects</p></AnchorLink>
            <hr />
            <AnchorLink className='nav-link' offset={50} href='#education'><p>Education</p></AnchorLink>
            <hr />
            <AnchorLink className='nav-link' offset={50} href='#contact'><p>Contact</p></AnchorLink>
        </ul>
        <div className="social-media-icons">
          {/* <a href={Bio.facebook} target="_blank" rel="noopener noreferrer" className="social-media-icon">
            <FacebookRounded />
          </a> */}
          <a href={Bio.twitter} target="_blank" rel="noopener noreferrer" className="social-media-icon">
            <Twitter />
          </a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="social-media-icon">
            <LinkedIn />
          </a>
          <a href={Bio.insta} target="_blank" rel="noopener noreferrer" className="social-media-icon">
            <Instagram />
          </a>
        </div>
        <p className="copyright">&copy; 2024 Yaseswini Sivadanam All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
