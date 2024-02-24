import "./Home.css";
import { Typography } from "@mui/material";
import ParticleBackground from "../Particles";
import ractImg from "../../images/React.png";
const Home = ({ skills }) => {
  return (
    <div className="home">
      <div className="ParticleBackground">
        <div className="heading">
          <Typography variant="h1">HELLO;</Typography>
          <Typography>I'm Ravishankar, FULL STACK DEVEELOPER (;</Typography>
        </div>

        <ParticleBackground />
      </div>

      <div className="skillContainer">
        <Typography variant="h3">SKILLS</Typography>
        <div className="skillBox">
          <div className="frontEndSkills">
            <Typography variant="h4">Front-End</Typography>
            <div className="skillList">
              {skills.map(
                (skill) =>
                  skill?.title === "Front-End" && (
                    <img key={skill._id} src={skill.image.url} alt="" />
                  )
              )}
            </div>
          </div>
          <div className="backEndSkills">
            <Typography variant="h4">Back-End</Typography>
            <div className="skillList">
              {skills.map(
                (skill) =>
                  skill?.title === "Back-End" && (
                    <img key={skill._id} src={skill.image.url} alt="" />
                  )
              )}
            </div>
          </div>
          <div className="otherSkills">
            <Typography variant="h4">Database</Typography>
            <div className="skillList">
              {skills.map(
                (skill) =>
                  skill?.title === "Database" && (
                    <img key={skill._id} src={skill.image.url} alt="" />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
