import React from 'react'
import './Footer.css'
import footer_logo from '../../Asests/MyLogo.jpg'
import user_icon from '../../Asests/user_icon.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img id='logo' src={footer_logo} alt="" />
                    <p>I am a devloper</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />

                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />

            <div className="footer-bottom">
                <p className='footer-bottom-left'> @2024 Jaideep Kure. All rights reserved</p>
                <div className="footer-bottom-right">
                    <a href="/" id='link-style'>Term of Services</a>
                    <a href="/" id='link-style'>Privacy Policy</a>
                    <a href="/" id='link-style'>Connet with me</a>
                </div>
            </div>

        </div>
    )
}

export default Footer