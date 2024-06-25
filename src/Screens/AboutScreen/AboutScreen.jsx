import React from "react";
import "./AboutScreen.css";
import Footer from "../../Components/Footer/Footer";
import finbar from "../../Components/assests/finbar3.jpg";

const AboutScreen = () => {
  return (
    <div className="about">
      <div className="about-hero">
        {/* <h1 className="about-header">about us</h1> */}
        <div className="img-finbar">
          <img src={finbar} alt="Logo" className="finbar-image" />
        </div>
      </div>
      <div className="about-content-con">
        <div className="about-content">
          <div>
            {" "}
            I am Finbarr Chukwuebuka Egwuagu, a native of Izombe, in Oguta Local
            Government Area of Imo State, Nigeria. I grew up in a family of Four
            boys and One girl, of whom our parents gave a strong catholic
            upbringing. Initially in my tender years, my zeal for music was not
            so much profound, and so my attention was not consistent with
            regards to musical instruments and music in general. But i had an
            encounter which sparked my longing for music and particularly
            musical instrument. I attended an even in my church with my parents,
            and then I saw a man conducting the choir whose name was Finbarr. It
            did not hit me that my name was Finbarr as at then, so i continued
            my life.{" "}
          </div>{" "}
          <br /> <br />
          <div>
            When i entered the minor seminary, I met another choirmaster who
            comes around to teach the choristers, and his name was also Finbarr.
            So, I had the strong believe that everyone who goes by the name
            Finbarr should have something to do with music. And so, i channeled
            my attention to learning the keyboard, The seminary did not quite
            give me a professional background to music, but it gave me more
            longing to learning more musical instruments. And so, i continued my
            acquisition of knowledge through my seminary years. I was
            priviledged to serve as choirmaster, organist and assistant band
            leader at some time during my seminary years.{" "}
          </div>{" "}
          <br /> <br />
          <div>
            {" "}
            The brand name, FINBARRSAX MUSICALS came to existence when i came in
            contact with the saxophone, which seemed to be the instrument i give
            more time to now. And so, I try my best to create sweet sonorous
            melodies with it, giving it my own touch which i have gathered from
            my years of listening to people play and trying to create my own
            signature in every musical event i attend. I have been opportuned to
            play at events, and by the grace of God, i am still in the business
            of making good music with the instrument God has given me the grace
            to learn. At Finbarrsax Musicals, we work with an understanding that
            Music is Food for the soul, and hence, we promote diligence and
            harmony through our touch to your musical events and ceremonies. We
            work with the notion that music is a strong therapy for so many, and
            thus; we strive to give a unique touch to your musical events and
            occasions. This is a Self-motivated organization, and it is our love
            for music that has been pushing us to reach out to as many people as
            possible, and offer our genuine touch of music soothingly for every
            occasion we are invited to.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutScreen;
