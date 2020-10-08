import React from "react";

function Left() {
  return (
    <div className="column left__column">
      <button className="button google__login-btn">Log in with Google</button>
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
        <p className="remember__me-link">Remember me</p>
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
