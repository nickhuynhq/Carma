import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editUser, fetchUserVehicleList } from "../../utils/api";
import VehicleCard from "../VehicleCard/VehicleCard";
import "./Profile.scss"

const Profile = () => {
  const [userInfo, setUserInfo] = useState("");
  const [userEdit, setUserEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    fetchUserVehicleList().then((response) => {
      setUserInfo(response.data);
      setIsDelete(false)
    });
  }, [isDelete]);

  const handleEdit = (e) => {
    e.preventDefault();
    if (userEdit === false){
      setUserEdit(true);
    } else {
      setUserEdit(false);
    }
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await editUser(
          {
              name: e.target.name.value,
              dob: e.target.birthday.value,
              email: e.target.email.value,
              gender: e.target.gender.value,
              province: e.target.province.value,
              city: e.target.city.value,
              commute_distance: e.target.commute_distance.value,
              commute_days: e.target.commute_days.value
          }
      )
      setUserEdit(false)
      console.log(response.data);

    } catch (error) {
        console.log(error)
    }
  }

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  }

  if (!userInfo) {
    return <p>You are not logged in</p>;
  }
  
  return (
    <section className="profile">
      <div className="profile__top">
        <h1>User Profile</h1>
        <button className="profile-form__button" onClick={handleLogOut}>Log Out</button>
      </div>
      
      <form className="profile-form" onSubmit={handleEditSubmit}>
        <section className="profile__user">
          <div className="profile-form__container">
          {/* User Info Container */}
            <h2>User Info</h2>
            <label className="profile-form__label" htmlFor="name">
              Name:
              <input className={userEdit ? "profile-form__input--enabled" : "profile-form__input"} type="text" name="name" defaultValue={userInfo[0].name} required />
            </label>
            <label className="profile-form__label" htmlFor="email">
              Email:
              <input className={userEdit ? "profile-form__input--enabled" : "profile-form__input"} type="email" name="email" defaultValue={userInfo[0].email} required />
            </label>
            <label className="profile-form__label" htmlFor="birthday">
              Birthday:
              <input
                className={userEdit ? "profile-form__input--enabled" : "profile-form__input"}
                type="date"
                name="birthday"
                defaultValue={userInfo[0].dob.substring(0, 10)}
                required
              />
            </label>
            <label className="profile-form__label" htmlFor="gender">
              Gender:
              <select className={userEdit ? "profile-form__input--enabled" : "profile-form__input"} name="gender" id="gender" defaultValue={userInfo[0].gender} required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </div>

          {/* Driving Info Container */}
          <div className="profile-form__container">
            <h2>Driving Info</h2>
            <label className="profile-form__label" htmlFor="province">
              Province:
            </label>
            <select className={userEdit ? "profile-form__input--enabled" : "profile-form__input"} name="province" id="province" defaultValue={userInfo[0].province}>
              <option value="Ontario">Ontario</option>
              <option value="Quebec">Quebec</option>
            </select>
            <label className="profile-form__label" htmlFor="city">
              City/ Township:
              <input className={userEdit ? "profile-form__input--enabled" : "profile-form__input"} type="text" name="city" defaultValue={userInfo[0].city}required />
            </label>
            <label className="profile-form__label" htmlFor="commute_distance">
              Commute Distance (km):
              <input
                className={userEdit ? "profile-form__input--enabled" : "profile-form__input"}
                type="number"
                name="commute_distance"
                defaultValue={userInfo[0].commute_distance}
                required
              />
            </label>
            <label className="profile-form__label" htmlFor="commute_days">
              Commuting Days (per week):
              <input
                className={userEdit ? "profile-form__input--enabled" : "profile-form__input"}
                type="number"
                name="commute_days"
                defaultValue={userInfo[0].commute_days}
                required
              />
            </label>
          </div>
        </section>
        
        <section className="profile-form__button-container">
          <button className={userEdit ? "profile-form__button" : "profile-form__button--hidden"} type="submit">Submit</button>
          <button className="profile-form__button--edit" onClick={handleEdit}>{userEdit ? "Cancel" : "Edit"}</button>
        </section>

      </form>
      
      <h1>Your Saved Vehicles</h1>
      <div className="profile__vehicle-list">
        {userInfo.map((item) => {
          if (item.car_id){
            return (
              <VehicleCard
                key={item.car_id}
                id={item.car_id}
                brand={item.brand}
                make={item.make}
                year={item.year}
                rating={item.rating}
                image={item.image}
                setIsDelete = {setIsDelete}
              />
            );
          } else {
            return <p key="1">You have no vehicles</p>
          }
          
        })}
      </div>
    </section>
  );
};

export default Profile;
