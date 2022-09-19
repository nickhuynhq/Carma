import React from 'react'
import "./SearchBar.scss"

const SearchBar = () => {
  return (
    <div className="search-bar">
        <form className="search-bar__form">
            <div className="search-bar__select-container">
                <label className="search-bar__label" for="cars">Search Brand</label>
                <select className="search-bar__select" name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className="search-bar__select-container">
                <label className="search-bar__label" for="cars">Model</label>
                <select className="search-bar__select" name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div className="search-bar__select-container">
                <label className="search-bar__label" for="cars">Year</label>
                <select className="search-bar__select" name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default SearchBar