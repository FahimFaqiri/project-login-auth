import React from "react";
import Left from "./Left";
import Right from "./Right";
function Main() {
  return (
    <section className="main">
      <div className="card">
        <div className="column__align">
          <Left />
          <Right />
        </div>
      </div>
    </section>
  );
}

export default Main;
