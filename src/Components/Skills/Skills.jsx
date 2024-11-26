import React from "react";
import "./Skills.css";
import theme_pattern from "../../Asests/theme_pattern.svg";
import Services_Data from "./services_data";
import arrow_icon from "../../Asests/arrow_icon.svg";
// import FrontModel from './utilities/FrontendModel'
// import BackModel from './utilities/backskills'

const Skills = () => {
  // const [openFModel, setOpenFModel] = useState(false);

  // const closeFModel = () => {

  //     setOpenFModel(false)
  // };
  // const [openBModel, setOpenBModel] = useState(false);

  // const closeBModel = () => {

  //     setOpenBModel(false)
  // };

  return (
    <>
      <div id="service" className="services">
        <div className="services-title">
          <h1>My Skills</h1>
          <img src={theme_pattern} alt="" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Services_Data.map((service, index) => (
            <div
              key={index}
              className="services-format p-6 shadow-lg rounded-lg transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-white">
                {service.s_no}
              </h3>
              <h2 className="text-2xl font-bold text-gray-800 mt-1">
                {service.s_name}
              </h2>
              <p className="text-gray-600 mt-4">{service.s_desc}</p>
              <div className="services-readmore mt-6 flex items-center justify-between text-blue-500">
                <p className="font-medium">Read More</p>
                <img src={arrow_icon} alt="" className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
