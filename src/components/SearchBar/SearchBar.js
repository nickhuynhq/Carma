import React, { useState, useEffect } from "react";
import { fetchCarBySearch, fetchCars } from "../../utils/api";
import {faInfoCircle,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import "./SearchBar.scss";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [carList, setCarList] = useState([]);
  const [brand, setBrand] = useState("default");
  const [make, setMake] = useState("default");
  const [year, setYear] = useState("default");
  const [searchValid, setSearchValid] = useState(true);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (brand !== "default" && make !== "default" && year !== "default"){
      let searchObj = {
        brand: event.target.brand.value,
        make: event.target.make.value,
        year: Number(event.target.year.value),
      };
      fetchCarBySearch(searchObj).then((response) => {
        navigate(`/cars/${response.data[0].car_id}`);
      });
      setSearchValid(true);
    } else {
      setSearchValid(false);
    }
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
    if (car.brand === brand){
      return car.make;
    }

    return null;
  });

  const filteredMakeList = [...new Set(makeList)];

  const yearList = carList.map((car) => {
    if (car.make === make){
      return car.year;
    }

    return null;
  });

  const filteredYearList = [...new Set(yearList)];

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={handleSearchSubmit}>
        <div className="search-bar__select-container">
          <label className="search-bar__label" forhtml="cars">
            Search Brand
          </label>
          <select className="search-bar__select" name="brand" id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="default" disabled>
              - Select Brand -
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
          <select className="search-bar__select" name="make" id="make" value={make} onChange={(e) => setMake(e.target.value)}>
            <option value="default" disabled>
              - Select Model -
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
          <select className="search-bar__select" name="year" id="year" value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="default" disabled>
               - Select Year -
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
      {!searchValid && <p className="search-bar__message"><FontAwesomeIcon icon={faInfoCircle} />{" "}Please Input All Fields</p>}
    </div>
  );
};

export default SearchBar;
