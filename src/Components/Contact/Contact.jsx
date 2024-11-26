import React from 'react'
import './Contact.css'
import theme_pattern from '../../Asests/theme_pattern.svg'
import mail_icon from '../../Asests/mail_icon.svg'
import location_icon from '../../Asests/location_icon.svg'
import call_icon from '../../Asests/call_icon.svg'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "2904b64f-f20a-4260-9192-5dd0db6f29de");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />

            </div>

            <div className="contact-section">
                <div className="contact-left"><h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects.</p>
                    <div className="contact-details" >
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><a href="/" id='link-style'><i>kurejaideep2003@gmail.com</i></a><p></p>
                        </div>
                        <div className="contact-detail ">
                            <img src={call_icon} alt="" /><a href="/" id='link-style'><i>+918080318136</i></a>

                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><a href="/" id='link-style' ><i>Pune , Maharashtra</i></a>
                        </div>
                    </div>

                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' />
                    <label htmlFor="">your Email</label>
                    <input type="email" placeholder='Enter your email' name="email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type="submit" className="contact-submit">Submit </button>

                </form>
            </div>
        </div>
    )
}

export default Contact