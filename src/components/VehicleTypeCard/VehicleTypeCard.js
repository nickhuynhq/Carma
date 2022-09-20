import React from 'react'
import "./VehicleTypeCard.scss"

const VehicleTypeCard = ({vehicleImage, vehicleType}) => {
  return (
    <div className='vehicle-card'>
      <img className='vehicle-card__image' src={vehicleImage} alt={vehicleType}/>
      <div className='vehicle-card__info'>
        <h3>{vehicleType}</h3>
      </div>
    </div>

// <div className='vehicle-card'>
//   <img className='vehicle-card__image'/>
//   <div className='vehicle-card__info'>
//     <div className='vehicle-card__info-text'>
//       <p className='vehicle-card__info-date'>2022</p>
//       <p className='vehicle-card__info-car'>Ford F-150</p>
//     </div>
//     <div className='vehicle-card__info-rating-box'>
//       <p className='vehicle-card__info-rating'>8</p>
//     </div>
//   </div>
// </div>
  )
}

export default VehicleTypeCard