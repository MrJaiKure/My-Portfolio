import React from 'react'
import './About.css'
import theme_pattern from '../../Asests/theme_pattern.svg'
import about_profile from '../../Asests/myphoto.jpg'
const About = () => {
    return (
        <div id='about' className='about'>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio pariatur magni eligendi. Distinctio voluptatum nihil id est laboriosam cumque accusantium, in voluptates necessitatibus repellat suscipit eveniet laudantium, illo reiciendis.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas provident blanditiis adipisci. Dolorem obcaecati inventore officiis aut rem perspiciatis.</p>

                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HMTL & CSS</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill"><p>React Js</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "80%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>10+</h1>
                    <p>PROJECT COMPLETED</p>
                </div>
            </div>
        </div>

    )
}
export default About