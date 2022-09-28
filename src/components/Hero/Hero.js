import React from 'react'
import "./Hero.scss"
import Cars from "../../assets/images/hero-image.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero">
      <img className="hero__cars" src={Cars} alt="Truck and Sedan"/>
      <div className='hero__text-box'>
        <h2 className='hero__text-box-heading'>Want to know the true Cost of a Vehicle?</h2>
        <p className='hero__text-box-description'>See your true cost of ownership with personalized statistics including maintenance, insurance, gas, depreciation, and other fees!</p>
        <Link to="/user/register"><button className='hero__text-box-button'>Sign Up Now</button></Link>
      </div>
    </section>
  )
}

export default Hero