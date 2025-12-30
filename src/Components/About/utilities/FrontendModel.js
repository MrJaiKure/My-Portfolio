import './model.css';
const FrontModel = (props) => {
    return <>
        <div className="model-wrapper"></div>
        <div className="model-container">
            <button className="model-btn" onClick={props.closeModel}> Go Back</button><br /><br />
            <h1>Frontend Projects</h1><br />
            <div className='projects'>
            <div className='project'>
                    <div>
                        <h2 className='bg-white pl-10 text-black'>My Portfolio</h2><br />
                        <p style={{ width: "35rem" }}>I developed a personal portfolio website using ReactJS, HTML, and Bootstrap that vividly showcases my skills and projects with an exceptional user experience. By leveraging ReactJS, I crafted a highly interactive and responsive interface that ensures smooth transitions and real-time updates. The clean and modern design, powered by Bootstrap, guarantees a visually appealing and mobile-friendly experience. HTML structures the content, providing a solid foundation for my portfolio's dynamic features. This project not only highlights my technical expertise and design sensibility but also demonstrates my ability to create an engaging and professional online presence. </p>
                    </div>
                    <div>
                        <a target='_blank' rel='noreferrer' href="https://github.com/MrJaiKure/My-Portfolio">Check It</a>
                    </div>
                </div>
                <div className='project'>
                    <div>
                        <h2 className='bg-white pl-10 text-black' >Advertisment Website</h2><br />
                        <p style={{ width: "35rem" }}>The Course Advertisement Website is a sleek, responsive platform built with HTML, CSS, and Bootstrap to effectively showcase and promote educational courses. It features a visually appealing homepage with course categories, highlights, and testimonials, alongside detailed course listings and individual course pages. With a user-friendly design, intuitive navigation, and responsive layout, the site ensures a seamless experience across all devices, making it easy for prospective students to explore and enroll in courses.</p>
                    </div>
                    <div>
                        <a target="_blank" rel='noreferrer' href="https://github.com/MrJaiKure/assignment_Frontend">Check It</a>
                    </div>
                </div>
                <div className='project'>
                    <div>
                        <h2 className='bg-white pl-10 text-black' >TextUtils</h2><br />
                        <p style={{ width: "35rem" }}>This is a simple application built using the ReactJs technology  and Bootstrap for styling . This is very use full for checking the indentation of the paragraphs and setting the indentation of the text we can also count the words present in  it and many more opration we can perform on the text. </p>
                    </div>
                    <div>
                        <a target='_blank'  rel='noreferrer' href="https://github.com/MrJaiKure/TextUtils" >Check It</a>
                    </div>
                </div>
                <div className='project'>
                    <div>
                        <h2 className='bg-white pl-10 text-black' > Cars Website</h2><br />
                        <p style={{ width: "35rem" }}>This website is developed using only the html, css, Bootstrap or some of the cdn icons but this website is awesome for the user interaction . this website looks very atractive because of the sliders and images and styling of this website . in this project i had added an contact form through which user can contact to me. </p>
                    </div>
                    <div>
                        <a target='_blank'  rel='noreferrer' href="https://github.com/MrJaiKure/vehicles-buy-sell-website">Check It</a>
                    </div>
                </div>
                
            </div><br />

        </div>

    </>

}



export default FrontModel