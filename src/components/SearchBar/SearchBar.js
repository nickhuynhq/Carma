import React from 'react'
import { fetchCarBySearch } from '../../utils/api';
import "./SearchBar.scss"
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const navigate = useNavigate();

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        let searchObj = {
            brand: event.target.brand.value,
            make: event.target.make.value,
            year: Number(event.target.year.value),
        }
        fetchCarBySearch(searchObj)
        .then((response) => {
            navigate(`/cars/${response.data[0].car_id}`)
            console.log(response.data);
        })
    }
  return (
    <div className="search-bar">
        <form className="search-bar__form" onSubmit={handleSearchSubmit}>
            <div className="search-bar__select-container">
                <label className="search-bar__label" forhtml="cars">Search Brand</label>
                <select className="search-bar__select" name="brand" id="brand">
                    <option value="Honda">Honda</option>
                    <option value="Ford">Ford</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Audi">Audi</option>
                </select>
            </div>
            <div className="search-bar__select-container">
                <label className="search-bar__label" forhtml="cars">Model</label>
                <select className="search-bar__select" name="make" id="make">
                    <option value="Civic">Civic</option>
                    <option value="Santa Fe">Santa Fe</option>
                    <option value="F-150">F-150</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className="search-bar__select-container">
                <label className="search-bar__label" forhtml="cars">Year</label>
                <select className="search-bar__select" name="year" id="year">
                    <option value="2022">2022</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <button className='search-bar__button' type='submit'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar