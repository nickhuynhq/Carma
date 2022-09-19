import React from 'react'
import "./Hero.scss"
import Cars from "../../assets/images/hero-image.png"

const Hero = () => {
  return (
    <section className="hero">
      <img className="hero__cars" src={Cars} alt="Truck and Sedan"/>
      <div className='hero__text-box'>
        <h2 className='hero__text-box-heading'>Want to know the true Cost of a Vehicle?</h2>
        <p className='hero__text-box-description'>See your true cost of ownership including  maintenance, insurance, gas, depreciation, and other fees!</p>
        <button className='hero__text-box-button'>Find Out Now</button>
      </div>
    </section>
  )
}

export default Hero