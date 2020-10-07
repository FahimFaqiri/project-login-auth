import React from "react";

function Main() {
  return (
    <section className="main">
      <div className="card">
        <div className="left__column">
          <button className="google__login-btn">Log in with Google</button>
          <label htmlFor="mail">Email</label>
          <input type="text" name="mail" id="mail" />
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="pass" />
          <p>Remember me</p>
          <a href="#">Forgot password</a>
          <button className="login__btn">Log in</button>
          <p>
            Dont have an account yet? <a href="#">Sign up</a>
          </p>
        </div>
        <div className="right__column">
          <div className="text__box">
            <h3>Development</h3>
            <p>lorem ipsum orifidea omni bestum</p>
          </div>
          <div className="text__box">
            <h3>Features</h3>
            <p>lorem ipsum orifidea omni bestum</p>
          </div>
          <div className="text__box">
            <h3>Updates</h3>
            <p>lorem ipsum orifidea omni bestum</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
