import React, { useState, useRef, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Registration.scss";
import { signUpUser } from "../../utils/api";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const Registration = () => {
  // Regular expressions for validation
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // Use effects for validation
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  // Clear out error message
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validate1 = USER_REGEX.test(user);
    const validate2 = PWD_REGEX.test(pwd);

    if (!validate1 || !validate2) {
      setErrMsg("Invalid Entry");
      return;
    } else {
        try {
            const response = await signUpUser(
                {
                    name: event.target.name.value,
                    dob: event.target.birthday.value,
                    username: event.target.username.value,
                    password: event.target.password.value,
                    email: event.target.email.value,
                    gender: event.target.gender.value,
                    province: event.target.province.value,
                    city: event.target.city.value,
                    commute_distance: event.target.commute_distance.value,
                    commute_days: event.target.commute_days.value
                }
            )
            setSuccess(true);
            console.log(response.data);
    
        } catch (error) {
            console.log(error)
        }
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a className="form__button--alt" href="/user/login">Sign In</a>
          </p>
        </section>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="form__title">Sign Up</h1>
          <div className="form__body">
            {/* Account Info Container */}
            <div className="form__container">
              <h2>Account Info</h2>
              <label className="form__label" htmlFor="username">
                Username:
                <input
                  className={
                    user && !validName ? "form__input--invalid" : "form__input"
                  }
                  type="text"
                  name="username"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <p
                  className={
                    userFocus && user && !validName
                      ? "form__message"
                      : "form__message--hidden"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> 4 to 24 characters.{" "}
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </label>

              <label className="form__label" htmlFor="password">
                Password:
                <input
                  id="password"
                  type="password"
                  name="password"
                  className={
                    pwd && !validPwd ? "form__input--invalid" : "form__input"
                  }
                  autoComplete="off"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
              </label>
              <p
                className={
                  pwdFocus && pwd && !validPwd
                    ? "form__message"
                    : "form__message--hidden"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} /> 8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>

              <label className="form__label" htmlFor="confirm_password">
                Confirm Password:
                <input
                  className={
                    !validMatch && matchPwd
                      ? "form__input--invalid"
                      : "form__input"
                  }
                  type="password"
                  name="confirm_password"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  required
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
              </label>
              <p
                className={
                  matchFocus && !validMatch
                    ? "form__message"
                    : "form__message--hidden"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} /> Must match the first
                password input field.
              </p>
            </div>

            {/* User Info Container */}
            <div className="form__container">
              <h2>User Info</h2>
              <label className="form__label" htmlFor="name">
                Name:
                <input
                  className="form__input"
                  type="text"
                  name="name"
                  required
                />
              </label>
              <label className="form__label" htmlFor="email">
                Email:
                <input
                  className="form__input"
                  type="email"
                  name="email"
                  required
                />
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
                <select
                  className="form__input"
                  name="gender"
                  id="gender"
                  required
                >
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
                <input
                  className="form__input"
                  type="text"
                  name="city"
                  required
                />
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

          {/* Form Buttons Container */}
          <div className="form__button-container">
            <button className="form__button" type="submit">
              Register
            </button>
            <a className="form__button--alt" href="/users/login">
              Already Registered?
            </a>
          </div>
        </form>
      )}
    </>
  );
};

export default Registration;
