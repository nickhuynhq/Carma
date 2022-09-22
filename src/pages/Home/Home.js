import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import SearchBar from '../../components/SearchBar/SearchBar'
import VehicleTypeCard from '../../components/VehicleTypeCard/VehicleTypeCard'
import Sedan from "../../assets/images/sedan.jpg"
import SUV from "../../assets/images/suv.jpg"
import Truck from "../../assets/images/truck.jpg"
import Hatch from "../../assets/images/hatch.jpg"
import Coupe from "../../assets/images/coupe.jpg"
import Minivan from "../../assets/images/minivan.jpg"
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
        <h2 className="vehicle-type__heading">Vehicle Types</h2>
        <div className='vehicle-type__list'>
          <VehicleTypeCard 
            vehicleImage={Sedan}
            vehicleType={"Sedan"}
          />
          <VehicleTypeCard 
            vehicleImage={SUV}
            vehicleType={"SUV"}
          />
          <VehicleTypeCard 
            vehicleImage={Truck}
            vehicleType={"Truck"}
          />

          <VehicleTypeCard 
            vehicleImage={Hatch}
            vehicleType={"Hatch"}
          />
          <VehicleTypeCard 
            vehicleImage={Coupe}
            vehicleType={"Coupe"}
          />

          <VehicleTypeCard 
            vehicleImage={Minivan}
            vehicleType={"Minivan"}
          />
        </div>
      </section>
    </div>
  )
}

export default Home