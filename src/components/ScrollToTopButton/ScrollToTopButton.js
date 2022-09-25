import React, { useState } from 'react'
import "./ScrollToTopButton.scss"

const ScrollToTopButton = () => {

const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <button className='scroll-to-top-button' 
    onClick= {() => { window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
    style={{display: visible ? 'inline' : 'none'}}
    >
        Scroll to top
    </button>
  )
}

export default ScrollToTopButton