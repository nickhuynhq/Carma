import React from 'react'
import { Link } from 'react-router-dom';
import "./VehicleCard.scss"

const VehicleCard = ({id, brand, make, year, rating, image}) => {
  
  return (
    <Link to={`/cars/${id}`}>
        <div className='vehicle-card'>
            <img className='vehicle-card__image' src={image} alt={`${year} ${brand} ${make}`}/>
            <div className='vehicle-card__info'>
                <div className='vehicle-card__info-text'>
                    <p className='vehicle-card__info-date'>{year}</p>
                    <p className='vehicle-card__info-car'>{brand} {make}</p>
                </div>
                <div className='vehicle-card__info-rating-box'>
                    <p className='vehicle-card__info-rating'>{rating}</p>
                </div>
            </div>
        </div>
    </Link>
    
  )
}

export default VehicleCard