import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchCarByType } from '../../utils/api';
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import "./CarsList.scss"

const CarsList = () => {
  const { type } = useParams();
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    let searchObj = {
      type: type
    }
    fetchCarByType(searchObj)
      .then((response) => {
        setCarDetails(response.data);
      })
  }, [type])

  if (!carDetails) {
    return <p>Loading</p>;
  }

  return (
    <div className='cars-list'>
      <div className='cars-list__header'>
        <Header />
      </div>
      
      <div>Now showing {type}</div>
      <div>{JSON.stringify(carDetails)}</div>
    </div>

  )
}

export default CarsList