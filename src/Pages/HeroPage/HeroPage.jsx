import React, { useEffect, useState } from "react";
import "./HeroPage.css";

const Hero = () => {
  const [type, setType] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const type = " Welcome to Finbarrsax Musicals";
    let i = 0;

    const typeWriter = () => {
      if (i < type.length) {
        setType(type.substring(0, i + 1));
        i++;
        setIsTyping(true);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setType("");
          i = 0;
        }, 3000);
      }
    };

    const typingInterval = setInterval(typeWriter, 50);

    return () => clearInterval(typingInterval);
  }, []);
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          {/* <h1>Welcome to Finbarrsax Musicals </h1> */}
          <h1>
            <span className={isTyping ? "typewriter typing" : "typewriter"}>
              {type}
            </span>
          </h1>
          <p>Join us for worship and community events</p>
          <a href="/services" className="hero-button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
