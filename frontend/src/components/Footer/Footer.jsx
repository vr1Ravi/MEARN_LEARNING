import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hello, I'm <b>Ravishanakar</b> , and I'm on a Full-Stack Development
          Adventure.
        </Typography>
        <Link to="/contact" className="footerContact">
          <Typography>Contact Me</Typography>
        </Link>
      </div>

      <div className="footerLinks">
        <Typography variant="h6">Social Media</Typography>
        <div className="links">
          <a href="https://github.com/RJ-BCA" target="black">
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ravi-jha-408679216"
            target="black"
          >
            <BsLinkedin />
          </a>
          <a href="https://www.instagram.com/v_r4ge/" target="black">
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
