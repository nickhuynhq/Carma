import React from "react";
import { useEffect, useState } from "react";
import { fetchUserVehicleList } from "../../utils/api";
import VehicleCard from "../VehicleCard/VehicleCard";

const Profile = () => {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    fetchUserVehicleList().then((response) => {
      setUserInfo(response.data);
    });
  }, []);

  if (!userInfo) {
    return <p>Loading</p>;
  }

  return (
    <section className="profile">
      <div className="profile__user">
        <div className="form__container">
        {/* User Info Container */}
          <h2>User Info</h2>
          <label className="form__label" htmlFor="name">
            Name:
            <input className="form__input" type="text" name="name" required />
          </label>
          <label className="form__label" htmlFor="email">
            Email:
            <input className="form__input" type="email" name="email" required />
          </label>
          <label className="form__label" htmlFor="birthday">
            Birthday:
            <input
              className="form__input"
              type="date"
              name="birthday"
              required
            />
          </label>
          <label className="form__label" htmlFor="gender">
            Gender:
            <select className="form__input" name="gender" id="gender" required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
        </div>

        {/* Driving Info Container */}
        <div className="form__container">
          <h2>Driving Info</h2>
          <label className="form__label" htmlFor="province">
            Province:
          </label>
          <select className="form__input" name="province" id="province">
            <option value="Ontario">Ontario</option>
            <option value="Quebec">Quebec</option>
          </select>
          <label className="form__label" htmlFor="city">
            City/ Township:
            <input className="form__input" type="text" name="city" required />
          </label>
          <label className="form__label" htmlFor="commute_distance">
            Commute Distance (km):
            <input
              className="form__input"
              type="number"
              name="commute_distance"
              required
            />
          </label>
          <label className="form__label" htmlFor="commute_days">
            Commuting Days (per week):
            <input
              className="form__input"
              type="number"
              name="commute_days"
              required
            />
          </label>
        </div>
      </div>
      <div className="profile__vehicle-list">
        <h2>Your Saved Vehicles</h2>
        {userInfo.map((item) => {
          return (
            <VehicleCard
              key={item.id}
              id={item.car_id}
              brand={item.brand}
              make={item.make}
              year={item.year}
              rating={item.rating}
              image={item.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
