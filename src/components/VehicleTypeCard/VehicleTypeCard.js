import React from 'react'
import "./VehicleTypeCard.scss"
import { fetchCarByType } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const VehicleTypeCard = ({vehicleImage, vehicleType}) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
      let searchObj = {
          type: vehicleType
      }

      fetchCarByType(searchObj)
      .then((response) => {
          navigate(`/carsList/${vehicleType}`)
          console.log(response.data);
      })
  }

  return (
    <div className='vehicle-card' onClick={()=>{handleCardClick()}}>
      <img className='vehicle-card__image' src={vehicleImage} alt={vehicleType}/>
      <div className='vehicle-card__info'>
        <h2>{`${vehicleType}`}</h2>
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