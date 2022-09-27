import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import "./VehicleCard.scss"
import Trash from "../../assets/icons/icon-delete.svg"
import { deleteUserVehicle } from '../../utils/api';

const VehicleCard = ({id, brand, make, year, rating, image, setIsDelete}) => {

    const { page } = useParams();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        console.log (e)
        if (e.target.name === "delete"){
            try {
                const response = await deleteUserVehicle({car_id: id})  
                setIsDelete(true);
              } catch (error) {
                  console.log(error)
              }
        } else {
            navigate(`/cars/${id}`);
        }

    }
    // onClick={()=>{handleDelete()}}

    const handleDelete = async () => {
        try {
          const response = await deleteUserVehicle({car_id: id})  
        } catch (error) {
            console.log(error)
        }
    }
  return (

    <div className='vehicle-card' onClick={handleClick}>
        {page ==="profile" && 
            <div className="vehicle-card__top">
                <img className="vehicle-card__delete" name="delete" src={Trash} onClick={() => console.log('Fired')}/>
            </div>
        }
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
  )
}

export default VehicleCard