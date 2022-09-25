import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Registration from '../../components/Registration/Registration'
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import "./UserProfile.scss"

const UserProfile = () => {
  const { page } = useParams();
  return (
    <>
      <section className='user__header'>
      <Header />
      </section>
      
      <main className="user__main">
        {page === "register" && <Registration/>}
        {page === "login" && <Registration/>}

      </main>
      <ScrollToTopButton />

      
      
      
    </>
  )
}

export default UserProfile