import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCarById } from "../../utils/api";
import Header from "../../components/Header/Header";
import "./Car.scss";
import Treemap from "../../components/TreeMap/TreeMap";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";

const Car = () => {
  const { carId } = useParams();
  const [carDetails, setCarDetails] = useState(null);

  const fuel_economy = carDetails
    ? Math.floor(((19000 / 100) * carDetails.fuel_economy * 1.5) / 2)
    : 0;
  const carValueFiveYears = carDetails
    ? carDetails.brand === "Toyota"
      ? Math.floor(carDetails.price - carDetails.insurance * 5 * 1.0)
      : Math.floor(carDetails.price - carDetails.insurance * 5 * 1.16)
    : 0;
  const trueCost = carDetails
    ? carDetails.price +
      carDetails.insurance +
      fuel_economy +
      carDetails.maintenance
    : 0;

  const data = {
    name: "Car",
    children: [
      {
        name: "Depreciation",
        value: `${carDetails ? carDetails.depreciation : ""}`,
      },
      {
        name: "Insurance",
        value: `${carDetails ? carDetails.insurance : ""}`,
      },
      {
        name: "Fuel",
        value: `${carDetails ? fuel_economy : ""}`,
      },
      {
        name: "Maintenance",
        value: `${carDetails ? carDetails.maintenance : ""}`,
      },
    ],
  };

  const handleScoreColor = (rating) => {
    if (rating === "A") {
      return "cars__hero-score--A";
    } else if (rating === "B") {
      return "cars__hero-score--B";
    } else if (rating === "C") {
      return "cars__hero-score--C";
    } else if (rating === "D") {
      return "cars__hero-score--D";
    } else {
      return "cars__hero-score--F";
    }
  };

  useEffect(() => {
    fetchCarById(carId).then((response) => {
      setCarDetails(response.data[0]);
      console.log(response.data[0]);
    });
  }, [carId]);

  if (!carDetails) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="cars__header">
        <Header />
      </div>
      <main className="cars__section">
        <div className="cars__title">
          <h1 className="cars__title-year">{carDetails.year}</h1>
          <h2 className="cars__title-model">
            {carDetails.brand} {carDetails.make}
          </h2>
        </div>
        <div className="cars__hero">
          <img
            className="cars__hero-image"
            src={carDetails.image}
            alt={carDetails.make}
          />
          <div className="cars__hero-score-card">
            <div className="cars__hero-score-container">
              <h2 className="cars__hero-score-label">Carma Score</h2>
              <h2 className={handleScoreColor(carDetails.rating)}>
                {carDetails.rating}
              </h2>
            </div>
            <div className="cars__hero-price-container">
              <h3 className="cars__hero-label">Listing Price:</h3>
              <h3 className="cars__hero-price">${carDetails.price}</h3>
            </div>
            <div className="cars__hero-price-container">
              <h3 className="cars__hero-label">True Cost:</h3>
              <h3 className="cars__hero-price">${trueCost}*</h3>
            </div>
          </div>
        </div>

        <Treemap data={data} height={400} width={1000} />
        {/* <MobileTreeMap /> */}

        <section className="cars__description-section">
          <div className="cars__description" id="Depreciation">
            
            <h1 className="cars__description-heading">Depreciation</h1>
            <p className="cars__description-paragraph">
              A {carDetails.brand} {carDetails.make} will depreciate in value by{" "}
              {carDetails.depreciation} after a year. Depreciation is difficult
              to avoid, but it can be managed. Depreciation is the difference
              between the original sales price, and what the vehicle will be
              worth in the future. We use 5 years as an example in our analysis.
            </p>
            <p className="cars__description-paragraph">
              When new, a typically-equipped {carDetails.brand}{" "}
              {carDetails.make} sells for ${carDetails.price} on average. After
              5 years of depreciation, the average residual value will be $
              {carValueFiveYears}. This represents the vehicle's retail market
              price. Trade-in and private sale prices will likely be lower.
            </p>
          </div>
          <div className="cars__description" id="Insurance">
            <h1 className="cars__description-heading">Insurance</h1>
            <p className="cars__description-paragraph">
              The average annual cost for auto insurance for a{" "}
              {carDetails.brand} {carDetails.make} is ${carDetails.insurance},
              which adds up to ${carDetails.insurance * 5} after 5 years of
              ownership. These insurance costs are estimates based on national
              averages for a 40 year old, with full coverage, a good driving
              record, and good credit. They also assume a single-car policy, and
              won't reflect any multi-car discounts. See our Toyota Corolla
              Insurance Tool to view rates by state, for different driver ages,
              credit ratings and driving history.
            </p>
            <p className="cars__description-paragraph">
              {carDetails.brand} {carDetails.make} insurance rates will vary
              significantly between providers for the same coverage. If you've
              been with your current insurance company for more than a few
              years, you should get new quotes to make sure you're not
              overpaying.
            </p>
          </div>
          <div className="cars__description" id="Fuel">
            <h1 className="cars__description-heading">Fuel Economy</h1>
            <p className="cars__description-paragraph">
              A {carDetails.brand} {carDetails.make}
              gets an average of {carDetails.fuel} litres per 100km, which will
              cost a total of ${Math.floor(fuel_economy * 5)}
              for fuel after 5 years, or about ${fuel_economy} annually. These
              estimates are based on recently collected national average fuel
              prices, assuming 19,000 km driven per year - 55% city and 45%
              highway.{" "}
            </p>
            <p className="cars__description-paragraph">
              These figures also reflect current EPA estimates. Fuel costs will
              vary based on your driving style, fuel prices in your area, and
              the engine that will be in your vehicle.{" "}
            </p>
          </div>
          <div className="cars__description" id="Maintenance">
            <h1 className="cars__description-heading">Maintenance</h1>
            <p className="cars__description-paragraph">
              Maintenance and repair costs for a {carDetails.brand}{" "}
              {carDetails.make} will amount to ${carDetails.maintenance} after 1
              year. Expenses include scheduled maintenance, normal wear and tear
              items and expected repairs. These estimates exclude any free
              warranty work performed.
            </p>
            <p className="cars__description-paragraph">
              The region you live, and the way you care for and drive your
              vehicle can have a big impact on these costs. So, your results may
              vary significantly from our estimates.
            </p>
          </div>
        </section>
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default Car;
