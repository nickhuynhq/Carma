import React from 'react'
import Header from '../../components/Header/Header';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import "./ContactUs.scss"

const ContactUs = () => {
  return (
    <>
    <div className="contact__header">
      <Header />
    </div>
    <main className="contact__section">
        <h1>Contact Us</h1>
        <form className='contact__form'>
            <label className='contact__form-label'>Name:</label>
            <input className='contact__form-input' type="text"></input>
            <label className='contact__form-label'>Email:</label>
            <input className='contact__form-input' type="email"></input>
            <label className='contact__form-label'>Message:</label>
            <textarea className='contact__form-input'></textarea>
            <button className='contact__form-button'>Submit</button>
        </form>

      <ScrollToTopButton />
    </main>
  </>
  )
}

export default ContactUs