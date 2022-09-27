import React from 'react'
import "./Header.scss"
import Logo from "../../assets/logo/carma-logo.png"
import { useNavigate, Link } from 'react-router-dom'

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
            <Link to="/carsList/"><li className="header__navigation-list-item">Vehicles</li></Link>
            <Link to="/about"><li className="header__navigation-list-item">About</li></Link>
            <Link to="/contact"><li className="header__navigation-list-item">Contact</li></Link>
          </ul>
          {!localStorage.token ? 
            <Link to="/user/login"><button className="header__navigation-button">Login</button></Link> :
            <Link to="/user/profile"><button className="header__navigation-button--profile">Profile</button></Link>
          }
          
        </nav>
      </div>
  )
}

export default Header