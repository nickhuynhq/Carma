import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchCarByType } from '../../utils/api';
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
    <>
      <div>Now showing {type}</div>
      <div>{JSON.stringify(carDetails)}</div>
    </>

  )
}

export default CarsList