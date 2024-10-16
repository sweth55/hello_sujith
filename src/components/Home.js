import React from 'react';
import './Home.css';
import './Navbar.css';

const Home = () => {
  return (
    <section id="home">
      <h1 className="name">A Swetha</h1> {/* Name outside the navbar */}
      <nav className="navbar">
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm Swetha, a passionate developer with expertise in various technologies.</p>
          <button>Learn More</button>
        </div>
      </div>

      <div id="skills" className="section skills-section">
        <h2>Skills & Technologies</h2>
        <ul>
          <li>🌐 Web Development (React, Node.js, HTML, CSS)</li>
          <li>🖥️ Programming Languages (Python, Java, C++)</li>
          <li>📊 Data Analysis (Machine Learning, Deep Learning)</li>
          <li>☁️ Cloud Computing (AWS)</li>
          <li>📱 IoT (Arduino, Raspberry Pi)</li>
        </ul>
      </div>
      
      <div id="projects" className="section Project-section">
        <h2>My Projects</h2>
        <div className="projects-container">
          <div className="project">
            <h3>User Popularity Prediction of Instagram</h3>
            <p> Developed a model to predict users popularity, which was defined by followers growth and users engagement in
            the application,The proposed model predicted the users popularity, with R2 up to 0.852.The statistical analysis and features analysis results revealed that factors which can boost popularity is actively
            posting and following users, In contrast it was also found that having a large number of posts and following in the past will not reflect in
            growing popularity</p>
          </div>
          <div className="project">
            <h3>Chronic Kidney Disease Detection
            </h3>
            <p>Developed a comprehensive approach for chronic kidney disease (CKD) detection utilizing state-of-the-art machine
            learning technique, AdaBoost,The model utilized clinical parameters and patient demographics relevant to CKD diagnosis to enhance predictive
            performance. By leveraging the model on clinical dataset, Adaboost achieved the accuracy of 90 per cent.The project’s outcomes contributed to the development of more accurate and efficient CKD detection systems,
ultimately leading to better patient outcomes and resource allocation in clinical settings.
</p>
          </div>
          <div className="project">
            <h3>MOBILE RESPONSIVE NGO WEBSITE
            </h3>
            <p>Designed and developed a responsive website for an NGO using React.js as the frontend framework and Bootstrap
for styling. The website aims to provide information about the NGO’s mission, projects, and opportunities for
engagement.Deployed the website making it live and accessible for everyone
 
 
 Website Link: https://sweth55.github.io/new/</p>
          </div>
        </div>
      </div>

      <div id="contact" className="section contact-section">
        <h2>Contact Me</h2>
        <p>Email me at: <a href="swethachowdary316@gmail.com">swethachowdary316@gmail.com</a></p>
      </div>
    </section>
  );
};

export default Home;
