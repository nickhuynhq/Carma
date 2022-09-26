import React from "react";
import { useRef, useState, useEffect } from "react";
import { logInUser } from "../../utils/api";
import "./Login.scss";
import Cars from "../../assets/images/login-image.png"

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
        const response = await logInUser(
            {
                username: event.target.username.value,
                password: event.target.password.value,
            }            
        )
        localStorage.setItem('token', response.data.token);
        setUser('');
        setPwd('');
        setSuccess(true) 
    } catch (error) {
        if (!error?.response) {
            setErrMsg('No Server Response')
        } else if (error.response?.status === 400) {
            setErrMsg("Missing Username or Password")
        } else if (error.response?.status === 401) {
            setErrMsg('Unauthorized')
        } else {
            setErrMsg('Login Failed')
        }
        errRef.current.focus();
    };
  }

  return (
    <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <p><a href="/">Go to Home Page</a></p>
            </section>
        ) : ( 
            <section className="login">
                <div className="login__container">
                    <h1 className="login-form__title">Sign In</h1>
                    <p ref={errRef} className={errMsg ? "login-form__message" : "login-form__message--hidden"}>
                        Error: {errMsg}
                    </p>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label className="login-form__label" htmlFor="username">Username:</label>
                        <input
                        className="login-form__input"
                        type="text"
                        id="username"
                        name="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        />
                        <label className="login-form__label" htmlFor="password">Password:</label>
                        <input
                        className="login-form__input"
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        />
                        <button className="login-form__button">Sign In</button>
                    </form>
                    <div className="login-form__sign-up">
                        <p>Need an Account?</p>
                        <a className="login-form__button--alt" href="/user/register">Sign Up</a>
                    </div>
                </div>
                <div className="login__container--image">
                    <img className="login__image" src={Cars} alt="Sedan and Truck"/>
                    <h1>Your Journey Starts Here!</h1>
                </div>
            </section>
           
        )}
    </>
  );
};


export default Login;
