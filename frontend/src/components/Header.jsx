import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../images/logo.png";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  return (
    <ReactNavbar
      logo={logo}
      logoWidth="8rem"
      logoHeight="6.4rem"
      logoHoverColor="red"
      logoHover="hsl(250, 100%, 75%)"
      navColor1="white"
      navColor2="hsl(162.17deg 48.45% 20.26%)"
      burgerColor="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      //<---- Link Text ---->
      link1Text="Home"
      link2Text="Projects"
      link3Text="About"
      link4Text="Contact"
      //<---- Link Url --->
      link1Url="/"
      link2Url="/projects"
      link3Url="/about"
      link4Url="/contact"
      link1ColorHover="White"
      link1Color="hsl(250, 100%, 75%)"
      link1Size="1.3rem"
      link1Padding="2vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="hsl(250, 100%, 75%)"
      profileIconColorHover="white"
    />
  );
};

export default Header;
