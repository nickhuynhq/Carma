import React from 'react'
import Logo from "../../assets/logo/carma-logo.png"
import { Link, useNavigate } from 'react-router-dom'
import Facebook from '../../assets/icons/facebook.svg'
import Twitter from '../../assets/icons/twitter.svg'
import LinkedIn from '../../assets/icons/linkedin.svg'
import GitHub from '../../assets/icons/github.svg'
import "./Footer.scss"

const Footer = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        window.scroll(0,0)
        navigate(`/`)
    }

  return (
    
    <section className='footer'>
        <div className='footer__column-left'>
            <div className="footer__logo-container" onClick={()=>{handleLogoClick()}}>
                <img className='footer__logo' src={Logo} alt="Carma Logo"></img>
                <h1 className='footer__logo-text'>Carma</h1>
            </div>
            <div className='footer__social-containter'>
                <a href="https://facebook.com" target='_blank' rel="noreferrer">
                    <img className='footer__social-icon' src={Facebook} alt="Facebook"/>
                </a>
                <a href="https://twitter.com" target='_blank' rel="noreferrer">
                    <img className='footer__social-icon' src={Twitter} alt="Twitter"/>
                </a>
                <a href="https://linkedin.com" target='_blank' rel="noreferrer">
                    <img className='footer__social-icon' src={LinkedIn} alt="LinkedIn"/>
                </a>
                <a href="https://github.com/nickhuynhq/Carma" target='_blank' rel="noreferrer">
                    <img className='footer__social-icon' src={GitHub} alt="GitHub"/>
                </a>
            </div>
        </div>
        
        <div className='footer__column'>
            <h2 className='footer__column-label'>Vehicles</h2>
            <ul className='footer__column-list'>
                <li className='footer__column-list-item'><a href='/carsList/Sedan'>Sedans</a></li>
                <li className='footer__column-list-item'><a href='/carsList/SUV'>SUVs</a></li>
                <li className='footer__column-list-item'><a href='/carsList/Truck'>Trucks</a></li>
                <li className='footer__column-list-item'><a href='/carsList/Hatch'>Hatches</a></li>
                <li className='footer__column-list-item'><a href='/carsList/Coupe'>Coupes</a></li>
                <li className='footer__column-list-item'><a href='/carsList/Minivan'>Minivans</a></li>
            </ul>
        </div>
        <div className='footer__column'>
            <h2 className='footer__column-label'>Links</h2>
            <ul className='footer__column-list'>
                <Link to="/about"><li className='footer__column-list-item'>About Us</li></Link>
                <Link to="/contact"><li className='footer__column-list-item'>Contact Us</li></Link>
                <li className='footer__column-list-item'>Privacy</li>
                <li className='footer__column-list-item'>Terms of Service</li>
            </ul>
        </div>
    </section>
  )
}

export default Footer