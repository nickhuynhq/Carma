import React, { useState, useEffect } from "react";
import { fetchCarBySearch, fetchCars } from "../../utils/api";
import { v4 as uuidv4 } from "uuid";
import "./SearchBar.scss";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [carList, setCarList] = useState([]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    let searchObj = {
      brand: event.target.brand.value,
      make: event.target.make.value,
      year: Number(event.target.year.value),
    };
    fetchCarBySearch(searchObj).then((response) => {
      navigate(`/cars/${response.data[0].car_id}`);
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchCars().then((response) => {
      setCarList(response.data);
    });
  }, []);

  if (!carList) {
    return <p>Loading</p>;
  }

  const brandList = carList.map((car) => {
    return car.brand;
  });
  const filteredBrandList = [...new Set(brandList)];

  const makeList = carList.map((car) => {
    return car.make;
  });
  const filteredMakeList = [...new Set(makeList)];

  const yearList = carList.map((car) => {
    return car.year;
  });
  const filteredYearList = [...new Set(yearList)];

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={handleSearchSubmit}>
        <div className="search-bar__select-container">
          <label className="search-bar__label" forhtml="cars">
            Search Brand
          </label>
          <select className="search-bar__select" name="brand" id="brand">
            <option value="default" disabled>
              Please Select
            </option>
            {filteredBrandList.map((brand) => {
              return (
                <option key={uuidv4()} value={brand}>
                  {brand}
                </option>
              );
            })}
          </select>
        </div>
        <div className="search-bar__select-container">
          <label className="search-bar__label" forhtml="cars">
            Model
          </label>
          <select className="search-bar__select" name="make" id="make">
            <option value="default" disabled>
              Please Select
            </option>
            {filteredMakeList.map((make) => {
              return (
                <option key={uuidv4()} value={make}>
                  {make}
                </option>
              );
            })}
          </select>
        </div>
        <div className="search-bar__select-container">
          <label className="search-bar__label" forhtml="cars">
            Year
          </label>
          <select className="search-bar__select" name="year" id="year">
            <option value="default" disabled>
              Please Select
            </option>
            {filteredYearList.map((year) => {
              return (
                <option key={uuidv4()} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <button className="search-bar__button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
