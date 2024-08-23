import './model.css';
const BackModel = (props) => {
    return <>
        <div className="model-wrapper"></div>
        <div className="model-container">
            <button className="model-btn" onClick={props.closeModel}> Go Back</button><br /><br />
            <h1>Backend Projects</h1><br />
            <div className='projects'>
                <div className='project'>
                    <div>
                        <h2>Book Store</h2><br />
                        <p style={{ width: "35rem" }}>
                        I developed a robust Bookstore Management application using Spring Boot, HTML, Java, CSS, and Bootstrap, which effectively streamlines bookstore operations and enhances user experience. The application features a comprehensive backend powered by Spring Boot, providing efficient handling of API requests and ensuring seamless data management. The front-end, crafted with HTML, CSS, and Bootstrap, offers a visually appealing and responsive design that simplifies navigation and user interaction. This integration of modern technologies not only facilitates intuitive book management but also delivers a polished and user-friendly interface, showcasing my ability to build full-stack applications with a strong emphasis on functionality and design.</p>
                    </div>
                    <div>
                        <a href="https://github.com/MrJaiKure/BookStore_springBootApp" target='_blank' rel='noreferrer'>Check It</a>
                    </div>
                </div>
                <div className='project'>
                    <div>
                        <h2>RegistrationForm</h2><br />
                        <p style={{ width: "35rem" }}>
                        I built an elegant and user-friendly registration form using HTML, CSS, and Bootstrap for the front-end, with Hibernate managing the backend operations. The form’s design, enhanced by Bootstrap, ensures a responsive and visually appealing interface that is both attractive and intuitive. HTML and CSS are utilized to create a clean and accessible layout, making it easy for users to understand and navigate the registration process. Hibernate handles data persistence seamlessly, providing robust backend support while maintaining a smooth user experience. This combination of technologies not only showcases my ability to create functional and aesthetically pleasing forms but also demonstrates my skill in integrating front-end and back-end solutions effectively.</p>
                    </div>
                    <div>
                        <a target='_blank' rel='noreferrer' href="https://github.com/MrJaiKure/RegistrationForm_Hibernet">Check It</a>
                    </div>
                </div>
                <div className='project'>
                    <div>
                        <h2>BankingApplication</h2><br />
                        <p style={{ width: "35rem" }}>I developed a straightforward banking application using Java Spring Boot and MySQL, where I gained valuable experience in effectively handling APIs. The application integrates Spring Boot for robust backend functionality and MySQL for reliable data storage and management. By designing and implementing RESTful APIs, I learned how to manage requests and responses efficiently, ensuring seamless communication between the front-end and back-end. This project not only refined my skills in API development but also deepened my understanding of building scalable and maintainable applications, showcasing my ability to handle real-world banking operations with precision and efficiency.</p>
                    </div>
                    <div>
                        <a target='_blank' rel='noreferrer' href="https://github.com/MrJaiKure/BankingApplication">Check It</a>
                    </div>
                </div>
                <div className='project'>
                    <div>
                        <h2>Weather App</h2><br />
                        <p style={{ width: "35rem" }}>
                        I developed a visually striking weather application that leverages external APIs to deliver real-time weather information. Using HTML, CSS, and Bootstrap, I crafted an engaging and responsive user interface that ensures an appealing and intuitive experience across all devices. The integration of external APIs allows the app to fetch and display accurate weather data dynamically. By combining these technologies, I enhanced the app's functionality and aesthetics, making it not only a practical tool for weather updates but also a visually attractive and user-friendly application.</p>
                    </div>
                    <div>
                        <a target='_blank' rel='noreferrer' href="https://github.com/MrJaiKure/Weather-App">Check It</a>
                    </div>
                </div>
            </div><br />

        </div>

    </>

}



export default BackModel