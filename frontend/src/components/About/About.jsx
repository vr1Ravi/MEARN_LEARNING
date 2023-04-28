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
              {about !== "" ? about.title : role}
            </Typography>
          </div>
          <div className="aboutDescription">
            {about !== "" ? about.description : " "}
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

          <div className="work">
            <Typography variant="h3">LOOK WHAT I CAN DO</Typography>
            <div>
              <img src={plus} alt="plus" />
              <p>FrontEnd Dev.</p>
            </div>
            <div>
              <img src={plus} alt="plus" />
              <p>BackEnd Dev.</p>
            </div>
            <div>
              <img src={plus} alt="plus" />
              <p>APIs Creation</p>
            </div>
            <div>
              <img src={plus} alt="plus" />
              <p>Logo Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
