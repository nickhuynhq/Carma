import React from 'react'
import "./Header.scss"
import Logo from "../../assets/logo/carma-logo.png"
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate(`/`)
  }
  return (
    
      <div className="header">
        <div className="header__logo-container" onClick={()=>{handleLogoClick()}}>
          <img className='header__logo' src={Logo} alt="Carma Logo"></img>
          <h1 className='header__logo-text'>Carma</h1>
        </div>
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li className="header__navigation-list-item">Vehicles</li>
            <li className="header__navigation-list-item">About</li>
            <li className="header__navigation-list-item">Contact</li>
          </ul>
          <button className="header__navigation-button">Login</button>
        </nav>
      </div>
    
    
  )
}

export default Header