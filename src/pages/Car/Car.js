import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchCarById } from '../../utils/api';
import Header from "../../components/Header/Header"
import "./Car.scss"
import Treemap from '../../components/TreeMap/TreeMap';
import data from "../../components/TreeMap/data"

const Car = () => {
  const { carId } = useParams();
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    fetchCarById(carId)
      .then((response) => {
        setCarDetails(response.data[0]);
      })
  }, [carId])

  if (!carDetails) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className='cars__header'>
        <Header />
      </div>
      <section className='cars__section'>
        <div className='cars__title'>
          <h1>{carDetails.year}</h1>
          <h2>{carDetails.brand} {carDetails.make}</h2>
        </div>
        <div className='cars__hero'>
          <img className='cars__hero-image' src={carDetails.image} alt={carDetails.make}/>
          <div className='cars__hero-score-container'>
            <h2 className='cars__hero-score'>{carDetails.rating}</h2>
            <h3 className='cars__hero-price'>${carDetails.price}</h3>
          </div>
        </div>

        <Treemap data={data} height={400} width={1000} />
      </section>
      
    </>

  )
}

export default Car