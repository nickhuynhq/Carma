import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import SearchBar from '../../components/SearchBar/SearchBar'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <div className="header-hero">
        <Header />
        <Hero />
      </div>
     
      <SearchBar />
    </div>
  )
}

export default Home