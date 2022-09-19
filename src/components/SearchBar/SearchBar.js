import React from 'react'
import "./SearchBar.scss"

const SearchBar = () => {
  return (
    <div className="search-bar">
        <form className="search-bar__form">
            <div className="search-bar__select-container">
                <label className="search-bar__label" forhtml="cars">Search Brand</label>
                <select className="search-bar__select" name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className="search-bar__select-container">
                <label className="search-bar__label" forhtml="cars">Model</label>
                <select className="search-bar__select" name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className="search-bar__select-container">
                <label className="search-bar__label" forhtml="cars">Year</label>
                <select className="search-bar__select" name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <button className='search-bar__button'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar