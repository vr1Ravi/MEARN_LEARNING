import { Typography } from "@mui/material";
import React from "react";
import "./About.css";
// import img from "../../images/aboutimg.jpg";
import calisthenicsImg from "../../images/strong.png";
import travelImg from "../../images/travel.png";
import codingImg from "../../images/programmer.png";
import plus from "../../images/plus.png";
import pp from "../../images/PP.JPG";

const About = ({ about }) => {
  const role = " MERN DEVELOPER";
  return (
    <div className="about">
      <div className="aboutCard">
        <div className="top">
          <hr className="left" />
          <Typography>ALLOW ME TO INTRODUCE MYSELF</Typography>
          <hr className="right" />
        </div>

        <div>
          <div className="aboutImg">
            {/* <img src={about !== "" ? img : img} alt="img" /> */}
            <img src={pp} alt="" />
            <Typography style={{ marginBottom: "1rem" }}>
              Full Stack Developer
            </Typography>
          </div>
          <div className="aboutDescription">
            I'm obsessed with making things and even more obsessed with making
            things better. I've been actively involved in the web app
            development community since I graduated, and I've created websites
            and logos for a variety of organisations, including corporations and
            small businesses. My area of expertise is front-end programming,
            creating appealing UI with React, HTML, and CSS. I enjoy researching
            and developing new technologies. I am a self-driven individual who
            values perseverance and diligence.
          </div>
        </div>

        <div className="bottom">
          <div className="love">
            <Typography variant="h3">THINGS I LOVE</Typography>
            <div className="likes">
              <div className="love1">
                <img src={codingImg} alt="Coding" className="loveImg" />
                <span>Coding</span>
              </div>
              <div className="love2">
                <img src={travelImg} alt="Travel" className="loveImg" />
                <span>Travel</span>
              </div>
              <div className="love3">
                <img
                  src={calisthenicsImg}
                  alt="Calisthenics"
                  className="loveImg"
                />
                <span>Calisthenics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
