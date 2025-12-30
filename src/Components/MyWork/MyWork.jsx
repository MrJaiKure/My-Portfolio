import React from 'react'
import './MyWork.css'
import theme_pattern from '../../Asests/theme_pattern.svg'
import mywork_data from '../../Asests/mywork_data'
import arrow_icon from '../../Asests/arrow_icon.svg'

const MyWork = () => {
    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className=" grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {mywork_data.map((work, index) => {
                    console.log(work.w_link)
                    return <> <a href={work.w_link}  target="_blank" 
                    rel="noopener noreferrer"><img key={index} src={work.w_img}  alt=""  /> </a> </>
                })}
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />

            </div>
        </div>
    )
}

export default MyWork