import React from 'react'
import './Hero.css'
import profile_img from '../../Asests/myphoto.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const fileurl = "/JaideepKureResume_.pdf";
const Hero = () => {
    const downloadResume = (fileurl) => {

        const link = document.createElement('a');
        link.href = fileurl;
        link.download = 'JaideepKureresume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div id="home" className='hero'>
            <img src={profile_img} alt='' />
            <h1><span>I'm Jaideep Kure,</span> Software Developer based in India.</h1>
            <p>I am a Passionate Software developer from Maharashtra ,India with 2 years.</p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
                <div className='hero-resume' onClick={() => { downloadResume(fileurl) }}>My resume</div>
            </div>
        </div>
    )

}

export default Hero