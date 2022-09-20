import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchCarById } from '../../utils/api';

const Car = () => {
  const { carId } = useParams();
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    fetchCarById(carId)
      .then((response) => {
        setCarDetails(response.data);
      })
  }, [carId])

  if (!carDetails) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div>Now showing {carId}</div>
      <div>{JSON.stringify(carDetails)}</div>
    </>

  )
}

export default Car