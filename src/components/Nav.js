import React from "react";

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <a className="active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <div className="loginBtn">
          <li>
            <a href="#">Log-in</a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Nav;
