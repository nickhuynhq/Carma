import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchCarByType, fetchCars } from '../../utils/api';
import Header from "../../components/Header/Header"
import VehicleCard from '../../components/VehicleCard/VehicleCard';
import "./CarsList.scss"
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import Loading from '../../components/Loading/Loading';

const CarsList = () => {
  const { type } = useParams();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    let searchObj = {
      type: type
    }

    if (type){
      fetchCarByType(searchObj)
        .then((response) => {
          setCarList(response.data);
        })
    } else {
      fetchCars()
      .then((response) => {
        setCarList(response.data);
      })
    }
    
  }, [type])

  if (!carList) {
    return <Loading />;
  }
  return (
    <>
      <div className='cars-list__header'>
        <Header />
      </div>
      <div className='cars-list-section'>
        {type ? <h1>Vehicle Type: {type}</h1> : <h1>Vehicle List</h1>}
        <div className='cars-list'>
          {carList.map((car) => {
              return <VehicleCard 
                key = {car.id}
                id = {car.id}
                brand = {car.brand}
                make = {car.make}
                year = {car.year}
                rating = {car.rating}
                image = {car.image}
              />
          })}
          
        </div>
        <ScrollToTopButton />
      </div>
    </>

  )
}

export default CarsList