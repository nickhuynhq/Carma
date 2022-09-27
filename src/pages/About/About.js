import React from "react";
import "./About.scss";
import Header from "../../components/Header/Header";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";

const About = () => {
  return (
    <>
      <div className="about__header">
        <Header />
      </div>
      <div className="about">
        <h1 className="about__title">About Us</h1>
        <div className="about__text">
          <p>
            Carma is an vehicle database application where Users and see the
            true cost of a vehicle including depreciation, insurance, fuel, and
            maintenance
          </p>
          <p>
            This project was created to help regular people visualize the true
            cost of their vehicle before purchasing. This is done by having
            simple graphics and explanations to give potential car owners a
            "straight to the point" verdict on a variety of vehicles.
          </p>
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default About;
