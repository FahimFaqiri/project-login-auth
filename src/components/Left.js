import React from "react";
import google_logo from "./images/google_logo.svg"

function Left() {
  return (
    <div className="column left__column">
      <div className="google__btn-align">
        <img className="google__logo" src={google_logo} alt=""/>
      <button className="button google__login-btn">Log in with Google</button>
      </div>
      <label htmlFor="mail">Email</label>
      <input
        type="email"
        name="mail"
        id="mail"
        placeholder="Enter your email"
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        id="pass"
        placeholder="Password"
        minLength="6"
      />
      <div className="link__align">
        <div>
        <input type="checkbox" name="remember__me-link" id="remember__me-link"/>
        <label htmlFor="remember__me-link">Remember me</label>
        </div>
        <a className="forgot__pass-link" href="#">
          Forgot password
        </a>
      </div>
      <button className="login__btn">Log in</button>
      <p className="sign__up-text">
        Dont have an account yet? <a href="#">Sign up</a>
      </p>
    </div>
  );
}

export default Left;
