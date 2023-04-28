import "./Home.css";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine";
import ParticleBackground from "../Particles";

const Home = ({ skills, timeline }) => {
  return (
    <div className="home">
      <div className="ParticleBackground">
        <div className="heading">
          <Typography variant="h1">HELLO;</Typography>
          <Typography>
            I'm Ravishankar, Design and Front-End Developer (;
          </Typography>
        </div>

        <ParticleBackground />
      </div>
      <div className="homeContainer">
        <Typography variant="h3" style={{ color: "hsl(250, 100%, 75%)" }}>
          TIMELINE
        </Typography>
        <TimeLine timeline={timeline} />
      </div>

      <div className="skillBox">
        <Typography variant="h3">SKILLS</Typography>
        <div className="skillCube">
          <div className="cubeSkillFaces cubeSkillFace1">
            {skills !== "" ? (
              <img src={skills.image1.url} alt="face1" />
            ) : (
              <img src="" alt="face1" />
            )}
          </div>
          <div className="cubeSkillFaces cubeSkillFace2">
            {skills !== "" ? (
              <img src={skills.image2.url} alt="face2" />
            ) : (
              <img src="" alt="face2" />
            )}
          </div>
          <div className="cubeSkillFaces cubeSkillFace3">
            {skills !== "" ? (
              <img src={skills.image3.url} alt="face3" />
            ) : (
              <img src="" alt="face3" />
            )}
          </div>
          <div className="cubeSkillFaces cubeSkillFace4">
            {skills !== "" ? (
              <img src={skills.image4.url} alt="face4" />
            ) : (
              <img src="" alt="face4" />
            )}
          </div>
          <div className="cubeSkillFaces cubeSkillFace5">
            {skills !== "" ? (
              <img src={skills.image5.url} alt="face5" />
            ) : (
              <img src="" alt="face5" />
            )}
          </div>
          <div className="cubeSkillFaces cubeSkillFace6">
            {skills !== "" ? (
              <img src={skills.image6.url} alt="face1" />
            ) : (
              <img src="" alt="face6" />
            )}
          </div>
        </div>

        <div className="cubeShadow"></div>
      </div>
    </div>
  );
};

export default Home;
