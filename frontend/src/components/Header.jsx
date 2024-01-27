import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../images/p1.jpg";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="home-logo">
          <Link to="/">
            <img
              style={{
                width: "70px",
                height: "70px",
                border: "7px solid white",
                borderRadius: "100%",
              }}
              src={profileImg}
              alt="profile"
            />
          </Link>
        </div>
        <div className="header-links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/account">Me</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
