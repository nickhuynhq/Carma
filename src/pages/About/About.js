import React from "react";
import "./About.scss";
import Header from "../../components/Header/Header";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import ProfileImage from "../../assets/images/profile.jpg"
import Facebook from '../../assets/icons/facebook.svg'
import Twitter from '../../assets/icons/twitter.svg'
import LinkedIn from '../../assets/icons/linkedin.svg'
import GitHub from '../../assets/icons/github.svg'

const About = () => {
  return (
    <>
      <div className="about__header">
        <Header />
      </div>
      <div className="about">
        <section className="about__section">
          <h1 className="about__title">About Us</h1>
          <p className="about__text">
            Carma is an vehicle database application where Users and see the
            true cost of a vehicle including depreciation, insurance, fuel, and
            maintenance.
          </p>
          <p className="about__text">
            This project was created to help regular people visualize the true
            cost of their vehicle before purchasing. This is done by having
            simple graphics and explanations to give potential car owners a
            "straight to the point" verdict on a variety of vehicles.
          </p>
          <div className="about__tech-stack">
            <h1>Tech Stack</h1>
            <div className='about__social-containter'>
              <img className='about__tech-icon' src={"https://img.icons8.com/plasticine/344/react.png"} alt="React"/>
              <img className='about__tech-icon' src={"https://img.icons8.com/dusk/344/html-5.png"} alt="HTML5"/>
              <img className='about__tech-icon' src={"https://img.icons8.com/dusk/344/css3.png"} alt="CSS"/>
              <img className='about__tech-icon' src={"https://img.icons8.com/dusk/344/javascript-logo.png"} alt="JavaScript"/>
              <img className='about__tech-icon' src={"https://img.icons8.com/color/344/sass.png"} alt="Sass"/>
              <img className='about__tech-icon' src={"https://img.icons8.com/color/344/nodejs.png"} alt="Node.js"/>
              <img className='about__tech-icon' src={"https://img.icons8.com/color/344/mysql-logo.png"} alt="mySQL"/>
              <img className='about__tech-icon' src={"https://img.icons8.com/color/344/firebase.png"} alt="Firebase"/>
              <img className='about__tech-icon' src={"https://img.icons8.com/color/344/figma--v1.png"} alt="Figma"/>
              <img className='about__tech-icon' src={"https://img.icons8.com/color/344/adobe-photoshop--v1.png"} alt="Photoshop"/>
            </div>
          </div>
        </section>
        
        <section className="about__section">
          <h1 className="about__title">Meet the Team</h1>
          <div className="about__card">
            <img className="about__profile-image" src={ProfileImage} alt="Nicholas Huynh Head Shot" />
            <h2>Nicholas Huynh</h2>
            <p className="about__text--alt">Creator & Lead Developer</p>
            <p className="about__text"> 
              Carma was developed by Nicholas Huynh, a Full Stack Web Developer who has a love for cars. <br />
              Responsible for the design, front-end, and back-end of the web application.
            </p>
            <div className='about__social-containter'>
                <a href="https://www.linkedin.com/in/nickhuynhq/" target='_blank' rel="noreferrer">
                    <img className='about__social-icon' src={LinkedIn} alt="LinkedIn"/>
                </a>
                <a href="https://github.com/nickhuynhq/Carma" target='_blank' rel="noreferrer">
                    <img className='about__social-icon' src={GitHub} alt="GitHub"/>
                </a>
            </div>
          </div>
        </section>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default About;
