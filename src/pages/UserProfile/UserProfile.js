import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';
import Registration from '../../components/Registration/Registration'
import Profile from '../../components/Profile/Profile'
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
        {page === "login" && <Login/>}
        {page === "profile" && <Profile/>}

      </main>
      <ScrollToTopButton /> 
    </>
  )
}

export default UserProfile