import React from "react";
import { useState } from "react";
import "./About.css";
import theme_pattern from "../../Asests/theme_pattern.svg";
import about_profile from "../../Asests/myphoto.jpg";
import FrontModel from "./utilities/FrontendModel";
import BackModel from "./utilities/backskills";

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
          {/* <div className="about-left">
            <img src={about_profile} alt="" />
          </div> */}

          <div className="about-right">
            <div className="about-para">
              <h2>
                <b> Education</b>
              </h2>
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
              <div className="about-skill">
                <p>
                  AWS <br />
                  Engineer
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
            <h1>2+ year</h1>
            <p> EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achivement">
            <h1>15+</h1>
            <p>PROJECT COMPLETED</p>
          </div>
        </div>
          <div className="about-achievement px-20 py-10 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold text-center mb-8">Experience</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AWS Trainee Experience */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h2 className="text-xl font-semibold text-yellow-400">
                    AWS Trainee
                  </h2>
                  <span className="text-sm text-gray-400">
                    Jan 2024 – Jun 2024
                  </span>
                </div>
                <h3 className="text-md font-medium mb-2 text-gray-200">
                  Square Vision Technology Pvt. Ltd.
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Gained hands-on experience with AWS services including EC2,
                  S3, Lambda, RDS, and CloudWatch. Assisted in deploying
                  scalable web applications, managing CI/CD pipelines, and
                  automating infrastructure using Docker and Jenkins for
                  optimized performance and reliability.
                </p>
              </div>

              {/* AWS Engineer Experience */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h2 className="text-xl font-semibold text-blue-400">
                    AWS Engineer
                  </h2>
                  <span className="text-sm text-gray-400">
                    Jul 2024 – Present
                  </span>
                </div>
                <h3 className="text-md font-medium mb-2 text-gray-200">
                  Square Vision Technology Pvt. Ltd.
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Leading cloud operations with a focus on CI/CD automation,
                  containerization using Docker and Kubernetes, and implementing
                  robust monitoring solutions. Responsible for maintaining
                  scalable, secure, and cost-efficient cloud infrastructure.
                </p>
              </div>
            </div>
          </div>
     
      </div>
      {openFModel && <FrontModel closeModel={closeFModel} />}
      {openBModel && <BackModel closeModel={closeBModel} />}
    </>
  );
};
export default About;
