import React from 'react'
import './Skills.css'
import theme_pattern from '../../Asests/theme_pattern.svg'
import Services_Data from './services_data'
import arrow_icon from '../../Asests/arrow_icon.svg'
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

            <div id='service' className="services">
                <div className="services-title">
                    <h1>My Skills</h1>
                    <img src={theme_pattern} alt="" />
                </div>

                <div className="services-container">
                    {Services_Data.map((service, index) => {
                        return <div key={index} className="services-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="services-readmore">
                                <p>Read More</p>
                                <img src={arrow_icon} alt="" />
                            </div>

                        </div>
                    })
                    }
                </div>

            </div>
        </>
    )
}

export default Skills