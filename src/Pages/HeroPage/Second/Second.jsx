import React from "react";
import "./Second.css";

const Second = () => {
  return (
    <div>
      <div className="seconds">
        <div className="second-overlay">
          <div className="second-content">
            <h1>SUNDAYS</h1>
            <p>
              Join us in person across the Wimmera for our Sunday 10:30AM
              Services, or join us online.
            </p>
            <a href="/services" className="second-button">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
