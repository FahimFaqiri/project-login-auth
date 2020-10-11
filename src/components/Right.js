import React from "react";
import development_logo from "./images/development.svg"
import features_logo from "./images/features.svg";
import updates_logo from "./images/updates.svg";

function Right() {
  return (
    <div className="column right__column">  
      <div className="text__box">
        <div className="align__logo">
        <img className="logo dev__logo" src={development_logo} alt="image"/>
        <h3 className="tasks development__task">Development</h3>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula.
        </p>
      </div>
      <div className="text__box">
        <div className="align__logo">
        <img className="logo feature__logo" src={features_logo} alt="image"/>
        <h3 className="tasks development__task">Features</h3>
        </div>
        <p>
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
        </p>
      </div>
      <div className="text__box">
        <div className="align__logo">
        <img className="logo update__logo" src={updates_logo} alt="image"/>
        <h3 className="tasks development__task">Updates</h3>
        </div>
        <p>
        felis, ultricies nec, pellentesque eu, pretium quis, sem. 
        Nulla consequat massa quis enim.
        </p>
      </div>
    </div>
  );
}

export default Right;
