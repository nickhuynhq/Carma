import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import SearchBar from '../../components/SearchBar/SearchBar'
import VehicleTypeCard from '../../components/VehicleTypeCard/VehicleTypeCard'
import Sedan from "../../assets/images/sedan.jpg"
import SUV from "../../assets/images/suv.jpg"
import Truck from "../../assets/images/truck.jpg"
import "./Home.scss"

const Home = () => {

  
  return (
    <div className='home'>
      <div className="header-hero">
        <Header />
        <Hero />
      </div>
      <SearchBar />
      
      <section className="vehicle-type">
        <h2>Vehicle Types</h2>
        <div className='vehicle-type__list'>
          <VehicleTypeCard 
            vehicleImage={Sedan}
            vehicleType={"Sedans"}
          />
          <VehicleTypeCard 
            vehicleImage={SUV}
            vehicleType={"SUVs"}
          />
          <VehicleTypeCard 
            vehicleImage={Truck}
            vehicleType={"Trucks"}
          />
        </div>
      </section>
    </div>
  )
}

export default Home