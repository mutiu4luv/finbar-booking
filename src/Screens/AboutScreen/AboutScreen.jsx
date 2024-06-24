import React from "react";
import "./AboutScreen.css";
import Footer from "../../Components/Footer/Footer";

const AboutScreen = () => {
  return (
    <div className="about">
      <div className="about-hero">
        {/* <h1 className="about-header">about us</h1> */}
      </div>
      <div className="about-content">
        At Finbarrsax Musicals, we work with an understanding that Music is Food
        for the soul, and hence, we promote diligence and harmony through our
        touch to your musical events and ceremonies. We work with the notion
        that music is a strong therapy for so many, and thus; we strive to give
        a unique touch to your musical events and occasions. This is a
        Self-motivated organization, and it is our love for music that has been
        pushing us to reach out to as many people as possible, and offer our
        genuine touch of music soothingly for every occasion we are invited to.
      </div>
      <Footer />
    </div>
  );
};

export default AboutScreen;
