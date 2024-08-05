import React from "react";
import { useState } from "react";
import "./About.css";
import theme_pattern from "../../Asests/theme_pattern.svg";
import about_profile from "../../Asests/myphoto.jpg";
import FrontModel from "./utilities/FrontendModel";
import BackModel from "./utilities/backskills";

// import backskills from './backskills'
const About = () => {
  const [openFModel, setOpenFModel] = useState(false);

  const closeFModel = () => {
    setOpenFModel(false);
  };
  const [openBModel, setOpenBModel] = useState(false);

  const closeBModel = () => {
    setOpenBModel(false);
  };

  return (
    <>
      <div id="about" className="about">
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">
          <div className="about-left">
            <img src={about_profile} alt="" />
          </div>

          <div className="about-right">
            <div className="about-para">
            <h2> Education</h2>
            <hr />
                <div className="education">
              
              <div>
                <h5>Bachelor's of Engineering</h5>
                <p>SPPU University,Pune,Maharashtra.</p>
                <p>Cgpa : 7.83</p>
              </div>
              <div>
                <h5>Higher Secondary Certificate (HSC)</h5>
                <p>Maharashtra State Board.</p>
                <p>Percentage : 67.38</p>
              </div>
              <div>
                <h5>Secondary School Certificate (SSC)</h5>
                <p>Maharashtra State Board.</p>
                <p>Parcentage: 67.48</p>
              </div>
            </div>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>
                  Frontend <br />
                  Development
                </p>
                <hr style={{ width: "60%" }} />

                <button
                  onClick={() => {
                    setOpenFModel(true);
                  }}
                >
                  More About Skills
                </button>
              </div>
              <div className="about-skill">
                <p>
                  Backend <br />
                  Development
                </p>
                <hr style={{ width: "60%" }} />
                <button onClick={() => setOpenBModel(true)}>
                  More About Skills
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="about-achivements">
          <div className="about-achivement">
            <h1>Fresher</h1>
            <p> EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>15+</h1>
            <p>PROJECT COMPLETED</p>
          </div>
        </div>
      </div>
      {openFModel && <FrontModel closeModel={closeFModel} />}
      {openBModel && <BackModel closeModel={closeBModel} />}
    </>
  );
};
export default About;
